const axios = require('axios');

const trelloKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_API_TOKEN;
const boardId = process.env.TRELLO_BOARD_ID;
const listId = process.env.TRELLO_LIST_ID;

const createTicket = async (ticketTitle, ticketDescription) => {
  const url = `https://api.trello.com/1/cards?name=${ticketTitle}&desc=${ticketDescription}&idBoard=${boardId}&idList=${listId}&key=${trelloKey}&token=${trelloToken}`;
  
  try {
    const response = await axios.post(url);
    console.log('Ticket created:', response.data);
  } catch (err) {
    console.error('Error creating Trello card:', err);
  }
};

exports.createTicket = createTicket;
