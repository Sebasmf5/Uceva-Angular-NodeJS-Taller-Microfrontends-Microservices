import { Component, inject } from '@angular/core';
import { CommerceTableComponent } from '../../components/commerce-table/commerce-table.component';
import { Commerce } from '../../interfaces/commerce.interface';
import { CommerceService } from '../../services/commerce/commerce.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de artículos comerciales.
 *
 * Se utiliza para gestionar y mostrar un listado de artículos comerciales
 * utilizando el componente `CommerceTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CommerceService`
 * para obtener los datos comerciales desde el microservicio y pasarlos
 * al componente de tabla. Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.page.html',
  imports: [CommerceTableComponent, AlertComponent],
})
export class CommercePage {
  /**
   * Listado de artículos comerciales obtenidos desde el servicio.
   * @type {Commerce[]}
   */
  commerceList: Commerce[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener artículos comerciales.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private commerceService = inject(CommerceService);

  /**
   * Inicializa el componente y carga los artículos comerciales.
   * @remarks
   * Se suscribe al método `getAllCommerce()` del servicio y
   * asigna los datos recibidos a la propiedad `commerceList`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.commerceService.getAllCommerce(10).subscribe({
      next: (commerce) => {
        this.commerceList = commerce;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
