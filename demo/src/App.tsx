import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';


const App: React.FC = () => 
{
   const [userName, setUserName] = useState<string>('User');
   const [userMessage, setUserMessage] = useState<string>('This is the initial message');
   const [timeLeft, setTimeLeft] = useState(5);


   useEffect(() => {

    if (timeLeft === 0) return;

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      setUserName('Manny');
      setUserMessage("Message updated after 5 sec");
    }, 1000);

    return () => clearTimeout(timerId);
  
   }, [timeLeft])

 
  return (
    <>
      <UserContext.Provider value={ {name: userName, message: userMessage}}>
         <Header></Header>
         <Message></Message>
         <h4>Countdown: {timeLeft}</h4>
         
      </UserContext.Provider>
    </>
  )
}

export default App;
