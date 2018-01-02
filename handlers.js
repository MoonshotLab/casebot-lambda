const Alexa = require('alexa-sdk');

const makePlainText = Alexa.utils.TextUtils.makePlainText;
const makeImage = Alexa.utils.ImageUtils.makeImage;

module.exports = {
  HelloWorldIntent: function() {
    const itemImage = makeImage(
      'https://www.barkleyus.com/wp-content/themes/barkleyus/assets/images/our-capabilities-rocket.png',
      700,
      700
    );
    const listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    const listTemplateBuilder = new Alexa.templateBuilders.ListTemplate1Builder();
    listItemBuilder.addItem(
      itemImage,
      'listItemToken1',
      makePlainText('List Item 1')
    );
    listItemBuilder.addItem(
      itemImage,
      'listItemToken2',
      makePlainText('List Item 2')
    );
    listItemBuilder.addItem(
      itemImage,
      'listItemToken3',
      makePlainText('List Item 3')
    );
    listItemBuilder.addItem(
      itemImage,
      'listItemToken4',
      makePlainText('List Item 4')
    );
    const listItems = listItemBuilder.build();
    const listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('listTemplate1')
      .setListItems(listItems)
      .build();
    this.response
      .speak('Rendering a list template!')
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
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
