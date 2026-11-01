import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeBadgeComponent } from './trade-badge.component';

describe('TradeBadgeComponent', () => {
  let component: TradeBadgeComponent;
  let fixture: ComponentFixture<TradeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeBadgeComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('category', 'Buy');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the category', () => {
    expect(fixture.nativeElement.textContent).toContain('Buy');
  });
});