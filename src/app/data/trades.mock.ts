import { Trade } from '../models/trade.model';

export const TRADES: Trade[] = [
  { id: 1, title: 'US30 Buy #1', description: 'Compra en la sesión de Londres. Solo llegó a RR 0.5 y se cerró en pérdida.', category: 'Buy', date: '2026-10-02', resultPct: -1, maxRR: 0.5, session: 'London' },
  { id: 2, title: 'US30 Buy #2', description: 'Compra en Londres con recorrido limpio. Alcanzó RR 3.', category: 'Buy', date: '2026-10-06', resultPct: 1, maxRR: 3, session: 'London', featured: true },
  { id: 3, title: 'US30 Sell #3', description: 'Venta en Londres. Alcanzó RR 1 y se cerró en beneficio.', category: 'Sell', date: '2026-10-07', resultPct: 1, maxRR: 1, session: 'London' },
  { id: 4, title: 'US30 Sell #4', description: 'Venta en Londres con movimiento fuerte a favor. Alcanzó RR 3.', category: 'Sell', date: '2026-10-08', resultPct: 1, maxRR: 3, session: 'London', featured: true },
  { id: 5, title: 'US30 Buy #5', description: 'Compra en Londres tras la apertura. Alcanzó RR 3.', category: 'Buy', date: '2026-10-13', resultPct: 1, maxRR: 3, session: 'London', featured: true },
  { id: 6, title: 'US30 Buy #6', description: 'Compra en Londres. Alcanzó RR 1 y se cerró en beneficio.', category: 'Buy', date: '2026-10-15', resultPct: 1, maxRR: 1, session: 'London' },
  { id: 7, title: 'US30 Buy #7', description: 'Compra en Londres siguiendo la tendencia del día. Alcanzó RR 1.', category: 'Buy', date: '2026-10-16', resultPct: 1, maxRR: 1, session: 'London' },
  { id: 8, title: 'US30 Buy #8', description: 'Compra en Londres. Operación ordenada que alcanzó RR 1.', category: 'Buy', date: '2026-10-20', resultPct: 1, maxRR: 1, session: 'London' },
  { id: 9, title: 'US30 Sell #9', description: 'Venta en Londres. Alcanzó RR 1 y se cerró en beneficio.', category: 'Sell', date: '2026-10-21', resultPct: 1, maxRR: 1, session: 'London' },
  { id: 10, title: 'US30 Sell #10', description: 'Venta en Londres con ruptura clara. Alcanzó RR 1.', category: 'Sell', date: '2026-10-22', resultPct: 1, maxRR: 1, session: 'London' },
  { id: 11, title: 'US30 Sell #11', description: 'Venta en Londres. Alcanzó RR 1 y cerró el mes en positivo.', category: 'Sell', date: '2026-10-23', resultPct: 1, maxRR: 1, session: 'London' }
];