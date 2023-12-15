import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SendFeedback from './components/SendFeedback';
import Footer from './components/Footer';
import './sass/index.scss';

const App = () => {

  return (
    <div className='App'>
      <Header />
      <MainPage />
      <SendFeedback />
      <Footer />
    </div>
  );
};



export default App;