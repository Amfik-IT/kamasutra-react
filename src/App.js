import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


// Функцианальный подход (новый)

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
          <Dialogs />
          {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;