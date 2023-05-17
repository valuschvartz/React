import React from 'react';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado (puedes cambiarlo según tus necesidades)

  return (
    <div>
      <i className="bi bi-cart2"></i>
      {itemCount > 0 && <span className="badge bg-danger">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
