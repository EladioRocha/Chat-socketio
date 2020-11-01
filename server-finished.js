function saveDataRoom(id, username, roomName) {
  let room = rooms[roomName]
  if(!room) {
    room = rooms[roomName] = {}
  }
  room[id] = username
  console.log(rooms)
}

function getUsersFromRoom(roomName) {
  if(rooms[roomName]) {
    return Object.values(rooms[roomName])
  }

  return []
}

function searchInfoBySocketId(socketId) {
  for(const roomName in rooms) {
    const existInRoom = socketId in rooms[roomName]
    if(existInRoom) {
      return { roomName, username: rooms[roomName][socketId] }
    }
  }

  return { roomName: null, username: null }
}

function deleteUserFromRoom(socketId, roomName) {
  if(roomName) {
    delete rooms[roomName][socketId]
  }
}