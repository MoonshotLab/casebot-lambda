const Alexa = require('alexa-sdk');

const handlers = {
  HelloWorldIntent: function() {
    this.emit(':tell', 'Hello World!');
  },

  LaunchRequest: function() {
    this.emit('HelloWorldIntent');
  },

  CaseHyundaibluelink: function() {
    this.emit('HelloWorldIntent');
  },

  CaseBudlight: function() {
    this.emit('HelloWorldIntent');
  },

  CaseCampbells: function() {
    this.emit('HelloWorldIntent');
  },

  CasePizzahut: function() {
    this.emit('HelloWorldIntent');
  },

  CaseNikestylebot: function() {
    this.emit('HelloWorldIntent');
  },

  CaseWingstop: function() {
    this.emit('HelloWorldIntent');
  },

  Restaurantmenu: function() {
    this.emit('HelloWorldIntent');
  },

  CaseStarbucks: function() {
    this.emit('HelloWorldIntent');
  },

  CaseAmericanheartassoc: function() {
    this.emit('HelloWorldIntent');
  },

  CaseAmtrak: function() {
    this.emit('HelloWorldIntent');
  },

  CaseInstantpot: function() {
    this.emit('HelloWorldIntent');
  },

  Retailmenu: function() {
    this.emit('HelloWorldIntent');
  },

  CaseKlm: function() {
    this.emit('HelloWorldIntent');
  },

  Quickmenu: function() {
    this.emit('HelloWorldIntent');
  },

  WhatSThatOverThere: function() {
    this.emit('HelloWorldIntent');
  },

  CaseThemuse: function() {
    this.emit('HelloWorldIntent');
  },

  Causemenu: function() {
    this.emit('HelloWorldIntent');
  },

  Endhim: function() {
    this.emit('HelloWorldIntent');
  },

  Travelmenu: function() {
    this.emit('HelloWorldIntent');
  },

  CaseUber: function() {
    this.emit('HelloWorldIntent');
  },

  CaseItalianhealth: function() {
    this.emit('HelloWorldIntent');
  },

  CaseDominospizza: function() {
    this.emit('HelloWorldIntent');
  },

  CaseAerie: function() {
    this.emit('HelloWorldIntent');
  },

  CaseNordstrom: function() {
    this.emit('HelloWorldIntent');
  },

  CasePurina: function() {
    this.emit('HelloWorldIntent');
  },

  Cpgmenu: function() {
    this.emit('HelloWorldIntent');
  },

  CaseIllinoisholocaustmuseum: function() {
    this.emit('HelloWorldIntent');
  },

  DefaultWelcomeIntent: function() {
    this.emit('HelloWorldIntent');
  },

  CaseTide: function() {
    this.emit('HelloWorldIntent');
  },

  CaseEbay: function() {
    this.emit('HelloWorldIntent');
  },

  CaseAabrazil: function() {
    this.emit('HelloWorldIntent');
  },

  CaseMayo: function() {
    this.emit('HelloWorldIntent');
  },

  CaseSephora: function() {
    this.emit('HelloWorldIntent');
  },

  CaseZyrtec: function() {
    this.emit('HelloWorldIntent');
  }
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
