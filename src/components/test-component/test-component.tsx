import React from "react";

const TestComponent = () => {
  const products = [
    {
      name: "Tide Powder",
      image: "frontend/src/components/img/Tide_Logo_RGB_2014.png", 
      description:
        "Washing powder. Tide is an American brand of laundry. Washing powder. Tide is an American brand of laundry",
    }
  ];

  return (
    <div className="product-container">
        <h1>E Commerce</h1>
      {Array(2).fill(null).map((_, index) => (
        <div key={index} className="product-list">
          {products.map((product) => (
            <div key={product.name} className="product">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
