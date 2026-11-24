# Servicios

## TradeService (`src/app/services/trade.service.ts`)
Único punto de comunicación con la API (`API_BASE_URL` + `/trades`). Los componentes no construyen URLs ni usan `HttpClient`.

| Método | Descripción |
|---|---|
| `loadAll()` | Carga todos los trades (consulta sin filtros) |
| `search(query)` | Lanza una consulta con texto y categoría |
| `retry()` | Repite la última consulta (botón Reintentar) |
| `create(trade)` | `POST` a la API; después recarga la lista |
| `hasResults(text)` | Usado por la validación asíncrona del formulario |

Estado expuesto como señales de solo lectura: `trades`, `status` (`idle`, `loading`, `success`, `error`), `loading` y `error`.

## Flujo con `switchMap`
El `switchMap` está en el constructor de `TradeService`, en el pipeline de `query$`, alimentado por `loadAll()`, `search()` y `retry()`. Si llega una consulta nueva mientras otra está en curso, la anterior se cancela. El `catchError` va dentro del `switchMap` para que un error de red no cierre el flujo.

## Adaptación y filtrado
Cada respuesta pasa por `adaptTrades` (ver `docs/models.md`). El filtro de texto y categoría se aplica en el servicio, después de adaptar los datos, porque la API devuelve valores sin normalizar.

## SearchHistoryService (`src/app/services/search-history.service.ts`)
Guarda los últimos 5 términos válidos en `localStorage` (clave `trade-search-history`), sin duplicados consecutivos. Lectura y escritura van dentro de `try/catch`.