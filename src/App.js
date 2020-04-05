import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    var person = {
        firstName: 'Florent',
        lastName: 'Drousset',
        age: 31
    };
    return (
        <div className="App">
            <h2>Hello, my name is {person.firstName} {person.lastName} and I am {person.age} years old.</h2>
        </div>
    );
}

export default App;
