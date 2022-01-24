const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendsms = async function (phoneNumber, callback) {
    try {
        const message = await client.messages
        .create({
            from: '+14159149325', 
            body: 'Hi there', 
            to: phoneNumber
        });
        console.log("message:", JSON.stringify(message));
        callback(undefined, message);
    } catch (error) {
        console.log("SMS error:", error);
        callback(error, undefined);
    }
};

module.exports = sendsms;

