import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SendFeedback from './components/SendFeedback';
import Footer from './components/Footer';
import './sass/index.scss';
import Chat from './components/Chat';

const App = () => {

  return (
    <div className='App'>
      <Header />
      <MainPage />
      <SendFeedback />
      <Footer />
      <Chat />
    </div>
  );
};



export default App;