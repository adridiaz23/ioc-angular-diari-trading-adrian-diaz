import { TradeDirection } from './trade.model';

export interface TradeFilters {
  text: string;
  category: 'all' | TradeDirection; // 'all' = totes les categories
}