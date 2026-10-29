import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeFilters } from './trade-filters.component';

describe('TradeFilters', () => {
  let component: TradeFilters;
  let fixture: ComponentFixture<TradeFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
