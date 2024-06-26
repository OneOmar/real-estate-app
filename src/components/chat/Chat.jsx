import { useState } from 'react'
import './chat.scss'

const messages = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet...'
  }
]

const chatMessages = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: false
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: true
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: false
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: true
  },
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: false
  },
  {
    id: 6,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: true
  },
  {
    id: 7,
    text: 'Lorem ipsum dolor sit amet',
    time: '1 hour ago',
    own: false
  }
]

const Message = ({ img, name, text, onClick }) => (
  <div className='message' onClick={onClick}>
    <img src={img} alt={name} />
    <span>{name}</span>
    <p>{text}</p>
  </div>
)

const ChatMessage = ({ text, time, own }) => (
  <div className={`chatMessage ${own ? 'own' : ''}`}>
    <p>{text}</p>
    <span>{time}</span>
  </div>
)

export const Chat = () => {
  const [chat, setChat] = useState(false)

  // Scroll to chat box when a message is clicked on
  const scrollToChat = () => {
    setChat(true)
    const chatBox = document.querySelector('.chatBox')
    if (chatBox) {
      chatBox.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='chat'>
      <div className='messages'>
        <h1>Messages</h1>
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} onClick={scrollToChat} />
        ))}
      </div>
      {chat && (
        <div className='chatBox'>
          <div className='top'>
            <div className='user'>
              <img
                src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='John Doe'
              />
              John Doe
            </div>
            <span className='close' onClick={() => setChat(false)}>
              X
            </span>
          </div>
          <div className='center'>
            {chatMessages.map((msg) => (
              <ChatMessage key={msg.id} {...msg} />
            ))}
          </div>
          <div className='bottom'>
            <textarea placeholder='Type a message...'></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
