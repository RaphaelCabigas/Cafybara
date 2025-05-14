export default async function handler(req, res) {
  // * Only allow post request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // * Extract the request and the corresponding intent name
  const body = req.body;
  const intentName = body.queryResult.intent.displayName;

  let payload = {};

  // ! Reservation Pricing and Confirmation
  if (intentName === "ReservationPricing") {
    // * Extract all the parameters from the intent and output used in the intent or just an empty object
    const intentParams = body.queryResult?.parameters || {};
    const outputContexts = body.queryResult.outputContexts || [];

    // * Find the following context for the previous intent
    const context = outputContexts.find(ctx =>
      ctx.name.endsWith('/contexts/continuereservation-followup')
    );
    const contextParams = context?.parameters || {};

    // * Assign the corresponding parameters used
    const name = contextParams['given-name'];
    const email = contextParams['email'];
    const allowedTime = contextParams['allowed-time'];
    const allowedGuest = contextParams['allowed-guests'];
    const dateRaw = contextParams['date'];
    const priceRaw = intentParams['reservation-item'];

    let formattedDate = '';
    try {
      // * Make a new Date object and change the format e.g. May 16, 2025
      const dateObj = new Date(dateRaw);
      formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      // * Any errors occur, get the raw date
    } catch (err) {
      formattedDate = dateRaw;
    }

    const totalPrice = priceRaw * allowedGuest;

    payload = {
      richContent: [
        [
          {
            type: "image",
            rawUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F85%2FCapybara_portrait.jpg&f=1&nofb=1&ipt=88df1e11027b020ce0f58e102d06d3f4f2e4977710dfd0de99da1d2265a474f2",
            accessibilityText: "Capybara waiting for a table"
          },
          {
            type: "info",
            title: `Kindly confirm that your reservation details are correct.`
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `🧑‍💼 Your Name:`,
            subtitle: `${name}`
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `📧 Your Email:`,
            subtitle: `${email}`
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `📅 Date & Time Reservation:`,
            subtitle: `${formattedDate} & ${allowedTime}`
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `👥 Guest/s:`,
            subtitle: `${allowedGuest}`
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `💰 Total Price (💵 per Guest):`,
            subtitle: `${totalPrice} AED (${priceRaw} AED)`
          },
          {
            type: "chips",
            options: [
              {
                text: "Confirm",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/check-fill.svg?height=16&color=%235cb338"
                  }
                }
              },
              {
                text: "Cancel",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/dell-fill.svg?height=16&color=%23e52121"
                  }
                }
              }
            ]
          }
        ]
      ]
    };
  }

  // ! Order Process Intent
  if (intentName === "OrderProcess") {
    // * Get the user's current session
    const sessionId = body.session.split('/').pop();
    // * Get the menu iem parameter
    const menuItem = body.queryResult.parameters["menu-item"];

    // * Initialize the cart
    let cart = [];

    // * Menu item prices
    const menuPrices = {
      "☕ Capyccino": 13,
      "🍌 Strawberry Yakult Fizz": 14,
      "🥤 Iced Matcha Latte": 15,
      "🧃 Cold Brew Banana Twist": 17,
      "🧋 Brown Boba Milk Tea": 13,
      "🧇 Mini Waffle Sticks": 10,
      "🧀 Cheese Capy-Puffs": 9,
      "🧁 Banana Nut Muffin": 8
    };

    // * Gets the existing cart from the of this intent
    // * whenever the user wants to add more items 
    const context = body.queryResult.outputContexts?.find(ctx =>
      ctx.name.endsWith('/contexts/orderprocess-followup')
    );

    // * if the context exists with a cart then update the cart
    if (context?.parameters?.cart) {
      cart = context.parameters.cart;
    }

    // * Checks if the item already exists
    const existingItem = cart.find(item => item.name === menuItem);

    if (existingItem) {
      // * increase the quantity by 1
      existingItem.quantity += 1;
    } else {
      // * Add the new item to the cart
      cart.push({ name: menuItem, quantity: 1, price: menuPrices[menuItem] });
    }

    // * Calculates the total price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // * Map the items with the corresponding name and quantity
    const cartItems = cart.map(item => `${item.name} (x${item.quantity} - ${item.price * item.quantity} AED`);

    payload = {
      richContent: [
        [
          {
            type: "info",
            title: `${menuItem} has been added to your cart!`,
            subtitle: `(x${existingItem?.quantity || 1}) - ${menuPrices[menuItem]} AED`
          },
          {
            type: "divider"
          },
          {
            type: "description",
            title: "🛒 Your Cart",
            subtitle: `💰 Total Price: **${totalPrice}**`,
            text: cartItems
          },
          {
            type: "divider"
          },
          {
            type: "chips",
            options: [
              { text: "➕ Add More Items" },
              { text: "🛒 Checkout" },
              {
                text: "Cancel",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/dell-fill.svg?height=16&color=%23e52121"
                  }
                }
              }
            ]
          }
        ]
      ]
    };

    if (body.queryResult.queryText === "➕ Add More Items") {
      payload = {
        richContent: [
          [
            {
              type: "info",
              title: "Please choose another item to add to your cart."
            },
            {
              type: "chips",
              options: [
                {
                  "text": "🥤 Iced Matcha Latte"
                },
                {
                  "text": "☕ Capyccino"
                },
                {
                  "text": "🍌 Cold Brew Banana Twist"
                },
                {
                  "text": "🧃 Strawberry Yakult Fizz"
                },
                {
                  "text": "🧋 Brown Boba Milk Tea"
                },
                {
                  "text": "🧇 Mini Waffle Sticks"
                },
                {
                  "text": "🧀 Cheese Capy-Puffs"
                },
                {
                  "text": "🧁 Banana Nut Muffin"
                }
              ]
            }
          ]
        ],
        outputContexts: [
          {
            name: `projects/cafybara-rjpb/agent/sessions/${sessionId}/contexts/orderprocess-followup`,
            lifespanCount: 5,
            parameters: {
              cart: cart,
              totalPrice: totalPrice
            }
          }
        ]
      };
    }
  }

  if (intentName === "Checkout") {
    // * Retrieve the cart and total price from OrderProcess' outputContext
    const cartContext = body.queryResult.outputContexts?.find(ctx =>
      ctx.name.endsWith('/contexts/orderprocess-followup')
    );

    // * Get the cart and totalPrice from the context parameters
    const cart = cartContext?.parameters.cart || [];
    const totalPrice = cartContext?.parameters.totalPrice || 0;

    // * Format the cart items again
    const cartItems = cart.map(item => `${item.name} (x${item.quantity} - ${item.price * item.quantity} AED)`).join("\n");

    payload = {
      richContent: [
        [
          {
            type: "info",
            title: "Checkout Details:"
          },
          {
            type: "divider"
          },
          {
            type: "description",
            title: "🛒 Your Cart",
            subtitle: `💰 Total Price: **${totalPrice} AED**`,
            text: cartItems
          },
          {
            type: "chips",
            options: [
              {
                text: "Confirm",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/check-fill.svg?height=16&color=%235cb338"
                  }
                }
              },
              {
                text: "Cancel",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/dell-fill.svg?height=16&color=%23e52121"
                  }
                }
              }
            ]
          }
        ]
      ]
    };

    return res.status(200).json({
      fulfillmentMessages: [
        {
          payload: payload

        }
      ],
      outputContexts: [
        {
          // * Clear the session for order process
          name: `projects/cafybara-rjpb/agent/sessions/${sessionId}/contexts/orderprocess-followup`,
          lifespanCount: 0
        }
      ]
    });
  }

  // * Return successful payload
  return res.status(200).json({
    fulfillmentMessages: [
      {
        payload: payload
      }
    ]
  });
}
