import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex4": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex499": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Flex612": {
      "callbacks": {}
    },
    "Flex611": {
      "callbacks": {}
    },
    "Flex605": {
      "callbacks": {}
    },
    "Flex606": {
      "callbacks": {}
    },
    "Flex607": {
      "callbacks": {}
    },
    "Flex616": {
      "callbacks": {}
    },
    "Flex613": {
      "callbacks": {}
    },
    "Flex614": {
      "callbacks": {}
    },
    "Flex615": {
      "callbacks": {}
    },
    "Flex620": {
      "callbacks": {}
    },
    "Flex617": {
      "callbacks": {}
    },
    "Flex618": {
      "callbacks": {}
    },
    "Flex619": {
      "callbacks": {}
    },
    "Flex624": {
      "callbacks": {}
    },
    "Flex621": {
      "callbacks": {}
    },
    "Flex622": {
      "callbacks": {}
    },
    "Flex623": {
      "callbacks": {}
    },
    "Flex658": {
      "callbacks": {}
    },
    "Flex654": {
      "callbacks": {}
    },
    "Flex642": {
      "callbacks": {}
    },
    "Flex643": {
      "callbacks": {}
    },
    "Flex644": {
      "callbacks": {}
    },
    "Flex655": {
      "callbacks": {}
    },
    "Flex645": {
      "callbacks": {}
    },
    "Flex646": {
      "callbacks": {}
    },
    "Flex647": {
      "callbacks": {}
    },
    "Flex656": {
      "callbacks": {}
    },
    "Flex648": {
      "callbacks": {}
    },
    "Flex649": {
      "callbacks": {}
    },
    "Flex650": {
      "callbacks": {}
    },
    "Flex657": {
      "callbacks": {}
    },
    "Flex651": {
      "callbacks": {}
    },
    "Flex652": {
      "callbacks": {}
    },
    "Flex653": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "Flex109": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Flex164": {
      "callbacks": {}
    },
    "Flex165": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex172": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "Flex180": {
      "callbacks": {}
    },
    "Flex187": {
      "callbacks": {}
    },
    "Flex185": {
      "callbacks": {}
    },
    "Flex186": {
      "callbacks": {}
    },
    "Flex190": {
      "callbacks": {}
    },
    "Flex188": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex191": {
      "callbacks": {}
    },
    "Flex184": {
      "callbacks": {}
    },
    "Flex181": {
      "callbacks": {}
    },
    "Flex182": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Flex230": {
      "callbacks": {}
    },
    "Flex244": {
      "callbacks": {}
    },
    "Flex246": {
      "callbacks": {}
    },
    "Flex249": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Flex266": {
      "callbacks": {}
    },
    "Flex260": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Flex267": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Flex281": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex284": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "Flex303": {
      "callbacks": {}
    },
    "Flex304": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex311": {
      "callbacks": {}
    },
    "Flex309": {
      "callbacks": {}
    },
    "Flex305": {
      "callbacks": {}
    },
    "Flex306": {
      "callbacks": {}
    },
    "Flex310": {
      "callbacks": {}
    },
    "Flex307": {
      "callbacks": {}
    },
    "Flex308": {
      "callbacks": {}
    },
    "Flex312": {
      "callbacks": {}
    },
    "Flex398": {
      "callbacks": {}
    },
    "Flex396": {
      "callbacks": {}
    },
    "Flex397": {
      "callbacks": {}
    },
    "TextBox11": {
      "custom": {
        "text": "The best place to "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button10": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button11": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/header.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/DOORDASH.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/POSTMATES.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/RAPPI.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/GRUBHUB.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/breakfast.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link10": {
      "custom": {
        "text": "Explore Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/main%20dishes.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link11": {
      "custom": {
        "text": "Explore Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/drinks.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link12": {
      "custom": {
        "text": "Explore Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/desserts.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link13": {
      "custom": {
        "text": "Explore Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button12": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button13": {
      "custom": {
        "text": "Book a Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/About.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "Come And Visit Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/location.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/call.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/msg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "About Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button16": {
      "custom": {
        "text": "About Us"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutUs"
            }
          }
        ]
      }
    },
    "Button17": {
      "custom": {
        "text": "Join Our Team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "Browse Our Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button18": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button19": {
      "custom": {
        "text": "Book a Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button20": {
      "custom": {
        "text": "Book a Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button21": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image228": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chicken%20burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox440": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox441": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox442": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image229": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chocolate%20milkshake.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox443": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox444": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox445": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image230": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classic%20fries.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox446": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox447": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox448": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image231": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pancakes.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox449": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox450": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox451": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image236": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/regular%20soda.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox464": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox465": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox466": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image237": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/egg%20toast.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox467": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox468": {
      "custom": {
        "text": "Egg Toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox469": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image238": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classic%20burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox470": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox471": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox472": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image239": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ice%20cream.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox473": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox474": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox475": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/face1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button22": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button23": {
      "custom": {
        "text": "Book a Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image64": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button26": {
      "custom": {
        "text": "Book a Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button29": {
      "custom": {
        "text": "Book a Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "San Diego"
      },
      "callbacks": {}
    },
    "Input2": {
      "custom": {
        "value": "",
        "placeholder": "Example@gmail.com"
      },
      "callbacks": {}
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Example@gmail.com"
      },
      "callbacks": {}
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "San Diego"
      },
      "callbacks": {}
    },
    "TextBox149": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angelas"
      },
      "callbacks": {}
    },
    "Input6": {
      "custom": {
        "value": "",
        "placeholder": "(123) 456 - 789"
      },
      "callbacks": {}
    },
    "TextBox151": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input9": {
      "custom": {
        "value": "",
        "placeholder": "Do You Have Any Note For Us ?"
      },
      "callbacks": {}
    },
    "TextBox153": {
      "custom": {
        "text": "Add a Note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/msg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image68": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/call.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/location.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox189": {
      "custom": {
        "text": "Follow US On Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button38": {
      "custom": {
        "text": "Follow Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image88": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image97": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image100": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image99": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image104": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image105": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox192": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image113": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image114": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image115": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image116": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image117": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image118": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox193": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox194": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox195": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox196": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox197": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox198": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox199": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox217": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox218": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox220": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox223": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox224": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image119": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image120": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image121": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image122": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "Follow Us On Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox277": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox278": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image156": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link45": {
      "custom": {
        "text": "Menu",
        "url": "/Our_menu"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Our_menu"
            }
          }
        ]
      }
    },
    "Link46": {
      "custom": {
        "text": "About",
        "url": "/aboutUs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutUs"
            }
          }
        ]
      }
    },
    "Link47": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Button60": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button61": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "about": {
    "Flex315": {
      "callbacks": {}
    },
    "Flex313": {
      "callbacks": {}
    },
    "Flex314": {
      "callbacks": {}
    },
    "Button41": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button42": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link14": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link15": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link16": {
      "custom": {
        "text": "Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link17": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link18": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image123": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    }
  },
  "Menu": {
    "Flex318": {
      "callbacks": {}
    },
    "Flex316": {
      "callbacks": {}
    },
    "Flex317": {
      "callbacks": {}
    },
    "Button43": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button44": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link19": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link20": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link21": {
      "custom": {
        "text": "Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link22": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link23": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image124": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    }
  },
  "aboutUs": {
    "Flex402": {
      "callbacks": {}
    },
    "Flex403": {
      "callbacks": {}
    },
    "Flex405": {
      "callbacks": {}
    },
    "Flex406": {
      "callbacks": {}
    },
    "Flex404": {
      "callbacks": {}
    },
    "Flex416": {
      "callbacks": {}
    },
    "Flex415": {
      "callbacks": {}
    },
    "Flex419": {
      "callbacks": {}
    },
    "Flex420": {
      "callbacks": {}
    },
    "Flex421": {
      "callbacks": {}
    },
    "Flex424": {
      "callbacks": {}
    },
    "Flex425": {
      "callbacks": {}
    },
    "Flex426": {
      "callbacks": {}
    },
    "Flex496": {
      "callbacks": {}
    },
    "Flex494": {
      "callbacks": {}
    },
    "Flex495": {
      "callbacks": {}
    },
    "Flex430": {
      "callbacks": {}
    },
    "Flex432": {
      "callbacks": {}
    },
    "Flex433": {
      "callbacks": {}
    },
    "Flex436": {
      "callbacks": {}
    },
    "Flex437": {
      "callbacks": {}
    },
    "Flex438": {
      "callbacks": {}
    },
    "Flex439": {
      "callbacks": {}
    },
    "Flex440": {
      "callbacks": {}
    },
    "Flex442": {
      "callbacks": {}
    },
    "Flex445": {
      "callbacks": {}
    },
    "Flex446": {
      "callbacks": {}
    },
    "Flex460": {
      "callbacks": {}
    },
    "Flex459": {
      "callbacks": {}
    },
    "Flex456": {
      "callbacks": {}
    },
    "Flex457": {
      "callbacks": {}
    },
    "Flex458": {
      "callbacks": {}
    },
    "Flex674": {
      "callbacks": {}
    },
    "Flex672": {
      "callbacks": {}
    },
    "Flex673": {
      "callbacks": {}
    },
    "Flex731": {
      "callbacks": {}
    },
    "Flex728": {
      "callbacks": {}
    },
    "Flex722": {
      "callbacks": {}
    },
    "Flex723": {
      "callbacks": {}
    },
    "Flex716": {
      "callbacks": {}
    },
    "Flex711": {
      "callbacks": {}
    },
    "Flex712": {
      "callbacks": {}
    },
    "Flex717": {
      "callbacks": {}
    },
    "Flex713": {
      "callbacks": {}
    },
    "Flex714": {
      "callbacks": {}
    },
    "Flex729": {
      "callbacks": {}
    },
    "Flex724": {
      "callbacks": {}
    },
    "Flex718": {
      "callbacks": {}
    },
    "Flex719": {
      "callbacks": {}
    },
    "Flex715": {
      "callbacks": {}
    },
    "Flex725": {
      "callbacks": {}
    },
    "Flex720": {
      "callbacks": {}
    },
    "Flex721": {
      "callbacks": {}
    },
    "Flex730": {
      "callbacks": {}
    },
    "Flex726": {
      "callbacks": {}
    },
    "Flex727": {
      "callbacks": {}
    },
    "Flex743": {
      "callbacks": {}
    },
    "Flex741": {
      "callbacks": {}
    },
    "Flex738": {
      "callbacks": {}
    },
    "Flex736": {
      "callbacks": {}
    },
    "Flex732": {
      "callbacks": {}
    },
    "Flex733": {
      "callbacks": {}
    },
    "Flex737": {
      "callbacks": {}
    },
    "Flex734": {
      "callbacks": {}
    },
    "Flex735": {
      "callbacks": {}
    },
    "Flex739": {
      "callbacks": {}
    },
    "Flex740": {
      "callbacks": {}
    },
    "Flex742": {
      "callbacks": {}
    },
    "TextBox281": {
      "custom": {
        "text": "Our story started back in 1984."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox282": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image158": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/About1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex414": {
      "callbacks": {}
    },
    "Image161": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/About2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image163": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/GRUBHUB.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image164": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/RAPPI.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image165": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/POSTMATES.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image166": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/DOORDASH.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox287": {
      "custom": {
        "text": "As seen on:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image167": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox288": {
      "custom": {
        "text": "The story of our first burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox289": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox290": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button64": {
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button68": {
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox356": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox357": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox358": {
      "custom": {
        "text": "How our founder met"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image200": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/About3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox297": {
      "custom": {
        "text": "Meet our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox299": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image169": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox302": {
      "custom": {
        "text": "John Carter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox303": {
      "custom": {
        "text": "Co-founder- and Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox304": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox305": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox306": {
      "custom": {
        "text": "Co-founder- and Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox307": {
      "custom": {
        "text": "Andy Smith"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image170": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about6.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox308": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox309": {
      "custom": {
        "text": "Head of Staff"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox310": {
      "custom": {
        "text": "Sophie Moore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image171": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about7.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox311": {
      "custom": {
        "text": "The value that drive everything we do"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image172": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about8.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox313": {
      "custom": {
        "text": "Love & Passion"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox314": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox315": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox316": {
      "custom": {
        "text": "Flavour"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image173": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about9.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox317": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox318": {
      "custom": {
        "text": "Care & craft"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image174": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about10.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image181": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about13.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox331": {
      "custom": {
        "text": "Quality"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox332": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image182": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about12.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox333": {
      "custom": {
        "text": "Teamwork"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox334": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox335": {
      "custom": {
        "text": "Lorem ipsum quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox336": {
      "custom": {
        "text": "Customer-first"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image183": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about11.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button72": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button73": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link51": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link52": {
      "custom": {
        "text": "About",
        "url": "/aboutUs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutUs"
            }
          }
        ]
      }
    },
    "Link53": {
      "custom": {
        "text": "Menu",
        "url": "/Our_menu"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Our_menu"
            }
          }
        ]
      }
    },
    "Image240": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox483": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox484": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox522": {
      "custom": {
        "text": "Follow Us On Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image258": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image259": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image260": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image261": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox507": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox508": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox509": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox510": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox511": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox512": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox513": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox506": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox514": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox515": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox516": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox517": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox518": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox519": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox520": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox521": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox523": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image262": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image263": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image264": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image265": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image266": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image267": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image268": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image269": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image270": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image271": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image272": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image273": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button77": {
      "custom": {
        "text": "Follow Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox524": {
      "custom": {
        "text": "Follow US On Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Our_menu": {
    "Flex370": {
      "callbacks": {}
    },
    "Flex367": {
      "callbacks": {}
    },
    "Flex358": {
      "callbacks": {}
    },
    "Flex832": {
      "callbacks": {}
    },
    "Flex828": {
      "callbacks": {}
    },
    "Flex816": {
      "callbacks": {}
    },
    "Flex817": {
      "callbacks": {}
    },
    "Flex818": {
      "callbacks": {}
    },
    "Flex829": {
      "callbacks": {}
    },
    "Flex819": {
      "callbacks": {}
    },
    "Flex820": {
      "callbacks": {}
    },
    "Flex821": {
      "callbacks": {}
    },
    "Flex830": {
      "callbacks": {}
    },
    "Flex822": {
      "callbacks": {}
    },
    "Flex823": {
      "callbacks": {}
    },
    "Flex824": {
      "callbacks": {}
    },
    "Flex831": {
      "callbacks": {}
    },
    "Flex825": {
      "callbacks": {}
    },
    "Flex826": {
      "callbacks": {}
    },
    "Flex827": {
      "callbacks": {}
    },
    "Flex849": {
      "callbacks": {}
    },
    "Flex845": {
      "callbacks": {}
    },
    "Flex833": {
      "callbacks": {}
    },
    "Flex834": {
      "callbacks": {}
    },
    "Flex835": {
      "callbacks": {}
    },
    "Flex846": {
      "callbacks": {}
    },
    "Flex836": {
      "callbacks": {}
    },
    "Flex837": {
      "callbacks": {}
    },
    "Flex838": {
      "callbacks": {}
    },
    "Flex847": {
      "callbacks": {}
    },
    "Flex839": {
      "callbacks": {}
    },
    "Flex840": {
      "callbacks": {}
    },
    "Flex841": {
      "callbacks": {}
    },
    "Flex848": {
      "callbacks": {}
    },
    "Flex842": {
      "callbacks": {}
    },
    "Flex843": {
      "callbacks": {}
    },
    "Flex844": {
      "callbacks": {}
    },
    "Flex374": {
      "callbacks": {}
    },
    "Flex371": {
      "callbacks": {}
    },
    "Flex372": {
      "callbacks": {}
    },
    "Flex373": {
      "callbacks": {}
    },
    "Flex677": {
      "callbacks": {}
    },
    "Flex675": {
      "callbacks": {}
    },
    "Flex676": {
      "callbacks": {}
    },
    "Flex395": {
      "callbacks": {}
    },
    "Flex392": {
      "callbacks": {}
    },
    "Flex386": {
      "callbacks": {}
    },
    "Flex387": {
      "callbacks": {}
    },
    "Flex393": {
      "callbacks": {}
    },
    "Flex388": {
      "callbacks": {}
    },
    "Flex380": {
      "callbacks": {}
    },
    "Flex381": {
      "callbacks": {}
    },
    "Flex389": {
      "callbacks": {}
    },
    "Flex382": {
      "callbacks": {}
    },
    "Flex375": {
      "callbacks": {}
    },
    "Flex383": {
      "callbacks": {}
    },
    "Flex394": {
      "callbacks": {}
    },
    "Flex390": {
      "callbacks": {}
    },
    "Flex384": {
      "callbacks": {}
    },
    "Flex376": {
      "callbacks": {}
    },
    "Flex377": {
      "callbacks": {}
    },
    "Flex385": {
      "callbacks": {}
    },
    "Flex378": {
      "callbacks": {}
    },
    "Flex379": {
      "callbacks": {}
    },
    "Flex391": {
      "callbacks": {}
    },
    "TextBox255": {
      "custom": {
        "text": "Our Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox256": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button55": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button56": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button57": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button58": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button59": {
      "custom": {
        "text": "All"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image296": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pancakes.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox579": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox580": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox581": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image297": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classic%20fries.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox582": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox583": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox584": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image298": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chocolate%20milkshake.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox585": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox586": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox587": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image299": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chicken%20burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox588": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox589": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox590": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image300": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ice%20cream.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox591": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox592": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox593": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image301": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classic%20burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox594": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox595": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox596": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image302": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/egg%20toast.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox597": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox598": {
      "custom": {
        "text": "Egg Toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox599": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image303": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/regular%20soda.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox600": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox601": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox602": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image138": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/uber%20eats.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image139": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/seamless.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image140": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/didifood.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image141": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/go%20puff.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "custom": {
        "text": "Order via app"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox258": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image142": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/GRUBHUB.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image143": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/RAPPI.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image144": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/POSTMATES.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image145": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/DOORDASH.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button74": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button75": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link54": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Link55": {
      "custom": {
        "text": "About",
        "url": "/aboutUs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/aboutUs"
            }
          }
        ]
      }
    },
    "Link56": {
      "custom": {
        "text": "Menu",
        "url": "/Our_menu"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Our_menu"
            }
          }
        ]
      }
    },
    "Image241": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox485": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox486": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox276": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image150": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image151": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image152": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image153": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image154": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image155": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox260": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox261": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox262": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox263": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox264": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox265": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox266": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox267": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox259": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox268": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox269": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox270": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox271": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox272": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox273": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox274": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image146": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image147": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image148": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image149": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox275": {
      "custom": {
        "text": "Follow Us On Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
