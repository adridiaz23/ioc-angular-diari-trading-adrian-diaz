import { TradeDirection } from './trade.model';

export interface TradeFilters {
  text: string;
  category: '' | TradeDirection; // '' = todas
}