import { City } from '../types/coordinate';
import { cities } from '../const';


type CityProps = {
    selectedCity: City;
    changeCity: (city: City) => void;
  }

export function CityList({selectedCity, changeCity}: CityProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.title} onClick={() => changeCity(city)}>
          <a className={`locations__item-link tabs__item ${(city === selectedCity) ? 'tabs__item--active' : ''}`} >
            <span>{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
