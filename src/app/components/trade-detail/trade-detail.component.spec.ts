import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeDetail } from './trade-detail.component';

describe('TradeDetail', () => {
  let component: TradeDetail;
  let fixture: ComponentFixture<TradeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
