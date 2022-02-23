import './App.css';
import {DocumentsList} from './components/DocumentsList'
import axios from "axios";
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
import React, { useState, useEffect } from 'react';


const queryClient = new QueryClient();

function App() {
const [currentTime, setCurrentTime] = useState(0);
const obj = {
  time: 'bar'
}

console.log('Object.entries')
console.log(
  Object.entries(obj)
)

console.log('Mapping')
console.log(
  Object.entries(obj)
  .map( ([key, value]) => `My key is ${key} and my value is ${value}` )
)

  useEffect(() => {
    fetch('http://0.0.0.0:5000/get_file').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

    return (
        <QueryClientProvider client={queryClient}>
        <div className="App">
            <header className="App-header">Список Бастионов
            </header>
            <DocumentsList />
            <p>The current time is {currentTime}.</p>


        </div>
    </QueryClientProvider>
    );
}

export default App;