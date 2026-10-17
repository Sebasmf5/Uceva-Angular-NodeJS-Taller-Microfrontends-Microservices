# 🛒 Microservice-Commerce-NodeJS

Microservicio independiente desarrollado en **Node.js**, **Express 5** y **TypeScript**, encargado de la generación dinámica y exposición de información comercial simulada mediante **Faker.js** (`@faker-js/faker`) y documentado bajo el estándar **OpenAPI 3.0 (Swagger)**.

---

## 🏗️ Arquitectura y Estructura del Proyecto

El microservicio sigue una arquitectura por capas (**Configuración**, **Dominio** y **Presentación**):

```text
Microservice-Commerce-NodeJS/
├── public/
│   └── index.html                              # Página de bienvenida del microservicio
├── src/
│   ├── config/
│   │   ├── envs.ts                             # Lectura y validación de variables de entorno
│   │   ├── swagger.schemas.ts                  # Esquema OpenAPI para la entidad Commerce
│   │   └── swagger.ts                          # Configuración de swagger-jsdoc (OpenAPI 3.0)
│   ├── domain/
│   │   ├── erros/
│   │   │   ├── custom.error.ts                 # Excepciones HTTP personalizadas (400, 401, 403, 404, 409, 500)
│   │   │   └── handle.error.ts                 # Manejador centralizado de respuestas de error
│   │   └── interfaces/
│   │       ├── commerce.interface.ts           # Interfaz Commerce y tipo CommerceDepartment
│   │       └── server.interface.ts             # Opciones de configuración del servidor Express
│   ├── presentation/
│   │   ├── modules/
│   │   │   └── commerce/
│   │   │       ├── commerce.controller.ts      # Controlador HTTP del módulo Commerce
│   │   │       ├── commerce.routes.ts          # Rutas REST y anotaciones @openapi
│   │   │       └── commerce.service.ts         # Lógica de generación de datos con Faker.js
│   │   ├── routes.ts                           # Enrutador principal (/api/commerce)
│   │   └── server.ts                           # Clase Server (CORS, JSON, estáticos y Swagger UI)
│   └── app.ts                                  # Punto de entrada de la aplicación
├── .env                                        # Variables de entorno (PORT=3005)
├── package.json
└── tsconfig.json
```

---

## ⚙️ Variables de Entorno (`.env`)

```env
PORT=3005
PUBLIC_PATH="public"
```

---

## 🚀 Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor en modo desarrollo:**
   ```bash
   npm run start
   ```

3. **URLs de acceso:**
   - **Servidor:** `http://localhost:3005`
   - **Documentación Interactiva Swagger UI:** `http://localhost:3005/api/docs`
   - **Endpoint REST:** `http://localhost:3005/api/commerce/{countCommerce}`

---

## 📡 Documentación de la API REST (Swagger / OpenAPI 3.0)

### Obtener listado de artículos comerciales
- **Método:** `GET`
- **Ruta:** `/api/commerce/{countCommerce}`
- **Parámetros de ruta (`path`):**
  - `countCommerce` *(integer, requerido)*: Cantidad de registros comerciales a generar dinámicamente con `@faker-js/faker`.
- **Ejemplo de Petición:**
  ```http
  GET http://localhost:3005/api/commerce/10
  ```
- **Ejemplo de Respuesta (`201 Created` / `200 OK`):**
  ```json
  [
    {
      "id": 1,
      "product": "Teclado Mecánico RGB",
      "material": "Aluminio",
      "description": "Teclado compacto de alto rendimiento para gaming y oficina",
      "isbn": "978-3-16-148410-0",
      "price": 250.5,
      "department": "Tecnologia"
    }
  ]
  ```

---

## 🧪 Generación de Datos Simulados con Faker.js

El servicio `CommerceService` utiliza el módulo `faker.commerce` y `faker.helpers` para construir cada objeto `Commerce`:
- **`product`**: `faker.commerce.productName()`
- **`material`**: `faker.commerce.productMaterial()`
- **`description`**: `faker.commerce.productDescription()`
- **`isbn`**: `faker.commerce.isbn()`
- **`price`**: `Number(faker.commerce.price({ min: 10, max: 500, dec: 2 }))`
- **`department`**: `faker.helpers.arrayElement(['Tecnologia', 'Hogar', 'Ropa', 'Deportes', 'Juguetes'])`
