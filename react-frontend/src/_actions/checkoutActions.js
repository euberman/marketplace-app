import {SETUP_CHECKOUT, ADD_ADDRESS, ADD_PAYMENT, CLEAR_CHECKOUT, ADD_NEW_ORDER} from '../types'
import { useHistory } from "react-router-dom";



export const setupCheckout = (shoppingCartItems) => (dispatch, getState) => {
  console.log('Checkout btn has been clicked')

  const shoppingCart = getState().shoppingCart
  const currentUser = getState().user.currentUser
  //const history = useHistory();
  dispatch({
    type: SETUP_CHECKOUT,
    user: { 
      id: currentUser.id || 2,
      firstName:currentUser.firstName || "Eric",
      lastName:currentUser.lastName || "Uberman"
    },
    orderItems: shoppingCartItems,
    total: shoppingCart.subTotal,
    count: shoppingCart.count
  });
  // history.push('dashboard/checkout')
};

// export const removeFromCart = (product) => (dispatch, getState) => {
    
//     dispatch({ type: REMOVE_FROM_CART, cartItems: updatedCartItems });
    
// };

export const createOrder = (order) => (dispatch) => {
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ADD_NEW_ORDER, payload: data });
        localStorage.clear("cartItems");
        localStorage.clear("subTotal")
        localStorage.clear("count")
        dispatch({ type: CLEAR_CHECKOUT });
      });
};
export const showDashboard = () => (dispatch) => {
  const history = useHistory();
  history.push('dashboard')
};
export const clearCheckout = () => (dispatch) => {
    dispatch({ type: CLEAR_CHECKOUT });
};
