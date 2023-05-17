import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-3">{greeting}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
