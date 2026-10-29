import { Component, Input } from '@angular/core';
import { TradeDirection } from '../../models/trade.model';

@Component({
  selector: 'app-trade-badge',
  templateUrl: './trade-badge.component.html',
  styleUrl: './trade-badge.component.scss',
})
export class TradeBadgeComponent {
  @Input({ required: true }) category!: TradeDirection;
}