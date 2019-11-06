const express = require('express')
const app = express()
 
app.listen(3000, () => {
    console.log("API up and running!")
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

// setting view engine
app.set('view engine', 'ejs');
