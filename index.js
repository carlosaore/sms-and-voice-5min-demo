const env = require('env2')('.env')
const client = require('twilio')(process.env.SID, process.env.AUTH)
const phoneNumber = '+447411275274'
const _ = require('lodash')

