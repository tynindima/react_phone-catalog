import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Catalog from './Catalog';
import Details from './Details';
import * as basketItemsApi from './api/basketItems';

const App = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const refreshBasket = () => {
    basketItemsApi.getAll()
      .then(setBasketItems);
  };

  useEffect(refreshBasket, []);

  const removeItem = (itemId: string) => {
    alert(`Removing ${itemId}... Please implement`);
  };

  return (
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

          <section>
            <h2>Shopping Cart</h2>

            {basketItems.length > 0 ? (
              <ul>
                {basketItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => removeItem(item)}
                    >
                      x
                    </button>

                    <b>{item}</b>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items yet</p>
            )}
          </section>
        </div>

        <div className="col-md-10">
          <Switch>
            <Route
              path="/phones"
              exact
              render={() => (
                <Catalog refreshBasket={refreshBasket} />
              )}
            />
            <Route
              path="/phones/:phoneId"
              component={Details}
            />
            <Redirect to="/phones" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
