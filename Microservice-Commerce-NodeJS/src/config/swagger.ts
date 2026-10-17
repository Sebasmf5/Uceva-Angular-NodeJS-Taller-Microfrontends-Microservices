import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Especificación de Swagger (OpenAPI) para la API de Commerce.
 *
 * @remarks
 * Este objeto configura Swagger mediante `swagger-jsdoc`,
 * generando automáticamente la documentación OpenAPI a partir
 * de comentarios JSDoc presentes en los archivos de rutas y esquemas.
 *
 * La especificación resultante es consumida por Swagger UI
 * para mostrar la documentación interactiva de la API.
 *
 * @example
 * ```ts
 * import swaggerUi from 'swagger-ui-express';
 *
 * app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 * ```
 */
export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Microservice Commerce NodeJS',
      version: '1.0.0',
      description: 'Documentación de la API de Commerce con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3005',
      },
    ],
  },
  apis: [
    './src/presentation/modules/**/*.routes.ts', // donde están los comentarios de rutas
    './src/config/swagger.schemas.ts', // donde están los schemas
  ],
});
