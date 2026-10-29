import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeBadge } from './trade-badge.component';

describe('TradeBadge', () => {
  let component: TradeBadge;
  let fixture: ComponentFixture<TradeBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
