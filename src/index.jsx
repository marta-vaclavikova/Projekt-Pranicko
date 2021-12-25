import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter, Routes, Route
  }  from 'react-router-dom';
import Home from './components/home/Home';
import CreateCard from './components/card/CreateCard';
import './style.css';
import PickupCard from './components/card/PickupCard';
import Card from './components/card/Card';

const App = () => (
  <BrowserRouter>
    {/*
      Tady bude tvůj Vánoční přáníčko :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
      - použij router (musíš si ho nainstalovat)
    */}
    <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/card/create" element={<CreateCard/>} />
           <Route path="/card/pickup" element={<PickupCard/>} />
           <Route path="/card/:code" element={<Card/>}/>
    </Routes>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
