import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Commerce } from '../../interfaces/commerce.interface';
import { COMMERCE_MOCK } from '../../mocks/commerce.mocks';
import { CommerceService } from './commerce.service';

describe('CommerceService', () => {
  let service: CommerceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(CommerceService);
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

  describe('getAllCommerce', () => {
    it('debería realizar una petición GET y retornar una lista de artículos comerciales', () => {
      const countCommerce = 5;
      const mockCommerce: Commerce[] = COMMERCE_MOCK;

      service.getAllCommerce(countCommerce).subscribe((commerceList) => {
        expect(commerceList).toEqual(mockCommerce);
        expect(commerceList.length).toBe(mockCommerce.length);
      });

      const req = httpMock.expectOne(`http://localhost:3005/api/commerce/${countCommerce}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockCommerce);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countCommerce = 3;

      service.getAllCommerce(countCommerce).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`http://localhost:3005/api/commerce/${countCommerce}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });
});
