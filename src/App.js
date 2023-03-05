import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Banner from './layouts/Banner/Banner';

import './App.scss';

function App() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Load the translation messages based on the selected locale
  const messages = require(`./translations/${locale}.json`);

  // Determine the text direction based on the selected language
  const textDirection = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div dir={textDirection}>
        <Banner />

        <Router>
          <div>
            <button onClick={() => handleLocaleChange('en')}>English</button>
            <button onClick={() => handleLocaleChange('ar')}>العربية</button>
          </div>
        </Router>
      </div>
    </IntlProvider>
  );
}

export default App;
