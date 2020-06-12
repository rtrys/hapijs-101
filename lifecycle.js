'use strict';

const plugin = {
  name: 'lifecycle',
  version: '1.0.0',
  register: (server, options) => {
    console.log('I am registered on lifecycle');

    server.ext('onRequest', (request, h) => {
      console.log('I am on request extension point', '1');
      return h.continue;
    });

    server.ext('onRequest', (request, h) => {
      console.log('I am on request extension point', '2');
      return h.continue;
    });

    server.ext('onRequest', (request, h) => {
      console.log('I am on request extension point', '3');
      return h.continue;
    });

    server.ext('onPreAuth', (request, h) => {
      console.log('I am on pre auth extension point');
      return h.continue;
    });

    server.ext('onCredentials', (request, h) => {
      console.log('I am on credentials extension point');
      return h.continue;
    });

    server.ext('onPostAuth', (request, h) => {
      console.log('I am on post auth extension point');
      return h.continue;
    });

    server.ext('onPreHandler', (request, h) => {
      console.log('I am on pre handler auth extension point');
      return h.continue;
    });

    server.ext('onPostHandler', (request, h) => {
      console.log('I am on post handler extension point');
      return h.continue;
    });

    server.ext('onPreResponse', (request, h) => {
      console.log('I am on pre response extension point');
      return h.continue;
    });
  },
};

module.exports = plugin;
