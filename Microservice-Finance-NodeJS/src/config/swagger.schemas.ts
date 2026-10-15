/**
 * @openapi
 * components:
 *   schemas:
 *     Finance:
 *       type: object
 *       description: Representa una transacción bancaria generada con faker.finance
 *       required:
 *         - id
 *         - accountName
 *         - accountNumber
 *         - type
 *         - amount
 *         - currency
 *         - issuer
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         accountName:
 *           type: string
 *           example: Personal Loan Account
 *         accountNumber:
 *           type: string
 *           example: "****2584"
 *         type:
 *           type: string
 *           enum:
 *             - deposit
 *             - withdrawal
 *             - payment
 *             - invoice
 *           example: payment
 *         amount:
 *           type: number
 *           example: 617.87
 *         currency:
 *           type: string
 *           example: USD
 *         issuer:
 *           type: string
 *           example: visa
 *         date:
 *           type: string
 *           format: date
 *           example: 2026-09-20
 */
export {};