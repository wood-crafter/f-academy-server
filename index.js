const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static('public'))

// Header request
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS')
  res.header('Access-Control-Expose-Headers', 'Content-Length')
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range, Access-Token, Refresh-Token, Pragma, Cache-Control')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

// Use Node.js body parsing middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// for local env
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})