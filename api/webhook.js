export default async function handler(req, res) {
  // * Only allow post request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // * Extract the request and the corresponding intent name
  const body = req.body;
  const intentName = body.queryResult.intent.displayName;

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
            rawUrl: "https://cafybara.vercel.app/assets/images/confirmation.png",
            accessibilityText: "Capybara typing on a laptop"
          },
          {
            type: "info",
            title: `Reservation Confirmation`,
            title: `Kindly confirm that your reservation details are correct:`
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

    const context = outputContexts.find(ctx => ctx.name.endsWith('/contexts/order-followup'));
    let cart = context?.parameters?.cart || [];

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
            title: `${menuItem} added to cart!`,
          },
          {
            type: "divider"
          },
          {
            type: "description",
            title: "🛒 Your Cart",
            text: cartItems
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `💰 Total Price: ${totalPrice} AED`,
          },
          {
            type: "chips",
            options: [
              { text: "➕ Add More Items" },
              { text: "🛒 Checkout" },
              {
                text: "Cancel", image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/dell-fill.svg?height=16&color=%23e52121"
                  }
                }
              }
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
          parameters: { cart: cart }
        }
      ]
    });
  }
  // ! Add More Menu Items Intent
  else if (intentName === "OrderAddMore") {
    const outputContexts = body.queryResult.outputContexts || [];
    const context = outputContexts.find(ctx => ctx.name.endsWith('/contexts/order-followup'));

    // * Get the cart and totalPrice from the context parameters
    const cart = context?.parameters.cart || [];

    const payload = {
      richContent: [
        [
          {
            type: "info",
            subtitle: `What would you like to add more? `
          },
          {
            type: "divider"
          },
          {
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/capyccino.png"
              }
            },
            "subtitle": "13 AED",
            "title": "Capyccino",
            "text": "A frothy cappuccino with a cute capybara latte art!",
            "type": "accordion"
          },
          {
            "type": "divider"
          },
          {
            "title": "Strawberry Yakult Fizz",
            "text": "Refreshing soda with Yakult and sweet strawberry bursts.",
            "type": "accordion",
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/yakult.png"
              }
            },
            "subtitle": "14 AED"
          },
          {
            "type": "divider"
          },
          {
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/matcha.png"
              }
            },
            "type": "accordion",
            "subtitle": "15 AED",
            "title": "Iced Matcha Latte",
            "text": "Earthy Japanese matcha with creamy milk over ice."
          },
          {
            "type": "divider"
          },
          {
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/banana.png"
              }
            },
            "title": "Cold Brew Banana Twist",
            "type": "accordion",
            "subtitle": "17 AED",
            "text": "Smooth cold brew coffee with a hint of ripe banana."
          },
          {
            "type": "divider"
          },
          {
            "subtitle": "13 AED",
            "title": "Brown Boba Milk Tea",
            "type": "accordion",
            "text": "Classic milk tea with chewy brown sugar pearls.",
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/milktea.png"
              }
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "accordion",
            "title": "Mini Waffle Sticks",
            "text": "Bite-sized waffles served with maple or chocolate dip.",
            "subtitle": "10 AED",
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/wafflesticks.png"
              }
            }
          },
          {
            "type": "divider"
          },
          {
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/puffs.png"
              }
            },
            "title": "Cheese Capy-Puffs",
            "type": "accordion",
            "text": "Fluffy pastry puffs filled with gooey cheese.",
            "subtitle": "9 AED"
          },
          {
            "type": "divider"
          },
          {
            "subtitle": "8 AED",
            "title": "Banana Nut Muffin",
            "image": {
              "src": {
                "rawUrl": "https://cafybara.vercel.app/assets/images/muffin.png"
              }
            },
            "text": "Moist muffin packed with bananas and crunchy walnuts.",
            "type": "accordion"
          },
          {
            type: "chips",
            options: [...Object.keys(menuAvailable).map(item => ({ text: item })),
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

    return res.status(200).json({
      fulfillmentMessages: [{ payload }],
      outputContexts: [
        {
          name: `${body.session}/contexts/order-followup`,
          lifespanCount: 5,
          parameters: { cart }
        }
      ]
    });
  }

  else if (intentName === "OrderConfirm") {
    const outputContexts = body.queryResult.outputContexts || [];
    const context = outputContexts.find(ctx => ctx.name.endsWith('/contexts/order-followup'));

    // * Get the cart and totalPrice from the context parameters
    const cart = context?.parameters.cart || [];

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
            "type": "image",
            "rawUrl": "https://cafybara.vercel.app/assets/images/confirmation.png",
            "accessibilityText": "Capybara typing on a laptop"
          },
          {
            type: "info",
            title: "Order Confirmation",
            subtitle: "Would you like to proceed with this purchase?"
          },
          {
            type: "divider"
          },
          {
            type: "description",
            title: "🛒 Your Cart",
            text: cartItems
          },
          {
            type: "divider"
          },
          {
            type: "info",
            title: `💰 Total Price: ${totalPrice} AED`
          },
          {
            type: "chips",
            options: [
              { text: "➕ Add More Items" },
              {
                text: "Proceed with Pickup",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/check-fill.svg?height=16&color=%235cb338"
                  }
                }
              },
              {
                text: "Proceed with Delivery",
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
      ]
    });
  }

  else if (intentName === "OrderCancel") {
    const payload = {
      richContent: [[
        {
          type: "info",
          title: "🗑️ Your order has been canceled.",
          subtitle: "Let us know if you'd like to start a new one!"
        },
        {
          type: "chips",
          options: [
            { text: "✍️ Start New Order" },
            { text: "🏡 Home" }
          ]
        }
      ]]
    };

    return res.status(200).json({
      fulfillmentMessages: [{ payload: payload }],
      outputContexts: [
        {
          name: `${body.session}/contexts/order-followup`,
          lifespanCount: 0
        }
      ]
    });
  }

}
