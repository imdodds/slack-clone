import React, { useState } from 'react'
import { ChatInputContainer } from '../styles/ChatInput.style';
import { Button } from '@mui/material';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';


function ChatInput({ channelName, channelId, chatRef }) {

  const [user] = useAuthState(auth);

  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL
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
