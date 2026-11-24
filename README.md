# Diari de trading US30

Aplicació Angular de l'EAC2 (DA2_OA01, Unitat 2). Mostra un diari d'operacions de trading sobre US30 amb llistat, filtres, selecció i panell de detall.

## Versions utilitzades
- Node.js 24.19.0
- npm 11.17.0
- Angular CLI 22.2.1
- Git 2.53.0

## Comandes
```bash
npm install
ng serve      # http://localhost:4200
ng test
ng build
```

## Branca
Treball a la branca `ra2-components`.

## Components creats
- `App`: component principal; guarda les dades, la selecció i aplica el filtratge.
- `TradeFiltersComponent`: formulari de filtres amb `ngModel`, `required`, `minlength` i restabliment.
- `TradeListComponent`: recorre el llistat amb `@for` i `track`.
- `TradeCardComponent`: resum d'una operació amb pipe `date`.
- `TradeBadgeComponent`: etiqueta Buy/Sell amb color.
- `TradeDetailComponent`: panell de detall de l'operació seleccionada.

## Model i dades
- Model: `src/app/models/trade.model.ts`
- Dades mock (11 operacions): `src/app/data/trades.mock.ts`

## Accessibilitat i responsive
Enllaç de salt al contingut, focus visible, etiquetes associades als camps, `role="status"` al comptador i `role="alert"` a l'error. El disseny passa a una columna per sota de 800 px.

## EAC3: servicios externos y formularios avanzados (RA3)

- **Rama:** `ra3-serveis`
- **Versiones:** Node.js 24.x, npm 11.x, Angular 22.x, TypeScript 6.0.x, json-server 0.17.4
- **Instalar dependencias:** `npm install`
- **Arrancar la API:** `npm run api` (usa `api/db.json`, puerto 3001; URL base `http://localhost:3001`)
- **Arrancar Angular:** `ng serve` (en otro terminal) y abrir `http://localhost:4200`
- **Tests y build:** `npm test`, `npm run build`

### Servicios, modelos y formularios
- Servicios: `TradeService`, `SearchHistoryService` (ver `docs/serveis.md`)
- Modelos y adaptador: `TradeApi`, `Trade`, `adaptTrade` (ver `docs/models.md`)
- Formulario de búsqueda con validaciones e historial (ver `docs/formularis.md`)