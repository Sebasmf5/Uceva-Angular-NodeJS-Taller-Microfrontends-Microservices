# 🛍️ Microfrontend-Commerce-Angular

Microfrontend independiente desarrollado en **Angular 20.3.14** utilizando **Webpack Module Federation** (`@angular-architects/module-federation`), **Bootstrap 5** y `@brejcha13320/design-system-bootstrap`. Consume exclusivamente la API REST expuesta por `Microservice-Commerce-NodeJS` (`http://localhost:3005/api/commerce/{countCommerce}`).

---

## 🚀 Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Iniciar el servidor de desarrollo (Puerto `4205`):**
   ```bash
   npm run start
   ```
   - **Aplicación:** `http://localhost:4205`
   - **Module Federation RemoteEntry:** `http://localhost:4205/remoteEntry.js`
   - **Módulo expuesto:** `./CommercePage` (`./src/app/pages/commerce/commerce.page.ts`)

---

## 🧪 Pruebas Unitarias (Jest > 90% Cobertura)

El proyecto cuenta con pruebas unitarias implementadas en **Jest** alcanzando el **100% de cobertura** en *Statements*, *Branches*, *Functions* y *Lines*:

- **Ejecutar pruebas unitarias:**
  ```bash
  npm run test
  ```
- **Ejecutar pruebas con reporte de cobertura:**
  ```bash
  npm run test:coverage
  ```

---

## 📚 Documentación Técnica (Compodoc)

Todos los componentes, servicios, páginas, rutas e interfaces están documentados con comentarios JSDoc/TSDoc compatibles con **Compodoc**.

- **Generar documentación técnica en `/documentation`:**
  ```bash
  npm run compodoc
  ```
