import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeListComponent } from './trade-list.component';
import { TRADES } from '../../data/trades.mock';

describe('TradeListComponent', () => {
  let component: TradeListComponent;
  let fixture: ComponentFixture<TradeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('trades', TRADES);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one card per trade', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-trade-card');
    expect(cards.length).toBe(TRADES.length);
  });
});