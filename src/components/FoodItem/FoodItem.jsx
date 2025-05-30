import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);  

  return (
    <div className='food-item'>  
       <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs.{price}</p>
      </div>

      {itemCount === 0 ? (
        <img 
          className='add' 
          onClick={() => setItemCount(prev => prev + 1)} 
          src={assets.add_icon_white} 
          alt="Add Item"
        />
      ) : (
        <div className='food-item-counter'>   
          <img 
            src={assets.remove_icon_red} 
            alt="Remove Item" 
            onClick={() => setItemCount(prev => Math.max(prev - 1, 0))} 
          />
          <p>{itemCount}</p>
          <img 
            src={assets.add_icon_white}  
            alt="Add More" 
            onClick={() => setItemCount(prev => prev + 1)}
          />
        </div>
      )}
    </div>
  );
};

export default FoodItem;
