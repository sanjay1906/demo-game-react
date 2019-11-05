import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import here

import Testris from './Components/Testris';
import ReactRouter from './ReactRouter/ReactRouter';
import Map from './Map/Map';
import CounterButton from './ReactTry/Count';
import Conutstate from './Hooks/Classcount';
import FonHock from './Hooks/FonHock';
import CountID from './Hooks/CountID';
import Hook3 from './Hooks/hook3';
import Hook5 from './Hooks/Hooks5';
import Hook6 from './Hooks/Addname';

// import Demohelo from './Hooks/Helodemo';

function App(props) {
  return (
    <BrowserRouter>
      <div className='App'>
        {/*
        <FonHock />
        <CountID />
        <Hook3 /> */}
        <Conutstate />
        <Hook3 />

        {/* <Map /> */}
        {/* <Demohelo /> */}

        {/* {props.name}
        <ReactRouter />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/content' exact component={Content} />

        <Home />
        <Hettime />
        <CounterButton /> */}
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

const Hettime = () => {
  return (
    <div>
      {/* <h1>hello thre</h1> */}
      <h1>hello kxnasnoasdodob {new Date().toTimeString()}</h1>
    </div>
  );
};
setInterval(Home, 5000);

export default App;
