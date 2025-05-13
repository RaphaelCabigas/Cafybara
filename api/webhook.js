export default async function handler(req, res) {
  // * Only allow post request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // * Extract the request and the corresponding intent name
  const body = req.body;
  const intentName = body.queryResult.intent.displayName;

  let payload = {};

  if (intentName === 'ContinueReservation') {
    // * Extract all the parameters used in the intent or just an empty object
    const params = body.queryResult?.parameters || {};

    console.log(params);

    // * Assign the corresponding parameters used
    const name = params['given-name'];
    const email = params['email'];
    const allowedTime = params['allowed-time'];
    const allowedGuest = params['allowed-guests'];
    const dateRaw = params['date'];

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
            title: `Reservation Confirmation`,
            subtitle: `Name: ${name}\nEmail: ${email}`
          },
          {
            "type": "divider"
          },
          {
            type: "info",
            title: `Kindly confirm that your reservation will be on:`,
            subtitle: `${formattedDate}, ${allowedTime}, with ${allowedGuest} guest/s.`
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
                },
              },
              {
                text: "Cancel",
                image: {
                  src: {
                    rawUrl: "https://api.iconify.design/lets-icons/dell-fill.svg?height=16&color=%23e52121"
                  }
                },
              }
            ]
          }
        ]
      ]
    };
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
