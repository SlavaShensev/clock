import React from 'react';
import './App.css';
import Clock from "./components/Clock";

function App() {

    return <div>
        <Clock mode={'analog'}/>
        <Clock />
    </div>

}

export default App;
