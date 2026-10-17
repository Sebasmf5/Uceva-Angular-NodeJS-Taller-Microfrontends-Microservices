/**
 * @openapi
 * components:
 *   schemas:
 *     Commerce:
 *       type: object
 *       description: Representa un artículo comercial del sistema
 *       required:
 *         - id
 *         - product
 *         - material
 *         - description
 *         - isbn
 *         - price
 *         - department
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         product:
 *           type: string
 *           example: Teclado Mecánico RGB
 *         material:
 *           type: string
 *           example: Aluminio
 *         description:
 *           type: string
 *           example: Teclado compacto de alto rendimiento para gaming y oficina
 *         isbn:
 *           type: string
 *           example: 978-3-16-148410-0
 *         price:
 *           type: number
 *           example: 250.50
 *         department:
 *           type: string
 *           enum:
 *             - Tecnologia
 *             - Hogar
 *             - Ropa
 *             - Deportes
 *             - Juguetes
 *           example: Tecnologia
 */
export {};
