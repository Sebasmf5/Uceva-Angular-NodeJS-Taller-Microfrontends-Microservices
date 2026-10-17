/**
 * @openapi
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       description: Representa un proveedor generado con faker
 *       required:
 *         - id
 *         - companyName
 *         - catchPhrase
 *         - city
 *         - country
 *         - email
 *         - phone
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         companyName:
 *           type: string
 *           example: Hettinger LLC
 *         catchPhrase:
 *           type: string
 *           example: Proactive incremental adapter
 *         city:
 *           type: string
 *           example: Cali
 *         country:
 *           type: string
 *           example: Colombia
 *         email:
 *           type: string
 *           example: contacto@hettinger.com
 *         phone:
 *           type: string
 *           example: 555-123-4567
 *         status:
 *           type: string
 *           enum:
 *             - active
 *             - inactive
 *             - pending
 *           example: active
 */
export {};
