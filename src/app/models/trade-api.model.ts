export interface TradeApi {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  result_pct: number | string;
  max_rr: number | string;
  session: string;
  featured?: boolean;
}