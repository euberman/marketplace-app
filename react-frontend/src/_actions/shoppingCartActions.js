import {ADD_TO_CART, UPDATE_CART_ITEM, INCREMENT_QTY, DECREMENT_QTY, UPDATE_CART_SUBTOTAL, REMOVE_CART_ITEM, TOGGLE_MODAL} from '../types'


export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().shoppingCart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        alreadyExists = true;
        item.qty++;
        item.subTotal += item.price;
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...product, count: 1 });
    }
    dispatch({ type: 'ADD_TO_CART', cartItems: cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  debugger
    const updatedCartItems = getState().shoppingCart.items.slice().filter((item) => item.id !== product.id);
    dispatch({ type: 'REMOVE_FROM_CART', cartItems: updatedCartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const incrementCartItemQty = (cartItem) => (dispatch, getState) => {
    cartItem.qty++
    
}
