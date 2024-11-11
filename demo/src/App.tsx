import React, { useState } from 'react';
import './App.css';
import Message from './Message';


const App: React.FC = () => 
{
   const [userName, setUserName] = useState<string>('User');
   const [userMessage, setUserMessage] = useState<string>('This is the initial message');
 
  return (
    <>
      <h1>Typescript is cool</h1>
      <div>
         <Message name={userName} message={userMessage} ></Message>
      </div>
    </>
  )
}

export default App;
