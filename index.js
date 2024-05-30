const fetch = require('node-fetch');

const botId = process.env.GM_BOT_ID;
const apiKey = process.env.GM_API_KEY;
const message = 'Never say die!';

const url = `https://api.groupme.com/v3/bots/post`;

const body = {
  bot_id: botId,
  text: message,
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Access-Token': apiKey,
  },
  body: JSON.stringify(body),
})
  .then(response => response.json())
  .then(data => {
    console.log('Message sent:', data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
