import React, {useState} from 'react';
import Menubar from './components/Menubar';
import Main from './components/Main';
import Coffee from './components/Coffee';
import Footer from './components/Footer';

import './App.css';


function App() {
  const [name, setName] = useState('Sean')
  return (
    <div className="App">
      <>
      <Menubar name = {name} setName = {setName} />
      <Main name = {name}></Main>
      <Coffee />
      <Footer />
      </>
    </div>
  );
}

export default App;
