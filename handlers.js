const Alexa = require('alexa-sdk');
const url = require('url');

const makeImage = Alexa.utils.ImageUtils.makeImage;
const makeRichText = Alexa.utils.TextUtils.makeRichText;
const makePlainText = Alexa.utils.TextUtils.makePlainText;

const assetPath = 'https://d32vnycoqqt3qz.cloudfront.net';

let itemImage,
  listItemBuilder,
  listTemplateBuilder,
  listItems,
  listTemplate,
  template;

module.exports = {
  LaunchRequest: function() {
    this.emit('MainMenu');
  },

  Unhandled: function() {
    this.response.speak(`I'm sorry, I don't know how to handle that.`);
    this.emit(':responseReady');
  },

  NotImplemented: function() {
    this.response.speak(`not yet implemented`);
    this.emit(':responseReady');
  },

  ElementSelected: function() {
    if (
      !!this.event.request &&
      'token' in this.event.request &&
      !!this.event.request.token
    ) {
      this.emit(this.event.request.token);
    } else {
      this.emit('Unhandled');
    }
  },

  MainMenu: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate1Builder();
    listItemBuilder.addItem(
      null,
      'CategoryMenuRetail',
      makePlainText('Retail')
    );
    listItemBuilder.addItem(
      null,
      'CategoryMenuRestaurant',
      makePlainText('Restaurant')
    );
    listItemBuilder.addItem(null, 'CategoryMenuCPG', makePlainText('CPG'));
    listItemBuilder.addItem(
      null,
      'CategoryMenuTravel',
      makePlainText('Travel')
    );
    listItemBuilder.addItem(
      null,
      'CategoryMenuHealth',
      makePlainText('Health')
    );
    listItemBuilder.addItem(null, 'CategoryMenuCause', makePlainText('Cause'));
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Casebot Main Menu')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Welcome to the main menu. Please pick an item from the list.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  PlayVideoIntent: function() {
    if (Object.keys(this.attributes).length === 0) {
      this.response.speak(
        `I'm not sure which video you'd like to play. Please include the title or subject of the video!`
      );
      this.emit(':responseReady');
    } else {
      const caseStudy = this.attributes.lastCaseStudy;
      // play video
      switch (caseStudy) {
        case 'Hyundai':
          this.emit('CaseStudyHyundaiVideo');
          break;
        case 'Starbucks':
          this.emit('CaseStudyStarbucksVideo');
          break;
        case 'AmericanHeartAssoc':
          this.emit('CaseStudyAmericanHeartAssocVideo');
          break;
        case 'Amtrak':
          this.emit('CaseStudyAmtrakVideo');
          break;
        case 'KLM':
          this.emit('CaseStudyKLMVideo');
          break;
        case 'Uber':
          this.emit('CaseStudyUberVideo');
          break;
        case 'ItalianHealthMinistry':
          this.emit('CaseStudyItalianHealthMinistryVideo');
          break;
        case 'IllinoisHolocaustMuseum':
          this.emit('CaseStudyIllinoisHolocaustMuseumVideo');
          break;
        case 'Ebay':
          this.emit('CaseStudyEbayVideo');
          break;
        case 'AABrazil':
          this.emit('CaseStudyAABrazilVideo');
          break;
        case 'MayoClinic':
          this.emit('CaseStudyMayoClinicVideo');
          break;
        default:
          this.response.speak(
            `Unfortunately, there's not a video for that case study.`
          );
          this.emit(':responseReady');
          break;
      }
    }
  },

  CategoryMenuRestaurant: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_PizzaHut.png')
      ),
      'CaseStudyPizzaHut',
      makePlainText('Pizza Hut')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Wingstop.png')
      ),
      'CaseStudyWingstop',
      makePlainText('Wingstop')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Starbucks.png')
      ),
      'CaseStudyStarbucks',
      makePlainText(`Starbucks`)
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Dominos.png')
      ),
      'CaseStudyDominos',
      makePlainText(`Domino's Pizza`)
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Category Menu: Restaurant')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CategoryMenuRetail: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Nike.png')
      ),
      'CaseStudyNike',
      makePlainText('Nike')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Nordstrom.png')
      ),
      'CaseStudyNordstrom',
      makePlainText('Nordstrom')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Aerie.png')
      ),
      'CaseStudyAerie',
      makePlainText(`Aerie`)
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Sephora.png')
      ),
      'CaseStudySephora',
      makePlainText('Sephora')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Ebay.png')
      ),
      'CaseStudyEbay',
      makePlainText('eBay')
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Category Menu: Retail')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CategoryMenuTravel: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_KLM.png')
      ),
      'CaseStudyKLM',
      makePlainText('KLM')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Amtrak.png')
      ),
      'CaseStudyAmtrak',
      makePlainText('Amtrak')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Uber.png')
      ),
      'CaseStudyUber',
      makePlainText(`Uber`)
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Hyundai.png')
      ),
      'CaseStudyHyundai',
      makePlainText('Hyundai')
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Category Menu: Travel')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CategoryMenuCPG: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_BudLight.png')
      ),
      'CaseStudyBudLight',
      makePlainText('Bud Light')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Campbells.png')
      ),
      'CaseStudyCampbells',
      makePlainText(`Campbell's Soup`)
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_InstantPot.png')
      ),
      'CaseStudyInstantPot',
      makePlainText(`Instant Pot`)
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Tide.png')
      ),
      'CaseStudyTide',
      makePlainText('Tide')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Purina.png')
      ),
      'CaseStudyPurina',
      makePlainText('Purina')
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Category Menu: CPG')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CategoryMenuCause: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_AABrazil.png')
      ),
      'CaseStudyAABrazil',
      makePlainText('AA Brazil')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_TheMuse.png')
      ),
      'CaseStudyTheMuse',
      makePlainText('The Muse')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(
          assetPath,
          'casebot/img/MP_CaseBot_280x280_IllinoisHolocaustMuseum.png'
        )
      ),
      'CaseStudyIllinoisHolocaustMuseum',
      makePlainText('Illinois Holocaust Museum')
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Category Menu: Cause')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CategoryMenuHealth: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        url.resolve(
          assetPath,
          'casebot/img/MP_CaseBot_280x280_ItalianHealthMinistry.png'
        )
      ),
      'CaseStudyItalianHealthMinistry',
      makePlainText('Italian Ministry of Health')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_MayoClinic.png')
      ),
      'CaseStudyMayoClinic',
      makePlainText('Mayo Clinic')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(
          assetPath,
          'casebot/img/MP_CaseBot_280x280_AmericanHeartAssoc.png'
        )
      ),
      'CaseStudyAmericanHeartAssoc',
      makePlainText('American Heart Association')
    );
    listItemBuilder.addItem(
      makeImage(
        url.resolve(assetPath, 'casebot/img/MP_CaseBot_280x280_Zyrtec.png')
      ),
      'CaseStudyZyrtec',
      makePlainText('Zyrtec')
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Category Menu: Health')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .shouldEndSession(null)
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CaseStudyHyundai: function() {
    this.attributes.lastCaseStudy = 'Hyundai';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle('Hyundai Blue Link')
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Hyundai Blue Link gives Hyundai vehicle owners Remote Start, Remote Lock/Unlock, climate control, and more, using a phone, smartwatch, or Alexa. As seen in Hyundai’s videos, you can easily do this even if you’re a lousy actor who will never work in this town again.<br /><br /><action value='CaseStudyHyundaiVideo'>Play video</action> | <action value='CategoryMenuTravel'>Travel Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Hyundai.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Hyundai Blue Link gives Hyundai vehicle owners Remote Start, Remote Lock/Unlock, climate control, and more, using a phone, smartwatch, or Alexa. As seen in Hyundai’s videos, you can easily do this even if you’re a lousy actor who will never work in this town again.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyHyundaiVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/hyundai.mp4'), {
      title: `Case Study: Blue Link`,
      subtitle: `Hyundai`
    });
    this.emit(':responseReady');
  },

  CaseStudyBudLight: function() {
    this.attributes.lastCaseStudy = 'BudLight';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Bud Light's #MyTeamCan`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Bud Light’s #MyTeamCan bot lets Facebook fans order 18-packs of Bud Light with their NFL team’s logo emblazoned on each can, delivered within the hour for $23.99. If you want Bud Light for a game day party, this is your hookup. I guess.<br /><br /><action value='CategoryMenuCPG'>CPG Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_BudLight.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Bud Light’s #MyTeamCan bot lets Facebook fans order 18-packs of Bud Light with their NFL team’s logo emblazoned on each can, delivered within the hour for $23.99. If you want Bud Light for a game day party, this is your hookup. I guess.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyCampbells: function() {
    this.attributes.lastCaseStudy = `Campbells`;

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Campbell's Kitchen`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Voice technology opened up a whole new can of bot at Campbell’s. Alexa connects you to Campbell’s Kitchen for access to recipes matched to your preferences. Ask for recipes by meal-time, cuisine, ingredients, or even occasions like Thanksgiving. This bot can help you cook, too, pushing a full list of ingredients and cooking steps to the Alexa app if you need them.<br /><br /><action value='CategoryMenuCPG'>CPG Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Campbells.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Voice technology opened up a whole new can of bot at Campbell’s. Alexa connects you to Campbell’s Kitchen for access to recipes matched to your preferences. Ask for recipes by meal-time, cuisine, ingredients, or even occasions like Thanksgiving. This bot can help you cook, too, pushing a full list of ingredients and cooking steps to the Alexa app if you need them.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyPizzaHut: function() {
    this.attributes.lastCaseStudy = `PizzaHut`;

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Pizza Hut`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Pizza Hut launched order bots on Messenger and Twitter in 2016. Customers can reorder favorites for delivery or carryout. Pizza Hut also added a skill for Alexa, so if you can’t get online, just yell your order across the room from your supine position on the floor.<br /><br /><action value='CategoryMenuRestaurant'>Restaurant Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_PizzaHut.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Pizza Hut launched order bots on Messenger and Twitter in 2016. Customers can reorder favorites for delivery or carryout. Pizza Hut also added a skill for Alexa, so if you can’t get online, just yell your order across the room from your supine position on the floor.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyNike: function() {
    this.attributes.lastCaseStudy = `Nike`;

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Nike's Stylebot`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The Nike Stylebot lets sneakerheads create their own personalized shoes by blending 24 color options or using “magic match.” Users can upload photos and create sneakers to match their outfits. Then hit the “Lemme get those” button to order.<br /><br /><action value='CategoryMenuRetail'>Retail Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Nike.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The Nike Stylebot lets sneakerheads create their own personalized shoes by blending 24 color options or using “magic match.” Users can upload photos and create sneakers to match their outfits. Then hit the “Lemme get those” button to order.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyWingstop: function() {
    this.attributes.lastCaseStudy = `Wingstop`;

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Wingstop`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Friday night rolls around and you’re watching Netflix all by yourself. What you need is a delicious batch of hot wings smothered in tangy barbeque sauce. For that, the Wingstop Facebook bot has got you covered. In tangy barbeque sauce.<br /><br /><action value='CategoryMenuRestaurant'>Restaurant Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Wingstop.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Friday night rolls around and you’re watching Netflix all by yourself. What you need is a delicious batch of hot wings smothered in tangy barbeque sauce. For that, the Wingstop Facebook bot has got you covered. In tangy barbeque sauce.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyStarbucks: function() {
    this.attributes.lastCaseStudy = 'Starbucks';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Starbucks' My Starbucks Barista`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `“Alexa, tell Starbucks it's coffee time.” That’s all you need to say to activate Starbucks’ voice skill and have your usual coffee drink ready for you at one of your favorite Starbucks locations.<br /><br /><action value='CaseStudyStarbucksVideo'>Play video</action> | <action value='CategoryMenuRestaurant'>Restaurant Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Starbucks.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `“Alexa, tell Starbucks it's coffee time.” That’s all you need to say to activate Starbucks’ voice skill and have your usual coffee drink ready for you at one of your favorite Starbucks locations.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyStarbucksVideo: function() {
    this.response.playVideo(
      url.resolve(assetPath, 'casebot/vid/starbucks.mp4'),
      {
        title: `My Starbucks Barista`,
        subtitle: `Starbucks`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyAmericanHeartAssoc: function() {
    this.attributes.lastCaseStudy = 'AmericanHeartAssoc';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`American Heart Association`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Most major health organizations provide helpful content, but the American Heart Association’s skill on Alexa is designed for emergency situations. You can get a step-by-step on CPR or ask about the warning signs of a stroke or heart attack. It doesn’t replace calling 911, but it’s good to have a voice-controlled medical reference book handy.<br /><br /><action value='CaseStudyAmericanHeartAssocVideo'>Play video</action> | <action value='CategoryMenuHealth'>Health Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_PizzaHut.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Most major health organizations provide helpful content, but the American Heart Association’s skill on Alexa is designed for emergency situations. You can get a step-by-step on CPR or ask about the warning signs of a stroke or heart attack. It doesn’t replace calling 911, but it’s good to have a voice-controlled medical reference book handy.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyAmericanHeartAssocVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/aha.mp4'), {
      title: `Case Study: Alexa Teaches CPR`,
      subtitle: `American Heart Association`
    });
    this.emit(':responseReady');
  },

  CaseStudyAmtrak: function() {
    this.attributes.lastCaseStudy = 'Amtrak';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Amtrak`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Amtrak’s 375,000+ daily website visitors used to spend a lot of time on hold or waiting for email replies. Ask Julie, an intelligent virtual assistant, was designed as an ideal customer service rep, helping with transactions, ticketing and questions of all kinds. Ask Julie saves more than $1 million in customer service mail costs per year and generates an impressive 30% more revenue per booking. Amtrak estimates ROI at 800%.<br /><br /><action value='CaseStudyAmtrakVideo'>Play video</action> | <action value='CategoryMenuTravel'>Travel Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Amtrak.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Amtrak’s 375,000+ daily website visitors used to spend a lot of time on hold or waiting for email replies. Ask Julie, an intelligent virtual assistant, was designed as an ideal customer service rep, helping with transactions, ticketing and questions of all kinds. Ask Julie saves more than $1 million in customer service mail costs per year and generates an impressive 30% more revenue per booking. Amtrak estimates ROI at 800%.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyAmtrakVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/amtrak.mp4'), {
      title: `Case Study: Ask Julie`,
      subtitle: `Amtrak`
    });
    this.emit(':responseReady');
  },

  CaseStudyInstantPot: function() {
    this.attributes.lastCaseStudy = 'InstantPot';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Instant Pot`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The Instant Pot is a 10-in-1 pressure cooker. Add the Instant Pot skill to Alexa for recipes and instructions. You can search by ingredients, cuisine, diet preferences or restrictions, or level of challenge.<br /><br /><action value='CategoryMenuCPG'>CPG Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(
            assetPath,
            'casebot/img/MP_CaseBot_255x340_InstantPot.png'
          )
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The Instant Pot is a 10-in-1 pressure cooker. Add the Instant Pot skill to Alexa for recipes and instructions. You can search by ingredients, cuisine, diet preferences or restrictions, or level of challenge.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyKLM: function() {
    this.attributes.lastCaseStudy = 'KLM';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`KLM`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `KLM used Messenger to let customers ask questions and get flight information and boarding passes. Chatbots helped the airline achieve a 40% increase in customer interactions.<br /><br /><action value='CaseStudyKLMVideo'>Play video</action> | <action value='CategoryMenuTravel'>Travel Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_KLM.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `KLM used Messenger to let customers ask questions and get flight information and boarding passes. Chatbots helped the airline achieve a 40% increase in customer interactions.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyKLMVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/klm.mp4'), {
      title: `Case Study: Flight Assistant on Messenger`,
      subtitle: `KLM`
    });
    this.emit(':responseReady');
  },

  CaseStudyTheMuse: function() {
    this.attributes.lastCaseStudy = 'TheMuse';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`The Muse`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The Ask for a Raise chatbot on Facebook is based on the famously foul-mouthed British advertising consultant, Cindy Gallop. In helping women get the money they deserve, she says encouraging things like, “It’s good to know the facts, but it’s better to make a shit-ton of money.”<br /><br /><action value='CategoryMenuCause'>Cause Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_TheMuse.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The Ask for a Raise chatbot on Facebook is based on the famously foul-mouthed British advertising consultant, Cindy Gallop. In helping women get the money they deserve, she says encouraging things like, “It’s good to know the facts, but it’s better to make a shit-ton of money.”`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyUber: function() {
    this.attributes.lastCaseStudy = 'Uber';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Uber`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Alexa can call an Uber for you. She can even give you arrival updates and help you choose which kind of Uber ride you want. Who knows, maybe she can improve your Uber rating.<br /><br /><action value='CaseStudyUberVideo'>Play video</action> | <action value='CategoryMenuTravel'>Travel Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Uber.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Alexa can call an Uber for you. She can even give you arrival updates and help you choose which kind of Uber ride you want. Who knows, maybe she can improve your Uber rating.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyUberVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/uber.mp4'), {
      title: `Case Study: Request a Ride with Alexa`,
      subtitle: `Uber`
    });
    this.emit(':responseReady');
  },

  CaseStudyItalianHealthMinistry: function() {
    this.attributes.lastCaseStudy = 'ItalianHealthMinistry';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Italian Ministry of Health`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The Italian Ministry of Health used Facebook Messenger to improve the quality of life of Alzheimer's patients by chatting to themselves. The case study here is fascinating, if you don’t let the narrator mispronouncing “Alzheimer’s” distract you.<br /><br /><action value='CaseStudyItalianHealthMinistryVideo'>Play video</action> | <action value='CategoryMenuHealth'>Health Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(
            assetPath,
            'casebot/img/MP_CaseBot_255x340_ItalianHealthMinistry.png'
          )
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The Italian Ministry of Health used Facebook Messenger to improve the quality of life of Alzheimer's patients by chatting to themselves. The case study here is fascinating, if you don’t let the narrator mispronouncing “Alzheimer’s” distract you.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyItalianHealthMinistryVideo: function() {
    this.response.playVideo(
      url.resolve(assetPath, 'casebot/vid/italian-health.mp4'),
      {
        title: `Case Study: Chat Yourself`,
        subtitle: `Italian Health Ministry`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyDominos: function() {
    this.attributes.lastCaseStudy = 'Dominos';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Domino's Pizza`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The first QSR to allow customers to order using Alexa? Domino’s. (They also have chatbots on Facebook and Twitter.) Domino’s now considers itself an e-commerce company that sells pizza. Alexa, name another company that has reinvented itself so completely. Alexa? OK, never mind.<br /><br /><action value='CategoryMenuRestaurant'>Restaurant Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Dominos.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The first QSR to allow customers to order using Alexa? Domino’s. (They also have chatbots on Facebook and Twitter.) Domino’s now considers itself an e-commerce company that sells pizza. Alexa, name another company that has reinvented itself so completely. Alexa? OK, never mind.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyAerie: function() {
    this.attributes.lastCaseStudy = 'Aerie';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Aerie`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Aerie launched a chatbot on Kik in 2014 and now uses Messenger, too. The bot helps you shop for lingerie and swimwear. If you praise Aerie’s “real-looking” or plus-size models, the bot was designed with a distinct persona that celebrates body positivity and promotes confidence in young women.<br /><br /><action value='CategoryMenuRetail'>Retail Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Aerie.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Aerie launched a chatbot on Kik in 2014 and now uses Messenger, too. The bot helps you shop for lingerie and swimwear. If you praise Aerie’s “real-looking” or plus-size models, the bot was designed with a distinct persona that celebrates body positivity and promotes confidence in young women.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyNordstrom: function() {
    this.attributes.lastCaseStudy = 'Nordstrom';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Nordstrom`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Nordstrom Holiday Delivery launched in 2016. Customers could browse and order products through Facebook Messenger or Kik, right up until Christmas Day. Some tech reviews later said that Nordstrom “ruled the holidays” with this chatbot.<br /><br /><action value='CategoryMenuRetail'>Retail Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Nordstrom.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Nordstrom Holiday Delivery launched in 2016. Customers could browse and order products through Facebook Messenger or Kik, right up until Christmas Day. Some tech reviews later said that Nordstrom “ruled the holidays” with this chatbot.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyPurina: function() {
    this.attributes.lastCaseStudy = 'Purina';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Purina`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Dog lovers are always looking for insights into various breeds, especially if they’re trying to decide which type of furry friend to add to their households. The Ask Purina skill can answer questions and let you search with filters to find breeds that are hypoallergenic, good with kids or other pets, don’t shed, are a specific size, etc. Who’s a good voice bot? You are, Ask Purina! Yes, you are!<br /><br /><action value='CategoryMenuCPG'>CPG Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Purina.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Dog lovers are always looking for insights into various breeds, especially if they’re trying to decide which type of furry friend to add to their households. The Ask Purina skill can answer questions and let you search with filters to find breeds that are hypoallergenic, good with kids or other pets, don’t shed, are a specific size, etc. Who’s a good voice bot? You are, Ask Purina! Yes, you are!`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyIllinoisHolocaustMuseum: function() {
    this.attributes.lastCaseStudy = 'IllinoisHolocaustMuseum';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Illinois Holocaust Museum`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The Survivor Stories Theater at the Illinois Holocaust Museum enables visitors to ask questions and engage with hologram-like images of survivors.<br /><br /><action value='CaseStudyIllinoisHolocaustMuseumVideo'>Play video</action> | <action value='CategoryMenuCause'>Cause Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(
            assetPath,
            'casebot/img/MP_CaseBot_255x340_IllinoisHolocaustMuseum.png'
          )
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Survivor Stories Theater enables museum visitors to ask questions, pose follow-ups and otherwise engage with a 3D hologram-like image of an actual Holocaust survivor. The responses are incredibly detailed and moving, based on extensive filmed interviews. From childhood stories and songs to harrowing tales of life in Nazi camps, this voice technology offers a powerful way to preserve history.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyIllinoisHolocaustMuseumVideo: function() {
    this.response.playVideo(
      url.resolve(assetPath, 'casebot/vid/holocaust-survivor.mp4'),
      {
        title: `Case Study: Survivor's Stories`,
        subtitle: `Illinois Holocaust Museum`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyTide: function() {
    this.attributes.lastCaseStudy = 'Tide';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Tide's Stain Remover`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The Tide Stain Remover skill is a practical bot that helps you get stains out of clothes. Just launch the Alexa skill and ask how to remove a coffee spill from your favorite shirt or grass stains from your son’s underwear. You’ll get a step-by-step (including Tide product recos, of course) and Alexa will ask if you’d like a text message with the stain removal steps written out.<br /><br /><action value='CategoryMenuCPG'>CPG Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Tide.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The Tide Stain Remover skill is a practical bot that helps you get stains out of clothes. Just launch the Alexa skill and ask how to remove a coffee spill from your favorite shirt or grass stains from your son’s underwear. You’ll get a step-by-step (including Tide product recos, of course) and Alexa will ask if you’d like a text message with the stain removal steps written out.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyEbay: function() {
    this.attributes.lastCaseStudy = 'Ebay';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`eBay Assistant`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `The eBay Assistant app can give you the value of items. Say something like, "OK, Google, ask eBay what an Apple Watch is worth." It will ask whether it's new or used and give you an approximate value. And it will search all listings for the Apple Watch model you want.<br /><br /><action value='CaseStudyEbayVideo'>Play video</action> | <action value='CategoryMenuRetail'>Retail Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Ebay.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `The eBay Assistant app can give you the value of items. Say something like, "OK, Google, ask eBay what an Apple Watch is worth." It will ask whether it's new or used and give you an approximate value. And it will search all listings for the Apple Watch model you want.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyEbayVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/ebay.mp4'), {
      title: `Case Study: eBay Assistant`
    });
    this.emit(':responseReady');
  },

  CaseStudyAABrazil: function() {
    this.attributes.lastCaseStudy = 'AABrazil';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`AA Brazil`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Situation: Brazilians are drinking more and earlier in life. Alcoholism has increased among teens, but asking for help and information is difficult.  Solution: AA created a campaign that lets teens look for help without being ashamed, but also does it in a private and wide-reaching way. Admit that you are powerless to resist chatbots.<br /><br /><action value='CaseStudyAABrazilVideo'>Play video</action> | <action value='CategoryMenuRetail'>Retail Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_AABrazil.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Situation: Brazilians are drinking more and earlier in life. Alcoholism has increased among teens, but asking for help and information is difficult.  Solution: AA created a campaign that lets teens look for help without being ashamed, but also does it in a private and wide-reaching way. Admit that you are powerless to resist chatbots.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyAABrazilVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/alanon.mp4'), {
      title: `Case Study: Anonymous Friend`,
      subtitle: `AA Brazil`
    });
    this.emit(':responseReady');
  },

  CaseStudyMayoClinic: function() {
    this.attributes.lastCaseStudy = 'MayoClinic';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Mayo Clinic`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `Use the Mayo Clinic First Aid skill on Alexa to get quick, hands-free self-care instructions for everyday mishaps and other situations. Just say “Alexa, open Mayo First Aid” and ask for a topic, such as: “How do I treat my baby’s fever?”, “Tell me about spider bites”, “How to disinfect a cut”, or “Instructions for CPR”<br /><br /><action value='CaseStudyMayoClinicVideo'>Play video</action> | <action value='CategoryMenuHealth'>Health Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(
            assetPath,
            'casebot/img/MP_CaseBot_255x340_MayoClinic.png'
          )
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Use the Mayo Clinic First Aid skill on Alexa to get quick, hands-free self-care instructions for everyday mishaps and other situations. Just say “Alexa, open Mayo First Aid” and ask for a topic, such as: “How do I treat my baby’s fever?”, “Tell me about spider bites”, “How to disinfect a cut”, or “Instructions for CPR”`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyMayoClinicVideo: function() {
    this.response.playVideo(url.resolve(assetPath, 'casebot/vid/mayo.mp4'), {
      title: `Case Study: Alexa First Aid`,
      subtitle: `Mayo Clinic`
    });
    this.emit(':responseReady');
  },

  CaseStudySephora: function() {
    this.attributes.lastCaseStudy = 'Sephora';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Sephora`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `With Sephora’s new chatbot on Kik, users take a short quiz about their preferences in exchange for beauty advice and customized product reviews. Want to buy products? Click on the suggested item and Sephora’s mobile site opens directly in the app. The brand chose Kik for its predominantly young audience: Roughly 70% of Kik users are aged 12-24, and 40% of all US teens use it.<br /><br /><action value='CategoryMenuRetail'>Retail Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Sephora.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `With Sephora’s new chatbot on Kik, users take a short quiz about their preferences in exchange for beauty advice and customized product reviews. Want to buy products? Click on the suggested item and Sephora’s mobile site opens directly in the app. The brand chose Kik for its predominantly young audience: Roughly 70% of Kik users are aged 12-24, and 40% of all US teens use it.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyZyrtec: function() {
    this.attributes.lastCaseStudy = 'Zyrtec';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle(`Zyrtec`)
      .setBackgroundImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_Background_3.png')
        )
      )
      .setTextContent(
        makeRichText(
          `If you’re wondering what the pollen count is before you head out, just ask Alexa for a Zyrtec AllergyCast report. Zyrtec could have offered generic information about allergies or a push to order. Instead, this skill gets personal, keeping a record of how you’re feeling so you can pinpoint which allergens affect you.<br /><br /><action value='CategoryMenuHealth'>Health Menu</action> | <action value='MainMenu'>Main Menu</action>`
        )
      )
      .setImage(
        makeImage(
          url.resolve(assetPath, 'casebot/img/MP_CaseBot_255x340_Zyrtec.png')
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `If you’re wondering what the pollen count is before you head out, just ask Alexa for a Zyrtec AllergyCast report. Zyrtec could have offered generic information about allergies or a push to order. Instead, this skill gets personal, keeping a record of how you’re feeling so you can pinpoint which allergens affect you.`
      )
      .shouldEndSession(null)
      .renderTemplate(template);
    this.emit(':responseReady');
  }
};
