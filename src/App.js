import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cafe from './components/cafe/Cafe';
import { IntlProvider } from 'react-intl';
import localeEn from './locales/en.json';
import localeEs from './locales/es.json';


const userLocale = navigator.language || navigator.userLanguage;

const messages = {
  'es': localeEs,
  'en': localeEn
};

function App() {
  return (
    <IntlProvider locale={userLocale} messages={messages[userLocale.slice(0,2)]}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cafe" element={<Cafe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
