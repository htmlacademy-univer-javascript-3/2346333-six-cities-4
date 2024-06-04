import { cities } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeCity } from '../store/app-data/app-data';
import { getSelectedCity } from '../store/app-data/selectors';


export function CityList(): JSX.Element {
  const currentCity = useAppSelector(getSelectedCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name} onClick={(event) => {
          event.preventDefault();
          dispatch(changeCity(city));
        }}
        >
          <a className={`locations__item-link tabs__item ${(city === currentCity) ? 'tabs__item--active' : ''}`} >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
