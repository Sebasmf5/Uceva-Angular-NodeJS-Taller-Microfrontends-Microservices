import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finance } from '../../interfaces/finance.interface';

/**
 * Servicio encargado de la gestión de transacciones.
 *
 * Proporciona métodos para obtener transacciones bancarias
 * desde el Microservicio de Finanzas (API REST).
 *
 * @example
 * ```ts
 * constructor(private financeService: FinanceService) {}
 *
 * this.financeService.getAllFinance(10).subscribe(finances => {
 *   console.log(finances);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class FinanceService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de transacciones desde el Microservicio de Finanzas.
   *
   * @param countFinance Número de transacciones a obtener.
   * @returns Observable que emite un array de transacciones.
   *
   * @example
   * ```ts
   * this.financeService.getAllFinance(5).subscribe(finances => {
   *   console.log(finances);
   * });
   * ```
   */
  getAllFinance(countFinance: number): Observable<Finance[]> {
    return this.httpClient.get<Finance[]>(`http://localhost:3003/api/finance/${countFinance}`);
  }
}