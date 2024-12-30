const twilio = require('twilio');
const dialogflow = require('../nlu/dialogflow');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// WhatsApp sender number (Twilio Sandbox or your own number)
const fromWhatsApp = 'whatsapp:+14155238886'; // Your Twilio number
const toWhatsApp = 'whatsapp:+YOUR_CUSTOMER_PHONE_NUMBER'; // Customer's phone number

const sendMessage = async (message) => {
  try {
    await client.messages.create({
      body: message,
      from: fromWhatsApp,
      to: toWhatsApp
    });
    console.log('Message sent to WhatsApp');
  } catch (err) {
    console.error('Error sending WhatsApp message:', err);
  }
};

const handleIncomingMessage = async (message) => {
  const response = await dialogflow.getResponse(message); // Get response from Dialogflow
  sendMessage(response);
};

// A webhook to handle incoming messages (to be set up in Twilio Console)
exports.webhook = (req, res) => {
  const incomingMessage = req.body.Body;
  handleIncomingMessage(incomingMessage);
  res.send('<Response></Response>');
};
