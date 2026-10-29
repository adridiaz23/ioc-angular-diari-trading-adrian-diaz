import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trade } from '../../models/trade.model';
import { TradeCardComponent } from '../trade-card/trade-card.component';

@Component({
  selector: 'app-trade-list',
  imports: [TradeCardComponent],
  templateUrl: './trade-list.component.html',
  styleUrl: './trade-list.component.scss',
})
export class TradeListComponent {
  @Input({ required: true }) trades: Trade[] = [];
  @Input() selectedId: number | null = null;
  @Output() tradeSelected = new EventEmitter<Trade>();
}