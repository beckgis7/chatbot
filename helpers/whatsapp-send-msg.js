var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

// Function to send to send message to Whatsapp

const sendMessage = async (message, senderID) => {
    try {
        await client.messages.create({
                from: 'whatsapp:+14155238886',
                body: message,
                to: senderID
            })
            // .then((message) => {
            //     console.log(message.sid)
            //     return message.sid;
            // });

    } catch (error) {
        console.error(`Failed to send message - $(error)`);
    }
}

module.exports = { sendMessage };