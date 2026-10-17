import { Supplier } from "../interfaces/supplier.interface";

/**
 * Proveedores de ejemplo para las pruebas unitarias.
 *
 * @remarks
 * Simulan la respuesta del Microservicio de Proveedores
 * para no depender del backend al ejecutar los tests.
 */
export const SUPPLIERS_MOCK: Supplier[] = [
    {
        id: 1,
        companyName: 'Hettinger LLC',
        catchPhrase: 'Proactive incremental adapter',
        city: 'Cali',
        country: 'Colombia',
        email: 'contacto@hettinger.com',
        phone: '555-123-4567',
        status: 'active',
    },
    {
        id: 2,
        companyName: 'Rodriguez and Sons',
        catchPhrase: 'Customer-focused modular hub',
        city: 'Lima',
        country: 'Peru',
        email: 'ventas@rodriguez.com',
        phone: '555-987-6543',
        status: 'pending',
    },
    {
        id: 3,
        companyName: 'Ortega Group',
        catchPhrase: 'Streamlined bifurcated matrix',
        city: 'Quito',
        country: 'Ecuador',
        email: 'info@ortega.com',
        phone: '555-246-8101',
        status: 'inactive',
    }
];
