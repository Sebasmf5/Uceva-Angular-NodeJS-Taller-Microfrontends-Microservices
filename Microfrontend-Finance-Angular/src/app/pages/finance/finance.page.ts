import { Component, inject } from '@angular/core';
import { FinanceTableComponent } from '../../components/finance-table/finance-table.component';
import { Finance } from '../../interfaces/finance.interface';
import { FinanceService } from '../../services/finance/finance.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de transacciones.
 *
 * Se utiliza para gestionar y mostrar un listado de transacciones
 * utilizando el componente `FinanceTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `FinanceService`
 * para obtener las transacciones y pasarlas al componente de tabla.
 * Es la página que este Microfrontend expone al Host.
 *
 */
@Component({
  selector: 'app-finances',
  templateUrl: `./finance.page.html`,
  imports: [FinanceTableComponent, AlertComponent]
})
export class FinancePage {
  /**
   * Listado de transacciones obtenidas desde el servicio.
   * @type {Finance[]}
   */
  finances: Finance[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener transacciones.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private financeService = inject(FinanceService);

  /**
   * Inicializa el componente y carga las transacciones.
   * @remarks
   * Se suscribe al método `getAllFinance()` del servicio y
   * asigna los datos recibidos a la propiedad `finances`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.financeService.getAllFinance(10).subscribe({
      next: (finances) => {
        this.finances = finances;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}