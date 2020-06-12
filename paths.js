'use strict';

const plugin = {
  name: 'paths',
  version: '1.0.0',
  register: (server, options) => {
    console.log('I am registered on paths');

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
  },
};

module.exports = plugin;
