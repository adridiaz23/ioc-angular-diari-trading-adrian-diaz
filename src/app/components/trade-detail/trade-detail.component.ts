import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Trade } from '../../models/trade.model';
import { TradeBadgeComponent } from '../trade-badge/trade-badge.component';

@Component({
  selector: 'app-trade-detail',
  imports: [DatePipe, TradeBadgeComponent],
  templateUrl: './trade-detail.component.html',
  styleUrl: './trade-detail.component.scss',
})
export class TradeDetailComponent {
  @Input() trade: Trade | null = null;
}