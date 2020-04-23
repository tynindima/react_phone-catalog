import React from 'react';
import './styles/homepage.scss';
import { Slider } from './Slider';
import { Category } from './Category';

export const HomePage = () => {
  return (
    <main className="homepage">
      <Slider />
      <Category />
      HomePage
    </main>
  );
};
