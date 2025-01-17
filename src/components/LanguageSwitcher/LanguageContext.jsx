import React, { createContext, useState } from 'react';

// Создаём контекст
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={{ language, switchLanguage }}>{children}</LanguageContext.Provider>;
};
