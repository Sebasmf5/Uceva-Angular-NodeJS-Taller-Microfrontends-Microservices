import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

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
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  {
        path: 'users',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './UsersPage',
        }).then(m => m.UsersPage),
    },    
  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './ProductsPage',
        }).then(m => m.ProductsPage),
    },
  /**
   * Ruta de comercio.
   *
   * @remarks
   * Renderiza el componente `CommercePage` expuesto por el microfrontend
   * `Microfrontend-Commerce-Angular` en el puerto 4205.
   */
    {
        path: 'commerce',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4205/remoteEntry.js',
                exposedModule: './CommercePage',
        }).then(m => m.CommercePage),
    },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];