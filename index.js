'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Hello World!',
  });

  server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: (request, h) => {
      return `Hello ${request.params.name}`
    }
  });

  server.route({  
    method: 'GET',
    path: '/json',
    handler: (request, h) => {
      return {
        key: 'value',
        another: false,
        number: 10,
      };
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();