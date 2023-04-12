import React, { useState, useEffect } from 'react';
import Top from "./Top"
import Foot from "./Foot"
import { Login } from './Login';
import './App.css';


function App() {
  const [logged,setLogged] = useState(false);
  let body;
  const login=()=>{
    setLogged(true);
  }
  if(!logged){
    body=<Login login={login} text={"shabi"}/>
  }
  else{
    body=null
  }
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
      </header>

        {body}

      <footer>
        <Foot/>
      </footer>
    </div>
  );
}





export default App;
