import { Router } from "express";
import { FinanceController } from "./finance.controller";

export class FinanceRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new FinanceController();

    /**
     * @openapi
     * /api/finance/{countFinance}:
     *   get:
     *     summary: Obtener listado de transacciones
     *     description: Retorna una lista de transacciones bancarias generadas con faker.finance según la cantidad solicitada.
     *     tags:
     *       - Finance
     *     parameters:
     *       - in: path
     *         name: countFinance
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de transacciones a generar
     *     responses:
     *       200:
     *         description: Lista de transacciones generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Finance'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countFinance", controller.getAllFinance);

    return router;
  }
}