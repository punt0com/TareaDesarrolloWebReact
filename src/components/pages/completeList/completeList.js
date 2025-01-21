import React from 'react';


const CompleteList = () => {

const baseDeDatos = [
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
    {
      "id": 4,
      "name": "Shampoo",
      "price": 40.75
    },
    {
      "id": 5,
      "name": "Cepillo de dientes",
      "price": 15.00
    },
    {
      "id": 6,
      "name": "Pasta dental",
      "price": 18.30
    },
    {
      "id": 7,
      "name": "Desinfectante de manos",
      "price": 25.60
    },
    {
      "id": 8,
      "name": "Jabón líquido",
      "price": 28.50
    },
    {
      "id": 9,
      "name": "Esponja de cocina",
      "price": 5.20
    },
    {
      "id": 10,
      "name": "Bolsa de basura",
      "price": 10.00
    },
    {
        "id": 10,
        "name": "Bolsa de basura",
        "price": 10.00
      },
      {
        "id": 10,
        "name": "Bolsa de basura",
        "price": 10.00
      },
      {
        "id": 10,
        "name": "Bolsa de basura",
        "price": 10.00
      },
      {
        "id": 10,
        "name": "Bolsa de basura",
        "price": 10.00
      },
    
  ]

  return (
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
  );
};

export default CompleteList;