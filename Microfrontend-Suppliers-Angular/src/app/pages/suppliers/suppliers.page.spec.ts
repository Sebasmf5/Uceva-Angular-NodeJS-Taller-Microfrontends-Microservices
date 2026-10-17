import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersPage } from './suppliers.page';
import { provideHttpClient } from '@angular/common/http';
import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { SuppliersTableComponent } from '../../components/suppliers-table/suppliers-table.component';
import { of, throwError } from 'rxjs';
import { SUPPLIERS_MOCK } from '../../mocks/suppliers.mocks';
import { By } from '@angular/platform-browser';

describe('SuppliersPage', () => {
  let component: SuppliersPage;
  let fixture: ComponentFixture<SuppliersPage>;
  let suppliersService: SuppliersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersPage, SuppliersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersPage);
    component = fixture.componentInstance;
    suppliersService = TestBed.inject(SuppliersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar con el estado init y sin proveedores', () => {
    expect(component.state).toBe('init');
    expect(component.suppliers).toEqual([]);
  });

  it('debería llamar a getAllSuppliers con 10 al iniciar', () => {
    const spyGetAll = jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAll).toHaveBeenCalledWith(10);
  });

  it('debería asignar los proveedores recibidos y cambiar el estado a success', () => {
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    expect(component.suppliers).toEqual(SUPPLIERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería pasar los proveedores al componente suppliers-table', () => {
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(SuppliersTableComponent))
      .componentInstance;
    expect(tableComponent.suppliers).toEqual(SUPPLIERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllSuppliers', () => {
    component.suppliers = [];
    const errorResponse = new Error('Error al cargar proveedores');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(suppliersService.getAllSuppliers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.suppliers.length).toBe(0);
    expect(component.state).toBe('error');
  });
});
