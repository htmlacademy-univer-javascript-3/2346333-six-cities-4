import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

export function NotFoundScreen(): JSX.Element {
  return (
    <section className="six-cities">
      <Helmet>
        <title>Шесть городов. Страница не найдена</title>
      </Helmet>

      <div className="error-page">
        <h1 className="error-heading">404 - Страница не найдена</h1>
        <p className="error-message">Извините, запрошенная страница не существует.</p>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </section>
  );
}

