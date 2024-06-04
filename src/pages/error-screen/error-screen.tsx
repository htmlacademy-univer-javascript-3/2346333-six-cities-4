import { Link } from 'react-router-dom';
import './error-screen.css';
import { AppRoute } from '../../const';

export function ErrorScreen(): JSX.Element {
  return (
    <div className='error-screen'>
      <h1>Sorry, server problems. Try again later</h1>
      <Link to={AppRoute.Root}>Restart!</Link>
    </div>
  );
}
