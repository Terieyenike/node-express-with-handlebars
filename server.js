const express = require('express');
const path = require('path');

// routes
const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

// handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// middleware with next()
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} took ${delta}ms`);
});
app.use(express.json());
app.use('/site', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Skiing is an extreme sport you should try.',
    caption: 'Document your travel.',
  });
});

app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
