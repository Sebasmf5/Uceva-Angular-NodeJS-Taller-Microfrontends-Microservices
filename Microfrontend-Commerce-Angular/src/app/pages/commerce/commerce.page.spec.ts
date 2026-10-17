import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { CommercePage } from './commerce.page';
import { CommerceService } from '../../services/commerce/commerce.service';
import { CommerceTableComponent } from '../../components/commerce-table/commerce-table.component';
import { COMMERCE_MOCK } from '../../mocks/commerce.mocks';

describe('CommercePage', () => {
  let component: CommercePage;
  let fixture: ComponentFixture<CommercePage>;
  let commerceService: CommerceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercePage, CommerceTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CommercePage);
    component = fixture.componentInstance;
    commerceService = TestBed.inject(CommerceService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCommerce al iniciar', () => {
    const spyGetAllCommerce = jest.spyOn(commerceService, 'getAllCommerce').mockReturnValue(of(COMMERCE_MOCK));
    fixture.detectChanges();
    expect(spyGetAllCommerce).toHaveBeenCalledWith(10);
  });

  it('debería asignar los artículos comerciales recibidos del servicio y actualizar state a success', () => {
    jest.spyOn(commerceService, 'getAllCommerce').mockReturnValue(of(COMMERCE_MOCK));
    fixture.detectChanges();
    expect(component.commerceList).toEqual(COMMERCE_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería pasar los artículos comerciales al componente commerce-table', () => {
    jest.spyOn(commerceService, 'getAllCommerce').mockReturnValue(of(COMMERCE_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(CommerceTableComponent))
      .componentInstance;
    expect(tableComponent.commerceList).toEqual(COMMERCE_MOCK);
  });

  it('debería manejar el error cuando falla getAllCommerce y actualizar state a error', () => {
    component.commerceList = [];
    const errorResponse = new Error('Error al cargar comercio');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(commerceService, 'getAllCommerce').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(commerceService.getAllCommerce).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.commerceList.length).toBe(0);
    expect(component.state).toBe('error');
  });
});
