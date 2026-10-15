import { Finance } from "../interfaces/finance.interface";

/**
 * Transacciones de ejemplo para las pruebas unitarias.
 *
 * @remarks
 * Simulan la respuesta del Microservicio de Finanzas
 * para no depender del backend al ejecutar los tests.
 */
export const FINANCE_MOCK: Finance[] = [
    {
        id: 1,
        accountName: 'Personal Loan Account',
        accountNumber: '****2584',
        type: 'payment',
        amount: 617.87,
        currency: 'USD',
        issuer: 'visa',
        date: '2026-09-20',
    },
    {
        id: 2,
        accountName: 'Savings Account',
        accountNumber: '****9187',
        type: 'deposit',
        amount: 1500,
        currency: 'EUR',
        issuer: 'mastercard',
        date: '2026-09-18',
    }
];