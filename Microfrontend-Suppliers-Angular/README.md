# Microfrontend Suppliers (Angular)

Microfrontend de proveedores del Taller 5 (Microfrontends y Microservicios).
Se genera con Angular 20.3 y Webpack Module Federation, y expone la página
`SuppliersPage` para que el Host la cargue en la ruta `/suppliers`.

Consume únicamente el microservicio `Microservice-Suppliers-NodeJS`
(`http://localhost:3005/api/suppliers/{countSuppliers}`).

## Datos del proyecto

- Puerto: `4205`
- Nombre Module Federation: `mf-suppliers`
- Módulo expuesto: `./SuppliersPage`
- RemoteEntry: `http://localhost:4205/remoteEntry.js`

## Instalación

```bash
npm i
```

## Ejecución

Primero se debe tener corriendo el microservicio de proveedores
(ver `Microservice-Suppliers-NodeJS`) y luego:

```bash
npm run start
```

## Pruebas unitarias y cobertura

```bash
npm run test
```

La cobertura se genera en la carpeta `coverage` (abrir `coverage/index.html`).

## Documentación técnica con Compodoc

```bash
npm run compodoc
```

La documentación se genera en la carpeta `documentation`. Para verla en el navegador:

```bash
npx compodoc -p tsconfig.doc.json -s
```

## Estructura principal

```
src/app
├── components
│   ├── alert
│   └── suppliers-table
├── interfaces
├── mocks
├── pages
│   └── suppliers
└── services
    └── suppliers
```
