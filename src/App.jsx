import PostList from './components/PostList.jsx';
import { LanguageProvider } from './components/LanguageSwitcher/LanguageContext.jsx';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher.jsx';
import './App.css';

function App() {
  return (
    <div>
      <LanguageProvider>
        <div>
          <h1>Приложение для переключения языков</h1>
          <LanguageSwitcher />
        </div>
      </LanguageProvider>
      <PostList />;
    </div>
  );
}

export default App;
