import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commerce } from '../../interfaces/commerce.interface';

/**
 * Servicio encargado de la gestión de artículos comerciales.
 *
 * Proporciona métodos para obtener información de comercio
 * desde la API REST del microservicio de Commerce.
 *
 * @example
 * ```ts
 * constructor(private commerceService: CommerceService) {}
 *
 * this.commerceService.getAllCommerce(10).subscribe(commerce => {
 *   console.log(commerce);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CommerceService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de artículos comerciales desde el backend.
   *
   * @param countCommerce Número de artículos comerciales a obtener.
   * @returns Observable que emite un array de artículos comerciales.
   *
   * @example
   * ```ts
   * this.commerceService.getAllCommerce(5).subscribe(commerce => {
   *   console.log(commerce);
   * });
   * ```
   */
  getAllCommerce(countCommerce: number): Observable<Commerce[]> {
    return this.httpClient.get<Commerce[]>(`http://localhost:3005/api/commerce/${countCommerce}`);
  }
}
