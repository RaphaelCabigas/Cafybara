export default function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        const intent = body.queryResult.intent.displayName;
        const params = body.queryResult.parameters;

        if (intent == "book.reservation") {
            const rawDate = params['date'];
            const time = params['time-reservation'];
            const guestCount = params['guest-count'];

            const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric"
            });

            let responseText = "I need your reservation date, time, and guest count.";

            if (formattedDate && time && guestCount) {
                responseText = `You're all set! 🗓️ Your reservation is on **${formattedDate}**, at **${rawTime}**, for **${guestCount} guest/s`;
            }

            res.status(200).json({
                fulfillmentText: responseText
            });
        }
    } else {
        res.status(405).end();
    }
}
