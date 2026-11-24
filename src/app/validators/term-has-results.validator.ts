import { AsyncValidatorFn } from '@angular/forms';
import { map, of, switchMap, timer } from 'rxjs';

import { TradeService } from '../services/trade.service';

export const MIN_SEARCH_LENGTH = 3;

export function termHasResultsValidator(tradeService: TradeService): AsyncValidatorFn {
  return (control) => {
    const term = String(control.value ?? '').trim();
    if (term.length < MIN_SEARCH_LENGTH) {
      return of(null); // de esto se encarga la validación síncrona
    }
    return timer(300).pipe(
      switchMap(() => tradeService.hasResults(term)),
      map((found) => (found ? null : { noResults: true })),
    );
  };
}