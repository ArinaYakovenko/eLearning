import React from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SendFeedback from './components/SendFeedback';
import Footer from './components/Footer';
import '../src/sass/index.scss'

const App = () => {

  return (
    <div>
      <Header />
      <MainPage />
      <SendFeedback />
      <Footer />
    </div>
  );
};



export default App;