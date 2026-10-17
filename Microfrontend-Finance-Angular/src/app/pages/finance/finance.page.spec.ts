import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancePage } from './finance.page';
import { provideHttpClient } from '@angular/common/http';
import { FinanceService } from '../../services/finance/finance.service';
import { FinanceTableComponent } from '../../components/finance-table/finance-table.component';
import { of, throwError } from 'rxjs';
import { FINANCE_MOCK } from '../../mocks/finance.mocks';
import { By } from '@angular/platform-browser';

describe('FinancePage', () => {
  let component: FinancePage;
  let fixture: ComponentFixture<FinancePage>;
  let financeService: FinanceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancePage, FinanceTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancePage);
    component = fixture.componentInstance;
    financeService = TestBed.inject(FinanceService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllFinance con 10 al iniciar', () => {
    const spyGetAll = jest.spyOn(financeService, 'getAllFinance').mockReturnValue(of(FINANCE_MOCK));
    fixture.detectChanges();
    expect(spyGetAll).toHaveBeenCalledWith(10);
  });

  it('debería asignar las transacciones recibidas y cambiar el estado a success', () => {
    jest.spyOn(financeService, 'getAllFinance').mockReturnValue(of(FINANCE_MOCK));
    fixture.detectChanges();
    expect(component.finances).toEqual(FINANCE_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería pasar las transacciones al componente finance-table', () => {
    jest.spyOn(financeService, 'getAllFinance').mockReturnValue(of(FINANCE_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(FinanceTableComponent))
      .componentInstance;
    expect(tableComponent.finances).toEqual(FINANCE_MOCK);
  });

  it('debería manejar el error cuando falla getAllFinance', () => {
    component.finances = [];
    const errorResponse = new Error('Error al cargar transacciones');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(financeService, 'getAllFinance').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(financeService.getAllFinance).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.finances.length).toBe(0);
    expect(component.state).toBe('error');
  });
});