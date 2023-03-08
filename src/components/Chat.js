import React, { useEffect, useRef } from 'react'
import { ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatContainer, ChatBottom, ChatMessages } from '../styles/Chat.style';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatInput from './ChatInput';
import Message from './Message';


function Chat() {

  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
    db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
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
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}

    </ChatContainer>
  )
}

export default Chat
