import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-gen.json';
const endpointsFiles = [
    '../facade/rest/ChatRest.ts'
];

swaggerAutogen(outputFile, endpointsFiles, doc);
