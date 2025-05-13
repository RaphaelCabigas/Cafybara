export default function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        const intent = body.queryResult.intent.displayName;
        const params = body.queryResult.parameters;

        if (intent == "book.reservation") {
            const name = params['given-name'];
            const email = params['email'];
            const rawDate = params['date'];
            const time = params['time-reservation'];
            const guests = params['guest-count'];

            const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric"
            });

            res.status(200).json({
                fulfillmentMessages: [
                    {
                        "richContent": [
                            [
                                {
                                    "rawUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F85%2FCapybara_portrait.jpg&f=1&nofb=1&ipt=88df1e11027b020ce0f58e102d06d3f4f2e4977710dfd0de99da1d2265a474f2",
                                    "type": "image",
                                    "accessibilityText": "Capybara waiting for a table"
                                },
                                {
                                    "type": "info",
                                    "subtitle": `Kindly confirm your reservation ${name} (${email}). Reservation date will be on ${formattedDate}, ${time}, with ${guests} guest/s.`,
                                    "title": "Reservation Confirmation"
                                },
                                {
                                    "type": "chips",
                                    "options": [
                                        {
                                            "text": "Confirm"
                                        },
                                        {
                                            "text": "Cancel"
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                ]
            });
        }
    } else {
        res.status(405).end();
    }
}
