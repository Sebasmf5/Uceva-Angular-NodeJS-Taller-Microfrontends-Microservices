import { faker } from '@faker-js/faker';
import { Supplier, SupplierStatus } from '../../../domain/interfaces/supplier.interface';

/**
 * Servicio encargado de la generación de proveedores.
 *
 * @remarks
 * Este servicio utiliza los módulos `faker.company`, `faker.location`,
 * `faker.internet` y `faker.phone` para generar proveedores ficticios,
 * principalmente con fines de prueba o demostración.
 */
export class SuppliersService {

  /**
   * Obtiene un listado de proveedores generados dinámicamente.
   *
   * @param countSuppliers Cantidad de proveedores a generar
   * @returns Promesa que resuelve un arreglo de proveedores
   *
   * @example
   * ```ts
   * const suppliers = await suppliersService.getAllSuppliers(10);
   * ```
   */
  public async getAllSuppliers(countSuppliers: number): Promise<Supplier[]> {
    const suppliers: Promise<Supplier>[] = [];

    for (let i = 1; i <= countSuppliers; i++) {
      suppliers.push(this.generateSupplier(i));
    }

    return Promise.all(suppliers);
  }

  /**
   * Genera un proveedor ficticio.
   *
   * @param id Identificador único del proveedor
   * @returns Promesa que resuelve un proveedor generado
   */
  private generateSupplier(id: number): Promise<Supplier> {
    const statuses: SupplierStatus[] = ['active', 'inactive', 'pending'];

    return Promise.resolve({
      id,
      companyName: faker.company.name(),
      catchPhrase: faker.company.catchPhrase(),
      city: faker.location.city(),
      country: faker.location.country(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number(),
      status: faker.helpers.arrayElement(statuses),
    });
  }
}
