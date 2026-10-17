import { faker } from '@faker-js/faker';
import { Commerce, CommerceDepartment } from '../../../domain/interfaces/commerce.interface';

/**
 * Servicio encargado de la generación y gestión de artículos comerciales.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` (`faker.commerce`) para generar
 * datos comerciales ficticios, principalmente con fines de prueba o demostración.
 */
export class CommerceService {

  /**
   * Departamentos disponibles para los artículos comerciales.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un departamento comercial
   * a cada registro generado.
   */
  private departments: CommerceDepartment[] = [
    'Tecnologia',
    'Hogar',
    'Ropa',
    'Deportes',
    'Juguetes',
  ];

  /**
   * Obtiene un listado de artículos comerciales generados dinámicamente.
   *
   * @param countCommerce Cantidad de artículos comerciales a generar
   * @returns Promesa que resuelve un arreglo de artículos comerciales
   *
   * @example
   * ```ts
   * const commerceList = await commerceService.getAllCommerce(10);
   * ```
   */
  public async getAllCommerce(countCommerce: number): Promise<Commerce[]> {
    const commerceItems: Promise<Commerce>[] = [];

    for (let i = 1; i <= countCommerce; i++) {
      commerceItems.push(this.generateCommerce(i));
    }

    return Promise.all(commerceItems);
  }

  /**
   * Genera un artículo comercial ficticio.
   *
   * @param id Identificador único del artículo comercial
   * @returns Promesa que resuelve un artículo comercial generado
   */
  private generateCommerce(id: number): Promise<Commerce> {
    return Promise.resolve({
      id,
      product: faker.commerce.productName(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productDescription(),
      isbn: faker.commerce.isbn(),
      price: Number(
        faker.commerce.price({ min: 10, max: 500, dec: 2 })
      ),
      department: faker.helpers.arrayElement(this.departments),
    });
  }
}
