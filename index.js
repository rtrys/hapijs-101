'use strict';

const Hapi = require('@hapi/hapi');

const lifecycle = require('./lifecycle');
const paths = require('./paths');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.start();

  await server.register([
    lifecycle, paths
  ]);

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();