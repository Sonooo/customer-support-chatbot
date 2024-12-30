# Smart Customer Support Chatbot

This project is a **Smart Customer Support Chatbot** capable of handling Level 1 (L1) support tasks. It integrates with multiple messaging platforms like **Telegram**, **WhatsApp**, **Slack**, **Discord**, and provides a live chat feature for websites. The bot can understand customer issues, provide guidance, and create support tickets in **Trello** for further assistance by the support team.

### Features
- **Natural Language Understanding (NLU)**: Integrates with **Dialogflow** (or any NLU tool of choice) to understand user queries.
- **Support Ticketing**: Automatically creates support tickets in **Trello**.
- **Multi-Platform Support**: The chatbot works on **Telegram**, **WhatsApp**, **Slack**, **Discord**, and the website.
- **Basic Support Tasks**: Helps customers with common issues, escalates when necessary, and assigns tickets to the appropriate team.

---

## Folder Structure

/customer-support-chatbot
├── /src
│   ├── /bots
│   │   ├── telegramBot.js
│   │   ├── whatsappBot.js
│   │   ├── slackBot.js
│   │   └── discordBot.js
│   ├── /nlu
│   │   ├── dialogflow.js      # (Dialogflow integration)
│   ├── /ticketing
│   │   ├── trello.js          # (Ticket creation in Trello)
│   ├── /web
│   │   ├── server.js          # (Website chat server with Socket.io)
│   │   └── public
│   │       └── index.html     # (Frontend for website chat)
│   └── config.js              # (Configuration for all APIs and services)
├── .env                        # Environment variables (e.g., tokens, API keys)
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation



---

## Prerequisites

To run this project locally, you'll need the following:

1. **Node.js** and **npm** installed. You can download them from [nodejs.org](https://nodejs.org/).
2. **Dialogflow** account: For NLU integration.
3. **Trello** account: For managing tickets.
4. **Twilio Account**: For WhatsApp integration (free trial available).
5. **Telegram Bot**: Created through [BotFather](https://core.telegram.org/bots#botfather).
6. **Slack App**: Set up your bot on [Slack API](https://api.slack.com/apps).
7. **Discord Bot**: Set up your bot in [Discord Developer Portal](https://discord.com/developers/applications).

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Sonooo/customer-support-chatbot.git
cd customer-support-chatbot
