export type TradeDirection = 'Buy' | 'Sell';
 
export interface Trade {
  id: number;
  title: string;
  description: string;
  category: TradeDirection; // dirección de la operación (columna "Select" de Notion)
  date: string;             // formato ISO: 'YYYY-MM-DD'
  resultPct: number;        // resultado en % (puede ser negativo)
  maxRR: 0.5 | 1 | 3;       // mayor objetivo RR alcanzado
  session: string;          // sesión de mercado
  featured?: boolean;       // operación destacada (alcanzó RR3)
}
 