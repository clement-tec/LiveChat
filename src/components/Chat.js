import React, { useContext } from 'react'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';


const Chat = () => {

  const { data } = useContext(ChatContext);


  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCameraFrontIcon/>
          <PersonAddAlt1Icon/>
          <MoreHorizIcon/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat