import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlaceOrder = () => {

    const { getTotalCartAmount,token, food_list, cartItems, url, currency, deliveryCharge } = useContext(StoreContext)

    const [payment, setPayment] = useState("cod");
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const placeOrder = async (event) => {
        e.preventDefault();
        let orderItems = [];

        food_list.forEach((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = { ...item, quantity: cartItems[item._id] };
                orderItems.push(itemInfo);
            }
        });
     
        const orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + deliveryCharge,
        };

        try {
            if (payment === "stripe") {
                const response = await axios.post(`${url}/api/order/place`, orderData, {
                    headers: { token }
                });

                if (response.data.success) {
                    const { session_url } = response.data;
                    window.location.replace(session_url);
                } else {
                    console.error("Stripe order failed.");
                }
            } else {
                const response = await axios.post(`${url}/api/order/placecod`, orderData, {
                    headers: { token }
                });

                if (response.data.success) {
                    console.log("Order placed successfully:", response.data.message);
                    navigate("/myorders");
                    setCartItems({});
                } else {
                    console.error("COD order failed.");
                }
            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    useEffect(() => {
        if (!token) {
            console.warn("User not signed in. Redirecting to cart.");
            navigate('/cart');
        } else if (getTotalCartAmount() === 0) {
            console.warn("Empty cart. Redirecting to cart.");
            navigate('/cart');
        }
    }, [token]);

    return (
        <form onSubmit={PlaceOrder} className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                 <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                      <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{currency}{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>{currency}{getTotalCartAmount()===0?0:100}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                        <b>Total</b>
                        <b>{currency}{getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}</b>
                        </div>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                <div className="payment">
                    <h2>Payment Method</h2>
                    <div onClick={() => setPayment("cod")} className="payment-option">
                        <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="COD" />
                        <p>COD ( Cash on delivery )</p>
                    </div>
                    <div onClick={() => setPayment("stripe")} className="payment-option">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="Stripe" />
                        <p>Stripe ( Credit / Debit )</p>
                    </div>
                </div>
                <button className='place-order-submit' type='submit'>
                    {payment === "cod" ? "Place Order" : "Proceed To Payment"}
                </button>
            </div>
        </form>
    );
};

export default PlaceOrder;
