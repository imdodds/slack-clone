import React, { useState } from 'react'
import { ChatInputContainer } from '../styles/ChatInput.style';
import { Button } from '@mui/material';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';


function ChatInput({ channelName, channelId, chatRef }) {

  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Ian Dodds',
      userImage: 'https://avatars.githubusercontent.com/u/104378047?v=4'
    });

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type='submit' onClick={sendMessage} >
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
