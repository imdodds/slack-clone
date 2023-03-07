import React from 'react'
import { ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatContainer, ChatMessages } from '../styles/Chat.styles';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import ChatInput from './ChatInput';
import { db } from '../firebase';


function Chat() {

  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )
  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

  return (
    <ChatContainer>
      <>
        <ChatHeader>
          <ChatHeaderLeft>
            <h4><strong>#{roomDetails?.data().name}</strong></h4>
            <StarBorderOutlined />
          </ChatHeaderLeft>

          <ChatHeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </ChatHeaderRight>
        </ChatHeader>

        <ChatMessages>
          {/* Message List */}
        </ChatMessages>

        <ChatInput
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </>
    </ChatContainer>
  )
}

export default Chat


