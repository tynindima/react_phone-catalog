import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Catalog from './Catalog';
import Details from './Details';
import Basket from './Basket';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <section>
          <h2>Filter</h2>

          <label>
            <div>Search:</div>
            <input />
          </label>

          <label>
            <div>Sort by:</div>
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </label>
        </section>

        <Basket />
      </div>

      <div className="col-md-10">
        <Switch>
          <Route path="/phones" exact component={Catalog} />
          <Route path="/phones/:phoneId" component={Details} />
          <Redirect to="/phones" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
