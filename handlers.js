const Alexa = require('alexa-sdk');

const makePlainText = Alexa.utils.TextUtils.makePlainText;
const makeImage = Alexa.utils.ImageUtils.makeImage;

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
    const token = this.event.request.token;
    this.response.speak(`Element Selected activated: ${token}`); // does this work?
    this.emit(token);
  },

  MainMenu: function() {
    // bodyTemplateBuilder = new Alexa.templateBuilders.BodyTemplate1Builder();
    // template = bodyTemplateBuilder
    //   .setTitle('Including actions in rich text elements')
    //   .build();
    //
    // this.response.speak('Welcome!').renderTemplate(template);
    // this.emit(':responseReady');
    // return;
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
    listItemBuilder.addItem(null, 'CategoryMenuCause', makePlainText('Cause'));
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Casebot Main Menu')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          'https://s3.amazonaws.com/conversational-exhibit/casebot/img/EchoTestBG.png'
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Welcome to the main menu. Please pick an item from the list.')
      .listen(`I'm sorry, I didn't get that`)
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
        case 'AHA':
          this.emit('CaseStudyAHAVideo');
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
        case 'ItalianHealth':
          this.emit('CaseStudyItalianHealthVideo');
          break;
        case 'HolocaustMuseum':
          this.emit('CaseStudyHolocaustMuseumVideo');
          break;
        case 'Ebay':
          this.emit('CaseStudyEbayVideo');
          break;
        case 'AA':
          this.emit('CaseStudyAAVideo');
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
    this.emit('NotImplemented');
  },

  CategoryMenuRetail: function() {
    this.emit('NotImplemented');
  },

  CategoryMenuTravel: function() {
    this.emit('NotImplemented');
  },

  CategoryMenuCPG: function() {
    this.emit('NotImplemented');
  },

  CategoryMenuCause: function() {
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    listTemplateBuilder = new Alexa.templateBuilders.ListTemplate2Builder();
    listItemBuilder.addItem(
      makeImage(
        'https://s3.amazonaws.com/conversational-exhibit/casebot/img/MP_CaseBot_Image_Square_AABrazil.jpg'
      ),
      'CaseStudyAA',
      makePlainText('Alcoholics Anonymous')
    );
    listItemBuilder.addItem(
      makeImage(
        'https://s3.amazonaws.com/conversational-exhibit/casebot/img/MP_CaseBot_Image_Square_Dominos.jpg'
      ),
      'CaseStudyItalianHealth',
      makePlainText('Italian Health')
    );
    listItemBuilder.addItem(
      makeImage(
        'https://s3.amazonaws.com/conversational-exhibit/casebot/img/MP_CaseBot_Image_Square_AABrazil.jpg'
      ),
      'CaseStudyHolocaustMuseum',
      makePlainText('Survivor Stories')
    );
    listItemBuilder.addItem(
      makeImage(
        'https://s3.amazonaws.com/conversational-exhibit/casebot/img/MP_CaseBot_Image_Square_Dominos.jpg'
      ),
      'CaseStudyMayoClinic',
      makePlainText('Mayo Clinic')
    );
    listItemBuilder.addItem(
      makeImage(
        'https://s3.amazonaws.com/conversational-exhibit/casebot/img/MP_CaseBot_Image_Square_AABrazil.jpg'
      ),
      'CaseStudyTheMuse',
      makePlainText('The Muse')
    );
    listItems = listItemBuilder.build();
    listTemplate = listTemplateBuilder
      .setToken('listToken')
      .setTitle('Casebot Main Menu')
      .setListItems(listItems)
      .setBackgroundImage(
        makeImage(
          'https://s3.amazonaws.com/conversational-exhibit/casebot/img/EchoTestBG.png'
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak('Please pick an item from the list to learn more.')
      .listen(`I'm sorry, I didn't get that`)
      .hint(`Try "Alexa, show 'Survivor Stories.'"`, 'PlainText')
      .renderTemplate(listTemplate);
    this.emit(':responseReady');
  },

  CaseStudyHyundai: function() {
    this.attributes.lastCaseStudy = 'Hyundai';
    this.emit('NotImplemented');
  },

  CaseStudyHyundaiVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/hyundai.mp4',
      {
        title: `Case Study: Blue Link Remote Start`,
        subtitle: `Hyundai`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyBudLight: function() {
    this.emit('NotImplemented');
  },

  CaseStudyCampbells: function() {
    this.emit('NotImplemented');
  },

  CaseStudyPizzaHut: function() {
    this.emit('NotImplemented');
  },

  CaseStudyNike: function() {
    this.emit('NotImplemented');
  },

  CaseStudyWingstop: function() {
    this.emit('NotImplemented');
  },

  CaseStudyStarbucks: function() {
    this.attributes.lastCaseStudy = 'Starbucks';
    this.emit('NotImplemented');
  },

  CaseStudyStarbucksVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/starbucks.mp4',
      {
        title: `My Starbucks Barista`,
        subtitle: `Starbucks`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyAHA: function() {
    this.attributes.lastCaseStudy = 'AHA';
    this.emit('NotImplemented');
  },

  CaseStudyAHAVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/aha.mp4',
      {
        title: `Case Study: Alexa Teaches CPR`,
        subtitle: `American Heart Association`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyAmtrak: function() {
    this.attributes.lastCaseStudy = 'Amtrak';
    this.emit('NotImplemented');
  },

  CaseStudyAmtrakVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/amtrak.mp4',
      {
        title: `Case Study: Ask Julie`,
        subtitle: `Amtrak`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyInstantPot: function() {
    this.emit('NotImplemented');
  },

  CaseStudyKLM: function() {
    this.attributes.lastCaseStudy = 'KLM';
    this.emit('NotImplemented');
  },

  CaseStudyKLMVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/klm.mp4',
      {
        title: `Case Study: Flight Assistant on Messenger`,
        subtitle: `KLM`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyTheMuse: function() {
    this.emit('NotImplemented');
  },

  CaseStudyUber: function() {
    this.attributes.lastCaseStudy = 'Uber';
    this.emit('NotImplemented');
  },

  CaseStudyUberVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/uber.mp4',
      {
        title: `Case Study: Request a Ride with Alexa`,
        subtitle: `Uber`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyItalianHealth: function() {
    this.attributes.lastCaseStudy = 'ItalianHealth';
    this.emit('NotImplemented');
  },

  CaseStudyItalianHealthVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/italian-health.mp4',
      {
        title: `Case Study: Chat Yourself`,
        subtitle: `Italian Health Ministry`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyDominos: function() {
    this.emit('NotImplemented');
  },

  CaseStudyAerie: function() {
    this.emit('NotImplemented');
  },

  CaseStudyNordstrom: function() {
    this.emit('NotImplemented');
  },

  CaseStudyPurina: function() {
    this.emit('NotImplemented');
  },

  CaseStudyHolocaustMuseum: function() {
    this.attributes.lastCaseStudy = 'HolocaustMuseum';

    const builder = new Alexa.templateBuilders.BodyTemplate2Builder();
    listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();

    template = builder
      .setTitle('Survivor Stories')
      .setBackgroundImage(
        makeImage(
          'https://s3.amazonaws.com/conversational-exhibit/casebot/img/EchoTestBG.png'
        )
      )
      .setTextContent(
        makePlainText(
          `The Survivor Stories Theater at the Illinois Holocaust Museum enables visitors to ask questions and engage with hologram-like images of survivors.`
        )
      )
      .setImage(
        makeImage(
          'https://s3.amazonaws.com/conversational-exhibit/casebot/img/MP_CaseBot_Image_Portrait_AABrazil.jpg'
        )
      )
      .setBackButtonBehavior('VISIBLE')
      .build();

    this.response
      .speak(
        `Survivor Stories Theater enables museum visitors to ask questions, pose follow-ups and otherwise engage with a 3D hologram-like image of an actual Holocaust survivor. The responses are incredibly detailed and moving, based on extensive filmed interviews. From childhood stories and songs to harrowing tales of life in Nazi camps, this voice technology offers a powerful way to preserve history.`
      )
      .renderTemplate(template);
    this.emit(':responseReady');
  },

  CaseStudyHolocaustMuseumVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/holocaust-survivor.mp4',
      {
        title: `Case Study: Survivor's Stories`,
        subtitle: `Illinois Holocaust Museum`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyTide: function() {
    this.emit('NotImplemented');
  },

  CaseStudyEbay: function() {
    this.attributes.lastCaseStudy = 'Ebay';
    this.emit('NotImplemented');
  },

  CaseStudyEbayVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/ebay.mp4',
      {
        title: `Case Study: Voice Search`,
        subtitle: `Ebay`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyAA: function() {
    this.attributes.lastCaseStudy = 'AA';
    this.emit('NotImplemented');
  },

  CaseStudyAAVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/alanon.mp4',
      {
        title: `Case Study: Anonymous Friend`,
        subtitle: `Alcoholics Anonymous Brazil`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudyMayoClinic: function() {
    this.emit('NotImplemented');
  },

  CaseStudyMayoVideo: function() {
    this.response.playVideo(
      'https://s3.amazonaws.com/conversational-exhibit/casebot/vid/mayo.mp4',
      {
        title: `Case Study: Alexa First Aid`,
        subtitle: `Mayo Clinic`
      }
    );
    this.emit(':responseReady');
  },

  CaseStudySephora: function() {
    this.emit('NotImplemented');
  },

  CaseStudyZyrtec: function() {
    this.emit('NotImplemented');
  }
};
