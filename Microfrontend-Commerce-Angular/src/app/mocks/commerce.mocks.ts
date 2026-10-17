import { Commerce } from "../interfaces/commerce.interface";

/**
 * Datos simulados de artículos comerciales para pruebas unitarias.
 */
export const COMMERCE_MOCK: Commerce[] = [
  {
    id: 1,
    product: 'Teclado Mecánico RGB',
    material: 'Aluminio',
    description: 'Teclado compacto de alto rendimiento para gaming y oficina',
    isbn: '978-3-16-148410-0',
    price: 250.5,
    department: 'Tecnologia',
  },
  {
    id: 2,
    product: 'Lámpara de Escritorio LED',
    material: 'Acero',
    description: 'Lámpara regulable con brazo articulado para estudio',
    isbn: '978-1-40-289462-6',
    price: 85.0,
    department: 'Hogar',
  },
];
