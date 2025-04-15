const express = require('express');
const app = express();

// Bad practice: hardcoded secret
const SECRET = 'my-super-secret-token';

app.get('/', (req, res) => {
  const user = undefined;
  // Runtime error: Cannot read property 'name' of undefined
  res.send(`Hello ${user.name}`);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
