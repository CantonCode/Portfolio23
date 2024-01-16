import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/home';
import Chatbot from './pages/chatbot/chatbot';
import Header from './components/Header/Header';


const App = () => {
 return (
    <div >

      
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
       </Routes>
    </div>
    
    
 );
};

export default App;