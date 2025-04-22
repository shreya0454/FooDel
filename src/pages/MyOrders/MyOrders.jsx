import React, { useContext } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const { currency } = useContext(StoreContext);

  // Dummy data to simulate frontend rendering
  const data = [
    {
      items: [
        { name: 'Product 1', quantity: 2 },
        { name: 'Product 2', quantity: 1 },
      ],
      amount: 100,
      status: 'Shipped',
    },
    {
      items: [
        { name: 'Product 3', quantity: 1 },
      ],
      amount: 50,
      status: 'Processing',
    },
  ];

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <p>{order.items.map((item, index) =>
                index === order.items.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              )}</p>
              <p>Rs.{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              <button>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
