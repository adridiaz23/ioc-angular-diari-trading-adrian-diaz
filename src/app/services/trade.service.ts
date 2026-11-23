import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, switchMap, tap } from 'rxjs';

import { adaptTrade, adaptTrades, toApiPayload } from '../adapters/trade.adapter';
import { API_BASE_URL } from '../core/api.config';
import { Trade } from '../models/trade.model';
import { TradeApi } from '../models/trade-api.model';

export interface TradeQuery {
  text: string;
  category: Trade['category'] | '';
}

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

@Injectable({ providedIn: 'root' })
export class TradeService {
  private readonly http = inject(HttpClient);
  private readonly url = `${API_BASE_URL}/trades`;

  private readonly query$ = new Subject<TradeQuery>();
  private lastQuery: TradeQuery = { text: '', category: '' };

  private readonly tradesState = signal<Trade[]>([]);
  private readonly statusState = signal<RequestStatus>('idle');
  private readonly errorState = signal<string | null>(null);

  readonly trades = this.tradesState.asReadonly();
  readonly status = this.statusState.asReadonly();
  readonly error = this.errorState.asReadonly();
  readonly loading = computed(() => this.statusState() === 'loading');

  constructor() {
    this.query$
      .pipe(
        tap((query) => {
          this.lastQuery = query;
          this.statusState.set('loading');
          this.errorState.set(null);
        }),
        // switchMap cancela la petición anterior si llega una consulta nueva
        switchMap((query) =>
          this.fetchTrades(query).pipe(
            // el catchError va DENTRO del switchMap para que el flujo no muera tras un error
            catchError(() => of(null)),
          ),
        ),
        takeUntilDestroyed(),
      )
      .subscribe((result) => {
        if (result === null) {
          this.errorState.set('No se ha podido conectar con la API. Comprueba que está arrancada.');
          this.statusState.set('error');
        } else {
          this.tradesState.set(result);
          this.statusState.set('success');
        }
      });
  }

  loadAll(): void {
    this.search({ text: '', category: '' });
  }

  search(query: TradeQuery): void {
    this.query$.next(query);
  }

  retry(): void {
    this.query$.next(this.lastQuery);
  }

  create(trade: Omit<Trade, 'id'>): Observable<Trade> {
    return this.http.post<TradeApi>(this.url, toApiPayload(trade)).pipe(
      map((created) => adaptTrade(created)),
      tap(() => this.retry()),
    );
  }

  private fetchTrades(query: TradeQuery): Observable<Trade[]> {
    return this.http.get<TradeApi[]>(this.url).pipe(
      map((list) => adaptTrades(list)),
      map((trades) => this.applyFilters(trades, query)),
    );
  }

  private applyFilters(trades: Trade[], query: TradeQuery): Trade[] {
    const text = query.text.trim().toLowerCase();
    return trades.filter(
      (trade) =>
        (query.category === '' || trade.category === query.category) &&
        (text === '' || `${trade.title} ${trade.description}`.toLowerCase().includes(text)),
    );
  }
}