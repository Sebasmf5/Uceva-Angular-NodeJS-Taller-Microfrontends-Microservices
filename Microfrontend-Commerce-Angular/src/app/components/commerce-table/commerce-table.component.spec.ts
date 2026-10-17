import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { COMMERCE_MOCK } from '../../mocks/commerce.mocks';
import { CommerceTableComponent } from './commerce-table.component';

describe('CommerceTableComponent', () => {
  let component: CommerceTableComponent;
  let fixture: ComponentFixture<CommerceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceTableComponent);
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

  it('debería renderizar una fila por cada artículo comercial', () => {
    component.commerceList = COMMERCE_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.commerceList.length);
  });

  it('debería mostrar los datos del artículo comercial en cada columna', () => {
    component.commerceList = COMMERCE_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const item = component.commerceList[index];
      const itemPrice = new CurrencyPipe('en-US').transform(item.price);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(item.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(item.product);
      expect(columns[2].nativeElement.textContent.trim()).toBe(item.material);
      expect(columns[3].nativeElement.textContent.trim()).toBe(item.description);
      expect(columns[4].nativeElement.textContent.trim()).toBe(item.isbn);
      expect(columns[5].nativeElement.textContent.trim()).toBe(itemPrice);
      expect(columns[6].nativeElement.textContent.trim()).toBe(item.department);
    });
  });

  it('debería mapear cada departamento comercial a su BadgeType correcto', () => {
    expect(component.departmentMap['Tecnologia']).toBe('primary');
    expect(component.departmentMap['Hogar']).toBe('success');
    expect(component.departmentMap['Ropa']).toBe('warning');
    expect(component.departmentMap['Deportes']).toBe('danger');
    expect(component.departmentMap['Juguetes']).toBe('secondary');
  });
});
