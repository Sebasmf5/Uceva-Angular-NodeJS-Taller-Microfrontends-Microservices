/**
 * Interfaz que representa un proveedor.
 *
 * Contiene la información básica necesaria para mostrar un proveedor
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada proveedor debe tener un `id` único, el nombre de la empresa,
 * su eslogan, la ciudad y el país, un correo, un teléfono y un `status`
 * válido. Los datos se generan con `faker.company`, `faker.location`,
 * `faker.internet` y `faker.phone`.
 *
 * @example
 * ```ts
 * const proveedor: Supplier = {
 *   id: 1,
 *   companyName: 'Hettinger LLC',
 *   catchPhrase: 'Proactive incremental adapter',
 *   city: 'Cali',
 *   country: 'Colombia',
 *   email: 'contacto@hettinger.com',
 *   phone: '555-123-4567',
 *   status: 'active'
 * };
 * ```
 */
export interface Supplier {
    /** Identificador único del proveedor */
    id: number;

    /** Nombre de la empresa */
    companyName: string;

    /** Eslogan de la empresa */
    catchPhrase: string;

    /** Ciudad del proveedor */
    city: string;

    /** País del proveedor */
    country: string;

    /** Correo electrónico de contacto */
    email: string;

    /** Teléfono de contacto */
    phone: string;

    /** Estado del proveedor */
    status: SupplierStatus;
}

/**
 * Estado de un proveedor.
 *
 * @remarks
 * Este tipo restringe el estado a los valores que genera el microservicio:
 * - 'active'
 * - 'inactive'
 * - 'pending'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: SupplierStatus = 'active';
 * ```
 */
export type SupplierStatus = 'active' | 'inactive' | 'pending';
