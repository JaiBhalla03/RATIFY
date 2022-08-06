import React from 'react'
import Head from './components/Head.js';
import Main from './components/Main.js';
import Foot from './components/Foot.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

const App = () => {
  return (
    <div className="App">
        <Head/>
        <Main/>
        
    </div>
    
  )
}

export default App