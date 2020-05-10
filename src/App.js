import React from 'react';
import './App.css';
import MenuBlock from './components/MenuBlock/MenuBlock';
import HeadersUsers from './components/Headers/HeadersUsers';
import FloodChatContainer from './components/Chats/FloodChat/FloodChatContainer';
import WorkingChatContainer from './components/Chats/WorkingChat/WorkingChatContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {

  return (
    <div className='app-wrapper'>
      <div className='app-wrapper-content'>
        <MenuBlock />
        <HeadersUsers />
        <FloodChatContainer />
        <WorkingChatContainer />
        <UsersContainer />
      </div>
    </div>
  )
}

export default App;
