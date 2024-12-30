const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const sessionClient = new dialogflow.SessionsClient();
const sessionId = uuid.v4();

// Function to get response from Dialogflow
const getResponse = async (message) => {
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en',
      },
    },
  };

  try {
    const [response] = await sessionClient.detectIntent(request);
    const result = response.queryResult;
    return result.fulfillmentText;
  } catch (error) {
    console.error('Dialogflow API error:', error);
    return 'Sorry, I could not understand your request.';
  }
};

exports.getResponse = getResponse;
