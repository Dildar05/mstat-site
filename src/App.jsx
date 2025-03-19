import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainPage from './assets/pages/MainPage.jsx';

function App() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Прокрутка вверх при первой загрузке
  useEffect(() => {
    // Принудительная прокрутка вверх при загрузке
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Мгновенная прокрутка
    });

    if (hash || pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []); // Выполняется только при монтировании компонента

  // Обработка якорных ссылок при клике
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Небольшая задержка для гарантии прокрутки
    }
  }, [hash]);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
