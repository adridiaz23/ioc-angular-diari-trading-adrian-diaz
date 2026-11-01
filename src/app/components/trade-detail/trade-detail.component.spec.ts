import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeDetailComponent } from './trade-detail.component';
import { TRADES } from '../../data/trades.mock';

describe('TradeDetailComponent', () => {
  let component: TradeDetailComponent;
  let fixture: ComponentFixture<TradeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask to select a trade when there is none', () => {
    expect(fixture.nativeElement.textContent).toContain('Selecciona una operació');
  });

  it('should show the selected trade', () => {
    fixture.componentRef.setInput('trade', TRADES[0]);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain(TRADES[0].title);
  });
});