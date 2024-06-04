import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortType } from '../const';
import { useAppSelector } from '../hooks';
import { getSelectedSortType } from '../store/app-data/selectors';
import { changeSortingType } from '../store/app-data/app-data';

export const SortOptions = (): JSX.Element => {
  const dispatch = useDispatch();
  const sortType = useAppSelector(getSelectedSortType);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SortType) => {
    dispatch(changeSortingType(option));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggle}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortType).map((option) => (
            <li
              key={option}
              className={`places__option ${sortType === option ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
