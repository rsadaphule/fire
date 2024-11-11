import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';


const App: React.FC = () => 
{
   const [userName, setUserName] = useState<string>('User');
   const [userMessage, setUserMessage] = useState<string>('This is the initial message');
   const [timeLeft, setTimeLeft] = useState(5);


   useEffect(() => {

    if (timeLeft === 0) return;

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  
   }, [timeLeft])

 
  return (
    <>
      <h1>Typescript is cool</h1>
      <div>
         <Message name={userName} message={userMessage} ></Message>
         <h4>Countdown: {timeLeft}</h4>
      </div>
    </>
  )
}

export default App;
