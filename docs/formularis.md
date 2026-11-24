# Formularios

## Formulario de búsqueda (`TradeFiltersComponent`)
Formulario reactivo (`ReactiveFormsModule`) con `FormGroup`:

| Control | Tipo | Validaciones |
|---|---|---|
| `text` | Texto de búsqueda | Síncrona `minLength(3)`; asíncrona `termHasResultsValidator` |
| `category` | Selector (`all`, `Buy`, `Sell`) | Ninguna |

## Validaciones
- **Síncrona:** mínimo 3 caracteres. Mensaje: "Escriu almenys 3 caràcters."
- **Asíncrona** (`src/app/validators/term-has-results.validator.ts`): consulta a la API si el término tiene resultados. Si no, error `noResults`. Espera 300 ms para no lanzar una petición por tecla.
- Los mensajes solo se muestran cuando el campo está modificado (`dirty`).

## Debounce y emisión de criterios
`valueChanges` espera 400 ms (`debounceTime`), después espera a que termine la validación asíncrona y, si el formulario es válido, emite `filtersChange` hacia `App`, que llama a `TradeService.search()`.

## Botón Netejar cerca
Hace `form.reset` con los valores iniciales y se vuelve a emitir la búsqueda sin filtros.

## Historial de búsquedas
Cada término válido se guarda con `SearchHistoryService` (`localStorage`). Se muestra bajo el formulario; al pulsar un término se recupera la búsqueda.

## Accesibilidad
Cada campo tiene `label` asociado con `for`/`id`. Los errores usan `role="alert"` y el estado de comprobación `role="status"`.