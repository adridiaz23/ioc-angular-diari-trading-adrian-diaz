import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { TradeFiltersComponent } from './trade-filters.component';

describe('TradeFiltersComponent', () => {
  let fixture: ComponentFixture<TradeFiltersComponent>;
  let input: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    fixture = TestBed.createComponent(TradeFiltersComponent);
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('#search-text');
  });

  it('se crea con el campo de búsqueda y el selector de categoría', () => {
    expect(input).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#search-category')).toBeTruthy();
  });

  it('muestra error de validación con menos de 3 caracteres', () => {
    input.value = 'ab';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('almenys 3');
  });

  it('el botón Netejar cerca vacía el campo', () => {
    input.value = 'ab';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(input.value).toBe('');
  });
});