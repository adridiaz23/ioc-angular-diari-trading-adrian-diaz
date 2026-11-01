import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeFiltersComponent } from './trade-filters.component';

describe('TradeFiltersComponent', () => {
  let component: TradeFiltersComponent;
  let fixture: ComponentFixture<TradeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the filters when applied', () => {
    let emitted: unknown;
    component.filtersChange.subscribe((f) => (emitted = f));
    component.filters = { text: 'sell', category: 'Sell' };
    component.apply();
    expect(emitted).toEqual({ text: 'sell', category: 'Sell' });
  });
});