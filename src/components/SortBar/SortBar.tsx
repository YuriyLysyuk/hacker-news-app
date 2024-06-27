import type { ChangeEvent, FC, Dispatch } from 'react';

import classes from './SortBar.module.css';

import { SortBy } from '../../types';

interface ISortBar {
  sort: SortBy;
  onChangeSort: Dispatch<React.SetStateAction<SortBy>>;
}

const SortBar: FC<ISortBar> = ({ sort, onChangeSort }) => {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeSort(e.target.value as SortBy);
  };

  return (
    <aside className={classes.sortBar}>
      <select value={sort} className={classes.select} onChange={handleOnChange}>
        {Object.values(SortBy).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </aside>
  );
};

export default SortBar;
