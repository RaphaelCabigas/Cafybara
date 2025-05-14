export default async function handler(req, res) {
  // * Only allow post request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // * Extract the request and the corresponding intent name
  const body = req.body;
  const intentName = body.queryResult.intent.displayName;

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

    const payload = {
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

    // * Return successful payload
    return res.status(200).json({
      fulfillmentMessages: [
        {
          payload: payload
        }
      ]
    });
  }

  // ! Order Process Intent
  else if (intentName === "OrderProcess") {
    const intentParams = body.queryResult?.parameters || {};
    const outputContexts = body.queryResult.outputContexts || [];

    const menuItem = intentParams["menu-item"];

    // * Menu item prices
    const menuAvailable = {
      "☕ Capyccino": 13,
      "🧃 Strawberry Yakult Fizz": 14,
      "🥤 Iced Matcha Latte": 15,
      "🍌 Cold Brew Banana Twist": 17,
      "🧋 Brown Boba Milk Tea": 13,
      "🧇 Mini Waffle Sticks": 10,
      "🧀 Cheese Capy-Puffs": 9,
      "🧁 Banana Nut Muffin": 8
    };

    const context = outputContexts.find(ctx => ctx.name.endsWith('/contexts/order-followup'));
    let cart = context?.parameters?.cart || [];

    if (!menuItem || !menuAvailable[menuItem]) {
      const payload = {
        richContent: [
          [
            {
              type: "info",
              title: "Oops! we don't sell that at our store.",
              subtitle: "These are the only available drinks & snacks we offer:"
            },
            {
              type: "chips",
              options: Object.keys(menuAvailable).map(item => ({ text: item }))
            }
          ]
        ]
      }
      return res.status(200).json({ fulfillmentMessages: [{ payload }] });
    }

    const existingItem = cart.find(item => item.name === menuItem);
    if (existingItem) {
      // * Increase the quantity by 1 if item already exists
      existingItem.quantity += 1;
    } else {
      // * Add the new item to the cart
      cart.push({
        name: menuItem,
        quantity: 1,
        price: menuAvailable[menuItem]
      });
    }

    // * Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // * Format cart items into readable lines
    const cartItems = cart.map(item =>
      `${item.name} (x${item.quantity}) - ${item.price * item.quantity} AED`
    );

    const payload = {
      richContent: [
        [
          {
            type: "info",
            title: `${menuItem} has been added to your cart!`,
            subtitle: `x${existingItem.quantity} - ${existingItem.price * existingItem.quantity} AED`
          },
          {
            type: "divider"
          },
          {
            type: "description",
            title: "🛒 Your Cart",
            subtitle: `💰 Total Price: ${totalPrice} AED`,
            text: cartItems
          },
          {
            type: "chips",
            options: [
              { text: "Add More" },
              { text: "Checkout" },
              { text: "Cancel" }
            ]
          }
        ]
      ]
    }

    return res.status(200).json({
      fulfillmentMessages: [{ payload: payload }],
      outputContexts: [
        {
          name: `${body.session}/contexts/order-followup`,
          lifespanCount: 5,
          parameters: { cart: newCart }
        }
      ]
    });
  }


  else if (intentName === "Checkout") {
    // * Retrieve the cart and total price from OrderProcess' outputContext
    const cartContext = body.queryResult.outputContexts?.find(ctx =>
      ctx.name.endsWith('/contexts/order-followup')
    );

    // * Get the cart and totalPrice from the context parameters
    const cart = cartContext?.parameters.cart || [];
    const totalPrice = cartContext?.parameters.totalPrice || 0;

    // * Format the cart items again
    const cartItems = cart.map(item => `${item.name}(x${item.quantity} - ${item.price * item.quantity} AED)`).join("\n");

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
            subtitle: `💰 Total Price: ** ${totalPrice} AED ** `,
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
          name: `projects/cafybara-rjpb/agent/sessions/${sessionId}/contexts/order-followup`,
          lifespanCount: 0
        }
      ]
    });
  }
}
