const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const params = req.body.queryResult.parameters;

    const name = params['given-name'];
    const email = params['email'];
    const date = new Date(params['date']);
    const month = date.toLocaleString('default', { month: 'long' });
    const time = params['allowed-time'];
    const guests = params['guest-count'];

    res.json({
        fulfillmentMessages: [
            {
                payload: {
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
                                subtitle: `Kindly confirm your reservation ${name} (${email}). Reservation will be in ${month}, at ${time}, with ${guests} guest(s).`
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
                }
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Dialogflow webhook server is running on port ${PORT}`);
});
