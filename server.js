const express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http)

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

http.listen(3000, () => console.log('Server on'))

/**
 * rooms { 
    'roomName 1': {
        'id 1': 'username 1',
        'id 2': 'username 2'
    },
    'roomName 2': {
        'id 1': 'username 1',
        'id 2': 'username 2'
    },
}
 */
const rooms = {}
io.on('connection', socket => {
  
})