import React from 'react';
import styles from './myHeader.module.css';
import useButtonActions from '../../../hooks/useBTNactions';

const Header = () => {
  const { returnHome } = useButtonActions();
  return (
    <header className={`d-flex justify-content-between align-items-center ${styles.header}`}>
      <h1 className={styles.header__title}>Bienvenido</h1>
      <button type="button" className={`btn btn-primary ${styles.header__button}`} onClick={returnHome}>
        Home
      </button>
    </header>
  );
};

export default Header;