/**
 * Interfaz que representa un artículo comercial.
 *
 * Contiene la información detallada necesaria para mostrar un artículo
 * comercial en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada artículo comercial debe tener un `id` único, nombre del `product`,
 * `material`, `description`, código `isbn`, `price` y un `department` válido.
 *
 * @example
 * ```ts
 * const item: Commerce = {
 *   id: 1,
 *   product: 'Teclado Mecánico RGB',
 *   material: 'Aluminio',
 *   description: 'Teclado compacto de alto rendimiento para gaming y oficina',
 *   isbn: '978-3-16-148410-0',
 *   price: 250.50,
 *   department: 'Tecnologia'
 * };
 * ```
 */
export interface Commerce {
  /** Identificador único del artículo comercial */
  id: number;

  /** Nombre comercial del artículo */
  product: string;

  /** Material principal del artículo */
  material: string;

  /** Descripción comercial detallada del artículo */
  description: string;

  /** Código ISBN / identificador comercial del artículo */
  isbn: string;

  /** Precio comercial del artículo */
  price: number;

  /** Departamento comercial al que pertenece el artículo */
  department: CommerceDepartment;
}

/**
 * Tipo de departamento comercial.
 *
 * @remarks
 * Este tipo restringe los departamentos a los valores predefinidos:
 * - 'Tecnologia'
 * - 'Hogar'
 * - 'Ropa'
 * - 'Deportes'
 * - 'Juguetes'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const departamento: CommerceDepartment = 'Tecnologia';
 * ```
 */
export type CommerceDepartment = 'Tecnologia' | 'Hogar' | 'Ropa' | 'Deportes' | 'Juguetes';
