const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//get post
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection()
  res.send(await posts.find().toArray())
})
//add post

//delete post 
async function loadPostsCollection() {
  const client = await
  mongodb.MongoClient.connect('mongodb://vue_express:vue123@ds239029.mlab.com:39029/vue_express', {
    useNewUrlParser: true
  })
  return client.db('vue_express').collection('posts')
}

//Don't forget:
module.exports = router