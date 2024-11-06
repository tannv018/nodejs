const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/', function (req, res) {
//    console.log("Nhan mot POST Request ve Homepage");
//    res.send('Hello POST');

// app.get('/list_user', function (req, res) {
//    console.log("Nhan mot GET Request ve /list_user");
//    res.send('Page Listing');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
