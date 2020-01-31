import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Catalog from './Catalog';
import Details from './Details';
import * as basketItemsApi from './api/basketItems';

const App = () => {
  const [items, setItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    basketItemsApi.getAll()
      .then(setItems);
  }, []);

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

            {items.length > 0 ? (
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <b>{item}</b>

                    <button
                      type="button"
                      onClick={() => removeItem(item)}
                    >
                      x
                    </button>
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
            <Route path="/phones" exact component={Catalog} />
            <Route path="/phones/:phoneId" component={Details} />
            <Redirect to="/phones" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
