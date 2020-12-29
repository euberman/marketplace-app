//I manage the properties.
const initialState = {
    products: [],
    currentProduct: null
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'GET_PRODUCTS':
        return {
            ...state,
            products: action.products
        }

    case 'CHANGE_CURRENT_PRODUCT':
        return {
            ...state,
            currentProduct: action.product
        }
  
    default:
        return state;
  
    }
  };
export default productReducer;