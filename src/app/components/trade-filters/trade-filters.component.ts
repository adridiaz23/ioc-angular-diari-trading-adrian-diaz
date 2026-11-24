import { Component, inject, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, filter, startWith, switchMap, take } from 'rxjs';

import { TradeFilters } from '../../models/trade-filters.model';
import { SearchHistoryService } from '../../services/search-history.service';
import { TradeService } from '../../services/trade.service';
import { MIN_SEARCH_LENGTH, termHasResultsValidator } from '../../validators/term-has-results.validator';

@Component({
  selector: 'app-trade-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './trade-filters.component.html',
  styleUrl: './trade-filters.component.scss',
})
export class TradeFiltersComponent {
  private readonly tradeService = inject(TradeService);
  protected readonly history = inject(SearchHistoryService);
  protected readonly minLength = MIN_SEARCH_LENGTH;

  readonly filtersChange = output<TradeFilters>();

  protected readonly form = new FormGroup({
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(MIN_SEARCH_LENGTH)],
      asyncValidators: [termHasResultsValidator(this.tradeService)],
    }),
    category: new FormControl<TradeFilters['category']>('all', { nonNullable: true }),
  });

  constructor() {
    this.form.valueChanges
      .pipe(
        debounceTime(400),
        // esperamos a que acabe la validación asíncrona antes de decidir
        switchMap(() =>
          this.form.statusChanges.pipe(
            startWith(this.form.status),
            filter((status) => status !== 'PENDING'),
            take(1),
          ),
        ),
        filter((status) => status === 'VALID'),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        const { text, category } = this.form.getRawValue();
        this.history.add(text);
        this.filtersChange.emit({ text, category });
      });
  }

  protected get text() {
    return this.form.controls.text;
  }

  protected clear(): void {
    this.form.reset({ text: '', category: 'all' });
  }

  protected useHistory(term: string): void {
    this.form.controls.text.setValue(term);
    this.form.controls.text.markAsDirty();
  }
}