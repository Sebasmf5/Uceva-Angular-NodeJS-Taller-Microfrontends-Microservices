import { Routes } from '@angular/router';
import { FinancePage } from './pages/finance/finance.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Ruta raíz que carga la página de finanzas
 *
 * @see {@link FinancePage}
 */
export const routes: Routes = [
  /**
   * Ruta de finanzas.
   *
   * @remarks
   * Renderiza el componente `FinancePage`, encargado
   * de mostrar y gestionar el listado de transacciones.
   */
  { path: '', loadComponent: () => import('./pages/finance/finance.page').then((m) => m.FinancePage)},
];