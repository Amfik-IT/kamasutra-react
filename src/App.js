import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


// Функцианальный подход (новый)

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;