import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Commerce, CommerceDepartment } from '../../interfaces/commerce.interface';

/**
 * Componente de tabla de artículos comerciales.
 *
 * Se utiliza para mostrar un listado de artículos comerciales en una tabla,
 * mostrando información como id, producto, material, descripción, ISBN, precio
 * y un badge visual que indica el departamento comercial de cada artículo.
 *
 * @remarks
 * Este componente recibe los artículos comerciales desde un componente padre
 * a través del Input `commerceList` y utiliza el mapeo `departmentMap`
 * para asignar colores a los badges según el departamento.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-commerce-table [commerceList]="commerceItems"></app-commerce-table>
 * ```
 */
@Component({
  selector: 'app-commerce-table',
  templateUrl: './commerce-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CommerceTableComponent {
  /**
   * Listado de artículos comerciales que se mostrarán en la tabla.
   * @type {Commerce[]}
   * @remarks
   * Este Input permite pasar un array de artículos comerciales desde un componente padre,
   * generalmente `CommercePage`. Cada elemento debe cumplir la interfaz `Commerce`.
   */
  @Input() commerceList: Commerce[] = [];

  /**
   * Mapeo de departamentos comerciales a tipos de Badge.
   * @type {Record<CommerceDepartment, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada departamento:
   * - 'Tecnologia' → 'primary' (azul)
   * - 'Hogar' → 'success' (verde)
   * - 'Ropa' → 'warning' (amarillo)
   * - 'Deportes' → 'danger' (rojo)
   * - 'Juguetes' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada artículo comercial tenga un badge visual
   * que indique su departamento de forma clara para el usuario.
   */
  departmentMap: Record<CommerceDepartment, BadgeType> = {
    'Tecnologia': 'primary',
    'Hogar': 'success',
    'Ropa': 'warning',
    'Deportes': 'danger',
    'Juguetes': 'secondary',
  };
}
