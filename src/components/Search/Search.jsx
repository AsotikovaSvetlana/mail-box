import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { filterMails } from '../../store/reducers/mailsListSlice';
import { showSearch, changeInputValue } from '../../store/reducers/searchSlice';

const Search = () => {
  const { isSearchOpen, query } = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterMails(query));
  }, [dispatch, query])

  const handleSearchClick = () => {
    dispatch(showSearch());
  }

  const handleSearchInput = (e) => {
    dispatch(changeInputValue(e.target.value));
  }

  return (
    <div className={styles.search}>
      <div className={`${styles.search__input} ${isSearchOpen ? `${styles.open}` : ""}`}>
        <label htmlFor="search"></label>
        <input id="search" type="text" onChange={handleSearchInput} value={query} />
      </div>
      <div className={styles.search__icon} onClick={handleSearchClick}>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search;
