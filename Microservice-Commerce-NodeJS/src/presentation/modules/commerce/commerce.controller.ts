import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CommerceService } from "./commerce.service";

/**
 * Controlador de comercio.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con artículos comerciales,
 * delegando la lógica de negocio al `CommerceService`.
 */
export class CommerceController {

  /**
   * Servicio de artículos comerciales.
   */
  private readonly commerceService = new CommerceService();

  /**
   * Maneja la petición HTTP para obtener un listado de artículos comerciales.
   *
   * @remarks
   * El número de artículos comerciales a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/commerce/10
   * ```
   */
  getAllCommerce = (req: Request, res: Response): void => {
    const { countCommerce } = req.params;

    setTimeout(() => {
      this.commerceService
        .getAllCommerce(Number(countCommerce))
        .then((commerce) => res.status(201).json(commerce))
        .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
