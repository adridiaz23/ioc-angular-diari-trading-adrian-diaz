import { describe, expect, it } from 'vitest';

import { adaptTrade } from './trade.adapter';

describe('adaptTrade', () => {
  it('normaliza textos, categoría, números, fecha y sesión', () => {
    const trade = adaptTrade({
      id: 1,
      title: ' US30 Buy #1 ',
      description: '   ',
      category: 'buy',
      date: '06/10/2026',
      result_pct: '-1',
      max_rr: '0.5',
      session: ' london ',
    });

    expect(trade.title).toBe('US30 Buy #1');
    expect(trade.description).toBe('Sin descripción');
    expect(trade.category).toBe('Buy');
    expect(trade.date).toBe('2026-10-06');
    expect(trade.resultPct).toBe(-1);
    expect(trade.maxRR).toBe(0.5);
    expect(trade.session).toBe('London');
    expect(trade.featured).toBe(false);
  });
});