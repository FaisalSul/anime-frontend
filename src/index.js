import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';
import AnimeAdd from './components/AnimeAdd';
import AnimeUpdate from './components/AnimeUpdate';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<AnimeList />} />
        <Route path="/animes/:id" element={<AnimeDetails />} />
        <Route path="/animes/add" element={<AnimeAdd />} />
        <Route path="/animes/update/:id" element={<AnimeUpdate />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

