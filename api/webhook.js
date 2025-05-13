export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;
  const params = body.queryResult?.parameters || {};
  const name = params['given-name'];
  const email = params['email'];
  const allowedTime = params['allowed-time'];
  const guests = params['guest-count'];
  const dateRaw = params['date'];

  let formattedDate = '';
  try {
    const dateObj = new Date(dateRaw);
    formattedDate = dateObj.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (err) {
    formattedDate = dateRaw;
  }

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
          title: "Reservation Confirmation",
          subtitle: `Kindly confirm your reservation ${name} (${email}). Reservation date will be on ${formattedDate}, ${allowedTime}, with ${guests} guest/s.`
        },
        {
          type: "chips",
          options: [
            { text: "Confirm" },
            { text: "Cancel" }
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
