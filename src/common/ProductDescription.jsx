import React from 'react';
const ProductDescription = ({
    description,
    isOpen,
}) => {
  console.log('isOpen', isOpen);
  console.log('description', description);
    const popupClass = `${isOpen ? 'uk-modal uk-open' : ''}`;
    return (
      <div id="modal-close-outside" uk-modal="true" className={popupClass}>
        <div className="uk-modal-dialog uk-modal-body">
        <button className="uk-modal-close-outside" type="button" uk-close="true"></button>
        <h2 className="uk-modal-title">Outside</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
