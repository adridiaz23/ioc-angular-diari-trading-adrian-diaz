import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TradeFilters } from '../../models/trade-filters.model';

@Component({
  selector: 'app-trade-filters',
  imports: [FormsModule],
  templateUrl: './trade-filters.component.html',
  styleUrl: './trade-filters.component.scss',
})
export class TradeFiltersComponent {
  @Output() filtersChange = new EventEmitter<TradeFilters>();

  filters: TradeFilters = { text: '', category: '' };

  apply(): void {
    this.filtersChange.emit({ ...this.filters });
  }
}