const Alexa = require('alexa-sdk');

const handlers = require('./handlers');

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
