const path = require('path');

// const pathLocation = path.join(__dirname, '..', 'public', "assets", 'skimountain.jpeg');

function getMessages(req, res) {
 res.render('messages', {
   title: 'coders from Nigeria',
 });
}

function postMessage(req, res) {
  console.log('sending stuff online.');
}

module.exports = {
  getMessages,
  postMessage,
};
