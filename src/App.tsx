import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import { HomePage } from './components/HomePage';
import { PhonePage } from './components/PhonePage';
import { Header } from './components/Header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/phone/:phoneId?" component={PhonePage} />
    </Switch>
  </>
);

export default App;
