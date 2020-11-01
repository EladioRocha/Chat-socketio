const socket = io()

/**
 * ============================= CONSTANTS =============================
 */

const inpUsername = document.querySelector('#inp-username'),
  inpRoom = document.querySelector('#inp-room'),
  inpMessage = document.querySelector('#inp-message'),
  btnSignup = document.querySelector('#btn-signup'),
  containerSignup = document.querySelector('#signup'),
  containerChat = document.querySelector('#chat'),
  roomNameHeader = document.querySelector('#room-name'),
  chatUsers = document.querySelector('#chat-users'),
  chatMessage = document.querySelector('#chat-message')

/**
 * ============================= FUNCTIONS =============================
 */



/**
 * ============================= LISTENERS =============================
 */