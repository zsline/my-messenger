import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Messeges from './components/Messeges';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
      <Messeges />
      <Footer />
    </div>
  );
}


export default App;
