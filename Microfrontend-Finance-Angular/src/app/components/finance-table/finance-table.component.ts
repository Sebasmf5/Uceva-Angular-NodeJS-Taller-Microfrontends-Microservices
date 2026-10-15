import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Finance, FinanceType } from '../../interfaces/finance.interface';

/**
 * Componente de tabla de transacciones.
 *
 * Se utiliza para mostrar un listado de transacciones bancarias en una tabla,
 * con la fecha, la cuenta, el monto, la franquicia y un badge visual
 * que indica el tipo de movimiento.
 *
 * @remarks
 * Este componente recibe las transacciones desde un componente padre
 * a través del Input `finances` y utiliza el mapeo `typeMap`
 * para asignar colores a los badges según el tipo de movimiento.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-finance-table [finances]="financesList"></app-finance-table>
 * ```
 */
@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class FinanceTableComponent {
  /**
   * Listado de transacciones que se mostrarán en la tabla.
   * @type {Finance[]}
   * @remarks
   * Este Input permite pasar un array de transacciones desde un componente padre,
   * generalmente `FinancePage`. Cada transacción debe cumplir la interfaz `Finance`.
   */
  @Input() finances: Finance[] = [];
  /**
   * Mapeo de tipos de movimiento a tipos de Badge.
   * @type {Record<FinanceType, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada tipo de movimiento:
   * - 'deposit' → 'success' (verde)
   * - 'withdrawal' → 'danger' (rojo)
   * - 'payment' → 'primary' (azul)
   * - 'invoice' → 'warning' (amarillo)
   */
  typeMap: Record<FinanceType, BadgeType> = {
    'deposit': 'success',
    'withdrawal': 'danger',
    'payment': 'primary',
    'invoice': 'warning',
  }
}