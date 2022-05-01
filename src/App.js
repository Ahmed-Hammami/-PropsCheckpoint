import React from 'react';
import './App.css';
import Profile from './Component/Profile/Profile';

function App() {
  const alertMyInput = name => alert(name);
  
  return (
    <div className="App">
     
      <img src='jjj.jpg 'alt='jjjj' className='image'></img>
     <Profile  name="ahmed hammami" bio="I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems." profession="Web developer" alertMyInput={alertMyInput}><img src='/lion.jpg' alt='fff' className='profileimage'></img></Profile>
      
    </div>
  );
  
}





export default App;
