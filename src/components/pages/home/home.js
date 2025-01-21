import React from 'react';
import styles from './home.module.css';
import useButtonActions from '../../../hooks/useBTNactions';

const Home = () => {
  const { onCompleteList, onSpecificSearch, onAddProduct, onOrderStock } = useButtonActions();

  return (
    <div>
      <h1>Bienvenido a tu buscador de productos </h1>
      <div className={`container ${styles.smallPadding}`}>
        <div className="row">
          <div className="col-sm-3">
            <button type="button" className="btn btn-primary"
              onClick={onCompleteList}>Lista completa </button>
          </div>
          <div className="col-sm-3">

            <button type="button" className="btn btn-primary"
              onClick={onSpecificSearch}> buscador especifico </button>
          </div>
          <div className="col-sm-3">

            <button type="button" className="btn btn-primary"
              onClick={onAddProduct}>Agregar productos</button>
          </div>
          <div className="col-sm-3">

            <button type="button" className="btn btn-primary"
              onClick={onOrderStock}>Pedir Stock </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;