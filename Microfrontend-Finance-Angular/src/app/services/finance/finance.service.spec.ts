import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Finance } from '../../interfaces/finance.interface';
import { FINANCE_MOCK } from '../../mocks/finance.mocks';
import { FinanceService } from './finance.service';

describe('FinanceService', () => {
  let service: FinanceService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:3003/api/finance';

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(FinanceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllFinance', () => {

    it('debería realizar una petición GET y retornar una lista de transacciones', () => {
      const countFinance = 5;
      const mockFinances: Finance[] = FINANCE_MOCK;

      service.getAllFinance(countFinance).subscribe((finances) => {
        expect(finances).toEqual(mockFinances);
        expect(finances.length).toBe(mockFinances.length);
      });

      const req = httpMock.expectOne(`${apiUrl}/${countFinance}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockFinances);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countFinance = 3;

      service.getAllFinance(countFinance).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`${apiUrl}/${countFinance}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});