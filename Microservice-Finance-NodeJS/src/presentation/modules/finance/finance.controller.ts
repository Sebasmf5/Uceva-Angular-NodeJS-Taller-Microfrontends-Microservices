import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { FinanceService } from "./finance.service";

/**
 * Controlador de transacciones.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con transacciones,
 * delegando la lógica de negocio al `FinanceService`.
 */
export class FinanceController {

  /**
   * Servicio de transacciones.
   */
  private readonly financeService = new FinanceService();

  /**
   * Maneja la petición HTTP para obtener un listado de transacciones.
   *
   * @remarks
   * El número de transacciones a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/finance/10
   * ```
   */
  getAllFinance = (req: Request, res: Response): void => {
    const { countFinance } = req.params;

    setTimeout(() => {
      this.financeService
      .getAllFinance(Number(countFinance))
      .then((finances) => res.status(201).json(finances))
      .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}