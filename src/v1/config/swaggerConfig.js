const swaggerJSDoc = require('swagger-jsdoc');


const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI
    info: {
      title: 'Api Rest Node',
      version: '1.0.0',
      description: 'API con crud para users',
    },
  },
  apis:['./src/v1/routes/*.js'], // Rutas a tus archivos de definición de rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);



module.exports = swaggerSpec;
