import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';

function App() {
  const [message, setMessage]=useState([]);
    function callback(str) {
        setMessage(str);
    }
  useEffect(()=>{
      axios({
          url: '/api/test',
          method: 'GET'
      }).then((res) => {
          callback(res.data);
      })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {message}
      </header>
    </div>
  );
}

export default App;
