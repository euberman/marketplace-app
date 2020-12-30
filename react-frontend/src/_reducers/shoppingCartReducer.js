const initialState = {
  shoppingCartItems: []
}
const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'CHANGE_CURRENT_PRODUCT':
      return {
          ...state,
          currentProduct: action.product
      }

  case 'ADD_TO_CART':
      return {
          ...state,
          shoppingCartItems: [...state.shoppingCartItems, action.product]
      }

  default:
      return state;

  }
};
export default shoppingCartReducer;