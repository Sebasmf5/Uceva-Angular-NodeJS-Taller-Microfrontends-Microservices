import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FINANCE_MOCK } from '../../mocks/finance.mocks';
import { FinanceTableComponent } from './finance-table.component';

describe('FinanceTableComponent', () => {
  let component: FinanceTableComponent;
  let fixture: ComponentFixture<FinanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada transacción', () => {
    component.finances = FINANCE_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.finances.length);
  });

  it('debería mostrar los datos de la transacción en cada columna', () => {
    component.finances = FINANCE_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const finance = component.finances[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(finance.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(finance.date);
      expect(columns[2].nativeElement.textContent.trim()).toBe(finance.accountName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(finance.accountNumber);
      expect(columns[4].nativeElement.textContent.trim()).toBe(`${finance.amount} ${finance.currency}`);
      expect(columns[5].nativeElement.textContent.trim()).toBe(finance.issuer);
      expect(columns[6].nativeElement.textContent.trim()).toBe(finance.type);
    });
  });

  it('debería mapear cada tipo de movimiento a su BadgeType correcto', () => {
    expect(component.typeMap['deposit']).toBe('success');
    expect(component.typeMap['withdrawal']).toBe('danger');
    expect(component.typeMap['payment']).toBe('primary');
    expect(component.typeMap['invoice']).toBe('warning');
  });
});