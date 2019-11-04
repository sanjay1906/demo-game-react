import React from 'react';
import './App.css';
import Testris from './Components/Testris';
import ReactRouter from './ReactRouter/ReactRouter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from './Map/Map';
import CounterButton from './ReactTry/Count';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ReactRouter />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/content' exact component={Content} />
        <Map />
        <CounterButton />
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <h1> its home page </h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1> its About page </h1>
    </div>
  );
};
const Content = () => {
  return (
    <div>
      <h1> its Content page </h1>
    </div>
  );
};
export default App;
