const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Middle ware
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts')

//every call for api posts gets redirected to posts
app.use('/api/posts', posts)

//Handle production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname+ '/public')) //use /public as static folder
  // handel SPA
   //all andere routes worden naar index.html geleid  (muv bovengenoemde van de api)
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

//start server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))