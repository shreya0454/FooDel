import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem'; 

const FoodDisplay = ({ category }) => {
  const { food_list = [] } = useContext(StoreContext); // Ensure food_list is never undefined
  
  // Filter food items based on the selected category
  const filteredFoodList = food_list.filter(item => category === "All" || category === item.category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      {filteredFoodList.length > 0 ? (
        <div className="food-display-list">
          {filteredFoodList.map(item => ( // ✅ Directly use filteredFoodList
            <FoodItem 
              key={item._id}  // Use _id instead of index for better list rendering
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <p className="no-dishes">No dishes found for this category.</p>
      )}
    </div>
  );
};

export default FoodDisplay;
