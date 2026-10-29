import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trade } from '../../models/trade.model';
import { TradeBadgeComponent } from '../trade-badge/trade-badge.component';

@Component({
  selector: 'app-trade-card',
  imports: [TradeBadgeComponent],
  templateUrl: './trade-card.component.html',
  styleUrl: './trade-card.component.scss',
})
export class TradeCardComponent {
  @Input({ required: true }) trade!: Trade;
  @Input() selected = false;
  @Output() tradeSelected = new EventEmitter<Trade>();

  onSelect(): void {
    this.tradeSelected.emit(this.trade);
  }
}