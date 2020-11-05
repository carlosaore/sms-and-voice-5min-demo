const env = require('env2')('.env')
const client = require('twilio')(process.env.SID, process.env.AUTH)
const phoneNumber = '+447411275274'
const _ = require('lodash')

client.messages
  .list({
    to: phoneNumber,
    dateSent: new Date(Date.UTC(2020, 10, 5, 0, 0, 0))
  })
  .then(messages => {
    _.uniqBy(messages, 'from').forEach(message =>
      client.calls
        .create({
          from: phoneNumber,
          to: message.from,
          url :'http://rachblondon.ngrok.io/voice.xml'
        })
        .then(call => console.log(call.sid))
    )
  })
