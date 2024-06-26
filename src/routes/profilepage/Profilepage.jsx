import { Chat } from '../../components/chat/Chat'
import { List } from '../../components/list/List'
import { listData } from '../../lib/dummyData'
import './profilepage.scss'

const userInfo = {
  avatar:
    'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  username: 'John Doe',
  email: 'john@gmail.com'
}

const UserInfo = ({ avatar, username, email }) => (
  <div className='info'>
    <span>
      Avatar: <img src={avatar} alt='User avatar' />
    </span>
    <span>
      Username: <b>{username}</b>
    </span>
    <span>
      E-mail: <b>{email}</b>
    </span>
  </div>
)

export const Profilepage = () => {
  return (
    <div className='profilePage'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className='userInfo'>
            <UserInfo {...userInfo} />
          </div>
          <div className='title'>
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List items={listData} />
          <div className='title'>
            <h1>Saved List</h1>
          </div>
          <List items={listData} />
        </div>
      </div>
      <div className='chatContainer'>
        <div className='wrapper'>
          <Chat />
        </div>
      </div>
    </div>
  )
}
