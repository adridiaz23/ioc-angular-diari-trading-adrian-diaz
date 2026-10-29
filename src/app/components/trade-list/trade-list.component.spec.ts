import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeList } from './trade-list.component';

describe('TradeList', () => {
  let component: TradeList;
  let fixture: ComponentFixture<TradeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeList],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
