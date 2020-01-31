import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Catalog from './Catalog';
import Details from './Details';
import * as basketItemsApi from './api/basketItems';

import BasketContext from './BasketContext';

const App = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const refreshBasket = () => {
    basketItemsApi.getAll()
      .then(setBasketItems);
  };

  const removeItem = (itemId: string) => {
    alert(`Removing ${itemId}... Please implement`);
  };

  const contextValue = {
    basketItems,
    setBasketItems,
    refreshBasket,
    removeItem,
  };

  return (
    <BasketContext.Provider value={contextValue}>
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
    </BasketContext.Provider>
  );
};

const Basket = () => {
  const { basketItems, refreshBasket, removeItem } = useContext(BasketContext);

  useEffect(refreshBasket, []);

  return (
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
  );
}

export default App;
