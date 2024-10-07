import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  // Переключаем язык между "ru" и "en"
  const toggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru';
    switchLanguage(newLanguage);
  };

  return (
    <div>
      <p>Текущий язык: {language === 'ru' ? 'Русский' : 'Английский'}</p>
      <button onClick={toggleLanguage}>Переключить на {language === 'ru' ? 'Английский' : 'Русский'}</button>
    </div>
  );
};

export default LanguageSwitcher;
