# Modelos y adaptador

Archivos:
- Modelo API: `src/app/models/trade-api.model.ts` (`TradeApi`)
- Modelo interno: `src/app/models/trade.model.ts` (`Trade`)
- Adaptador: `src/app/adapters/trade.adapter.ts` (`adaptTrade`, `adaptTrades`)

## Mapeo API -> modelo interno

| Campo API (`TradeApi`) | Campo interno (`Trade`) | Transformación |
|---|---|---|
| `id` | `id` | Se copia tal cual |
| `title` | `title` | `trim()` |
| `description` | `description` | `trim()`; si queda vacío, "Sin descripción" |
| `category` | `category` | `trim()` y minúsculas; se normaliza a `Buy` o `Sell` |
| `date` | `date` | Se unifica a `YYYY-MM-DD` (admite `dd/mm/yyyy` e ISO con hora) |
| `result_pct` | `resultPct` | Conversión segura a número (texto o número); 0 si no es válido |
| `max_rr` | `maxRR` | Conversión segura a número; 0 si no es válido |
| `session` | `session` | `trim()`; primera letra en mayúscula, resto en minúsculas |
| `featured` (opcional) | `featured` | Si falta, `false` |