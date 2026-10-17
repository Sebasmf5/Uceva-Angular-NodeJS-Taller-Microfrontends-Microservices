import { Routes } from '@angular/router';
import { CommercePage } from './pages/commerce/commerce.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 *
 * @see {@link CommercePage}
 */
export const routes: Routes = [
  /**
   * Ruta principal de comercio.
   *
   * @remarks
   * Renderiza el componente `CommercePage`, encargado
   * de mostrar y gestionar el listado de artículos comerciales.
   */
  { path: '', loadComponent: () => import('./pages/commerce/commerce.page').then((m) => m.CommercePage) },
];
