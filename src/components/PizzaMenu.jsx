import React, { useState } from 'react';
import DATA from '../data.json';
import { arrayOfPizzas } from '../common/common';
const PizzaMenu = () =>{
  const [cart, setCart] = useState([]);
  const handleCart = (e, title, total, short_desc, price, id) => {
    e.preventDefault();
    let tempTotal = parseInt(total, 10);
    const pizzaDetails = arrayOfPizzas(title, short_desc, tempTotal, price, id, cart);
    setCart(pizzaDetails);
  };
  return (
  <>
  <div style={{backgroundColor:"#f8f8f8", fontSize:""}} className="uk-text-right">
    <a className="uk-link-text" style={{marginRight:"20px"}}>Login</a>
    <a className="uk-link-heading">
      <span uk-icon="icon: cart; ratio: 2" style={{marginRight:"5px"}}>
      </span>
    </a>
  </div>
  <div className="uk-section uk-section-muted">
    <div className="uk-container uk-container-small">
      {
        DATA.map((obj, key)=>{
          const {
            title,
            url,
            description,
            short_description,
            price,
            product_id,
          } = obj;
          const img_src = `../src/images/${url}`;
          const priceWithSign = `$${price}`;
          return (
            <>
              <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                <div className="uk-card-media-left uk-cover-container">
                  <img src={img_src} alt="" uk-cover="true" />
                  <canvas width="600" height="400"></canvas>
                </div>
                <div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title"><a className="uk-link-heading" href="#">{title}</a></h3>
                    <p>{short_description}</p>
                    <h3 className="uk-card-title">{priceWithSign}</h3>
                    <div>
                      <span style={{marginRight:"5px"}}>Quantity: </span>
                      <span>
                        <input className="uk-input uk-form-small uk-form-width-xsmall" type="text" placeholder="" style={{textAlign: "center"}} defaultValue="0" id={`numOfPizzas_${key}`} />
                      </span>
                      <div>
                        <button className="uk-button uk-button-danger" style={{marginTop:"5px"}} onClick={(e)=>{handleCart(e, title, document.getElementById(`numOfPizzas_${key}`).value, short_description, price, product_id)}}>
                          Add To Cart
                          <span uk-icon="cart" style={{marginLeft: "4px"}}></span>
                        </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      }
    </div>
  </div></>
)
}

export default PizzaMenu;
