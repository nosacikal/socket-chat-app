import { useEffect, useState } from 'react'
import { Login, Chat } from './pages'
import io from 'socket.io-client'

let socket
const CONNECTION_PORT = 'localhost:3001/'

function App() {
  const [loggedIn, setloggedIn] = useState(false)

  const [input, setInput] = useState({
    username: '',
    room: '',
  })

  // After login
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const handleChange = (field, e) => {
    setInput({ ...input, [field]: e.target.value })
  }

  useEffect(() => {
    socket = io(CONNECTION_PORT)
  }, [CONNECTION_PORT])

  useEffect(() => {
    socket.on('recive_message', (data) => {
      setMessageList([...messageList, data])
    })
  })

  const connectToRoom = (e) => {
    e.preventDefault()

    setloggedIn(true)
    socket.emit('join_room', input.room)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = async (e) => {
    e.preventDefault()

    let messageContent = {
      room: input.room,
      content: {
        author: input.username,
        message: message,
      },
    }

    await socket.emit('send_message', messageContent)
    setMessageList([...messageList, messageContent.content])
    setMessage('')
  }

  return (
    <div className='App'>
      {!loggedIn ? (
        <Login
          onChange={(field, e) => handleChange(field, e)}
          input={input}
          connectToRoom={connectToRoom}
        />
      ) : (
        <Chat
          sendMessage={sendMessage}
          messageList={messageList}
          input={input.username}
          handleMessage={(e) => handleMessage(e)}
        />
      )}
    </div>
  )
}

export default App
