import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'trade-search-history';
const MAX_ITEMS = 5;

@Injectable({ providedIn: 'root' })
export class SearchHistoryService {
  private readonly itemsState = signal<string[]>(this.load());
  readonly items = this.itemsState.asReadonly();

  add(term: string): void {
    const clean = term.trim();
    if (clean === '') {
      return;
    }
    const current = this.itemsState();
    if (current[0]?.toLowerCase() === clean.toLowerCase()) {
      return; // evita duplicados consecutivos
    }
    const next = [clean, ...current].slice(0, MAX_ITEMS);
    this.itemsState.set(next);
    this.save(next);
  }

  clear(): void {
    this.itemsState.set([]);
    this.save([]);
  }

  private load(): string[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === 'string')
        : [];
    } catch {
      return [];
    }
  }

  private save(items: string[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // sin localStorage el historial solo vive en memoria
    }
  }
}