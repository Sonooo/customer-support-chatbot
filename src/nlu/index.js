const faq = require('./faq.json');

const findAnswer = (userQuery) => {
  const lowerQuery = userQuery.toLowerCase();
  const match = faq.questions.find(q => lowerQuery.includes(q.query.toLowerCase()));
  return match ? match.response : "I'm sorry, I don't have an answer for that.";
};

module.exports = { findAnswer };
