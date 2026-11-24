import { Component, computed, inject, signal } from '@angular/core';
import { TRADES } from './data/trades.mock';
import { Trade } from './models/trade.model';
import { TradeFilters } from './models/trade-filters.model';
import { TradeListComponent } from './components/trade-list/trade-list.component';
import { TradeFiltersComponent } from './components/trade-filters/trade-filters.component';
import { TradeDetailComponent } from './components/trade-detail/trade-detail.component';
import { TradeService } from './services/trade.service';

@Component({
  selector: 'app-root',
  imports: [TradeListComponent, TradeFiltersComponent, TradeDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected readonly tradeService = inject(TradeService);

  protected readonly trades = this.tradeService.trades;

  selectedTrade: Trade | null = null;

  constructor() {
    this.tradeService.loadAll();
  }

  onFiltersChange(f: TradeFilters): void {
    this.tradeService.search({
      text: f.text,
      category: f.category === 'all' ? '' : f.category,
    });
  }

  onTradeSelected(t: Trade): void {
    this.selectedTrade = t;
  }

  addSampleTrade(): void {
    this.tradeService
      .create({
        title: 'US30 Buy #12',
        description: 'Operación de prueba creada con POST.',
        category: 'Buy',
        date: '2026-11-23',
        resultPct: 1,
        maxRR: 1,
        session: 'London',
        featured: false,
      })
      .subscribe();
  }
}