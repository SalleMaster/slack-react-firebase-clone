import React, { useEffect, useState } from 'react';
import '../style/Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat-header'>
        <div className='chat-header-left'>
          <h4 className='chat-channel-name'>
            <strong>#{roomDetails && roomDetails.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className='chat-header-right'>
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className='chat-messages'>
        {roomMessages &&
          roomMessages.map((message) => (
            <Message
              message={message.message}
              timestamp={message.timestamp}
              user={message.user}
              userImage={message.userImage}
            />
          ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};

export default Chat;
