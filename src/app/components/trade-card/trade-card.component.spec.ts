import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeCardComponent } from './trade-card.component';
import { TRADES } from '../../data/trades.mock';

describe('TradeCardComponent', () => {
  let component: TradeCardComponent;
  let fixture: ComponentFixture<TradeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('trade', TRADES[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the trade title', () => {
    expect(fixture.nativeElement.textContent).toContain(TRADES[0].title);
  });
});