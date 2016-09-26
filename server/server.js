'use strict'

<<<<<<< HEAD
const { json } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meanchat'
const app = express()
const PORT = process.env.PORT || 3000
=======
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
>>>>>>> d74fe5888e1ef428b9e02aeb03de5b3ec4c59994

//based on where the file is executed(root), not where it is located(server)
//root is where the package.json is located
app.use(express.static('client')) 
<<<<<<< HEAD
app.use(json())
=======
>>>>>>> d74fe5888e1ef428b9e02aeb03de5b3ec4c59994

app.get('/api/title', (req, res) => {
  res.send({title: "MEAN Chat"})
})

<<<<<<< HEAD
const Message = mongoose.model('message', {
  author: String,
  content: String
})

mongoose.Promise  = Promise

app.get('/api/messages', (req, res, err) => {
  Message
    .find()
    .then(messages => res.json({messages}))
    .catch(err)
})

app.post('/api/messages', (req, res, err) => {
  Message
    .create(req.body)
    .then(msg => res.json(msg))
    .catch(err)
})

mongoose.connect(MONGODB_URL, () => 
  app.listen(PORT, () => console.log(`listening on port ${PORT}`))
)




=======
app.get('/api/messages', (req, res) => {
  res.json({ messages: [
    { author: 'John',
      content: 'Hey guys'
    },
    { author: 'Scott',
      content: 'Hey man'
    }
    ]})
})

app.listen(port, () => console.log(`listening on port ${port}`))
>>>>>>> d74fe5888e1ef428b9e02aeb03de5b3ec4c59994
