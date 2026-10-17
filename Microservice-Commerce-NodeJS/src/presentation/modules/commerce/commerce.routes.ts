import { Router } from "express";
import { CommerceController } from "./commerce.controller";

/**
 * Rutas del módulo de comercio.
 *
 * @remarks
 * Define los endpoints HTTP disponibles para el módulo `commerce`
 * y su respectiva documentación OpenAPI/Swagger.
 */
export class CommerceRoutes {

  /**
   * Configura y retorna el router del módulo de comercio.
   *
   * @returns Router de Express con las rutas de comercio
   */
  static get routes(): Router {
    const router = Router();
    const controller = new CommerceController();

    /**
     * @openapi
     * /api/commerce/{countCommerce}:
     *   get:
     *     summary: Obtener listado de artículos comerciales
     *     description: Retorna una lista de artículos comerciales generados dinámicamente con Faker.js según la cantidad solicitada.
     *     tags:
     *       - Commerce
     *     parameters:
     *       - in: path
     *         name: countCommerce
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de artículos comerciales a generar
     *     responses:
     *       200:
     *         description: Lista de artículos comerciales generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Commerce'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countCommerce", controller.getAllCommerce);

    return router;
  }
}
