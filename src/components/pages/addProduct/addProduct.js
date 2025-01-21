

import React, { useState } from 'react';

const AddProduct = () => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const [baseDeDatos, setBaseDeDatos] = useState([
    {
      "id": 1,
      "name": "Papel higiénico",
      "price": 30.50
    },
    {
      "id": 2,
      "name": "Detergente líquido",
      "price": 50.00
    },
    {
      "id": 3,
      "name": "Toallas de papel",
      "price": 20.00
    },
  ]);

  const addProductToDatabase = () => {
    if (productName && productPrice ) {
      const newProduct = {
        id: baseDeDatos.length + 1,
        name: productName,
        price: parseFloat(productPrice),
      };


      setBaseDeDatos([...baseDeDatos, newProduct]);

      setProductName('');
      setProductPrice('');
    } else {
      alert('Por favor, complete todos los campos');
    }
  };


  
  return (
    <div>

      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del producto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="number"
              className="form-control"
              placeholder="Precio"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
       
          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={addProductToDatabase}
            >
              Agregar Producto
            </button>
          </div>
        </div>
      </div>

      <div>

        <div className="accordion" id="accordionExample">
          {baseDeDatos.map((product, index) => (
            <div className="accordion-item" key={product.id}>
              <h2 className="accordion-header" id={`heading${product.id}`}>
                <button
                  className={`accordion-button ${index === 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${product.id}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${product.id}`}
                >
                  {product.name}
                </button>
              </h2>
              <div
                id={`collapse${product.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${product.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>ID:</strong> {product.id}
                  <br />
                  <strong>Price:</strong> ${product.price}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProduct