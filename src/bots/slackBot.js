const { WebClient } = require('@slack/web-api');
const dialogflow = require('../nlu/dialogflow');

const slackToken = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(slackToken);

// Send a message to Slack
const sendSlackMessage = async (message) => {
  try {
    await web.chat.postMessage({
      channel: '#support', // Channel to post the message
      text: message
    });
    console.log('Message sent to Slack');
  } catch (error) {
    console.error('Error sending message to Slack:', error);
  }
};

// Handle incoming messages
const handleSlackMessage = async (event) => {
  const userMessage = event.text;
  const response = await dialogflow.getResponse(userMessage); // Get response from Dialogflow
  sendSlackMessage(response);
};

// Listen to messages from Slack (use Slack Events API or RTM API)
exports.listenForMessages = () => {
  // You would typically set up the Slack event listener here
};
