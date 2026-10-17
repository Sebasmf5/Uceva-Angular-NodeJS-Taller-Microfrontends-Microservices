import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Supplier, SupplierStatus } from '../../interfaces/supplier.interface';

/**
 * Componente de tabla de proveedores.
 *
 * Se utiliza para mostrar un listado de proveedores en una tabla,
 * con el nombre de la empresa, su eslogan, la ubicación, los datos
 * de contacto y un badge visual que indica el estado del proveedor.
 *
 * @remarks
 * Este componente recibe los proveedores desde un componente padre
 * a través del Input `suppliers` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-suppliers-table [suppliers]="suppliersList"></app-suppliers-table>
 * ```
 */
@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  imports: [BadgeAtom],
})
export class SuppliersTableComponent {
  /**
   * Listado de proveedores que se mostrarán en la tabla.
   * @type {Supplier[]}
   * @remarks
   * Este Input permite pasar un array de proveedores desde un componente padre,
   * generalmente `SuppliersPage`. Cada proveedor debe cumplir la interfaz `Supplier`.
   */
  @Input() suppliers: Supplier[] = [];
  /**
   * Mapeo de estados de proveedor a tipos de Badge.
   * @type {Record<SupplierStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'active' → 'success' (verde)
   * - 'inactive' → 'danger' (rojo)
   * - 'pending' → 'warning' (amarillo)
   */
  statusMap: Record<SupplierStatus, BadgeType> = {
    'active': 'success',
    'inactive': 'danger',
    'pending': 'warning',
  }
}
