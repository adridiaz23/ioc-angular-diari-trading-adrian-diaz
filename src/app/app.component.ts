import { Component } from '@angular/core';
import { TRADES } from './data/trades.mock';
import { Trade } from './models/trade.model';
import { TradeFilters } from './models/trade-filters.model';
import { TradeListComponent } from './components/trade-list/trade-list.component';
import { TradeFiltersComponent } from './components/trade-filters/trade-filters.component';
import { TradeDetailComponent } from './components/trade-detail/trade-detail.component';

@Component({
  selector: 'app-root',
  imports: [TradeListComponent, TradeFiltersComponent, TradeDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  trades: Trade[] = TRADES;
  visibleTrades: Trade[] = TRADES;
  selectedTrade: Trade | null = null;

  onFiltersChange(f: TradeFilters): void {
    const text = f.text.trim().toLowerCase();
    this.visibleTrades = this.trades.filter(
      (t) =>
        (!text ||
          t.title.toLowerCase().includes(text) ||
          t.description.toLowerCase().includes(text)) &&
        (f.category === 'all' || t.category === f.category),
    );
  }

  onTradeSelected(t: Trade): void {
    this.selectedTrade = t;
  }
}