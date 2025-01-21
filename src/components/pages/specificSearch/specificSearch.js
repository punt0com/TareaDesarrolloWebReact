 
 const SpecificSearch = () => {

    const baseDeDatos = [
           
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

export default SpecificSearch