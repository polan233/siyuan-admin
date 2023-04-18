import React, { useState } from 'react';
import Top from "./Top"
import Foot from "./Foot"
import { Login } from './Login';
import Page from "./Page"
import './App.css';


function App() {
  const [logged,setLogged] = useState(false);
  let body;
  const login=()=>{
    setLogged(true);
  }
  if(!logged){
    body=<Login login={login}/>
  }
  else{
    body=<Page/>
  }
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Top/>
      </header>

        {body}
      <div class="push"></div>
    </div>
    <footer>
        <Foot/>
    </footer>
    </>
  );
}





export default App;
