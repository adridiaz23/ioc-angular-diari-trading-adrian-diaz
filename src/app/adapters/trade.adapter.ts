import { TradeApi } from '../models/trade-api.model';
import { Trade } from '../models/trade.model';

const DEFAULT_DESCRIPTION = 'Sin descripción';

function toNumber(value: number | string | undefined | null, fallback = 0): number {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : fallback;
  }
  const text = (value ?? '').trim().replace(',', '.');
  if (text === '') {
    return fallback;
  }
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeCategory(value: string): 'Buy' | 'Sell' {
  return (value ?? '').trim().toLowerCase() === 'sell' ? 'Sell' : 'Buy';
}

function normalizeSession(value: string): string {
  const text = (value ?? '').trim().toLowerCase();
  return text === '' ? 'London' : text.charAt(0).toUpperCase() + text.slice(1);
}

function normalizeDate(value: string): string {
  const text = (value ?? '').trim();
  const dmy = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(text);
  if (dmy) {
    return `${dmy[3]}-${dmy[2]}-${dmy[1]}`;
  }
  return text.slice(0, 10);
}

export function adaptTrade(api: TradeApi): Trade {
  const description = (api.description ?? '').trim();
  return {
    id: api.id,
    title: (api.title ?? '').trim(),
    description: description === '' ? DEFAULT_DESCRIPTION : description,
    category: normalizeCategory(api.category),
    date: normalizeDate(api.date),
    resultPct: toNumber(api.result_pct),
    maxRR: toNumber(api.max_rr),
    session: normalizeSession(api.session),
    featured: api.featured ?? false,
  };
}

export function adaptTrades(list: TradeApi[]): Trade[] {
  return list.map(adaptTrade);
}

export function toApiPayload(trade: Omit<Trade, 'id'>): Omit<TradeApi, 'id'> {
  return {
    title: trade.title,
    description: trade.description,
    category: trade.category,
    date: trade.date,
    result_pct: trade.resultPct,
    max_rr: trade.maxRR,
    session: trade.session,
    featured: trade.featured,
  };
}