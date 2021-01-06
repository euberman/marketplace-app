//I manage the products.
const initialState = {
    allProducts: [],
    currentProduct: null,
    sortChar: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'GET_PRODUCTS':
        return {
            ...state,
            allProducts: action.products
        }

    case 'CHANGE_CURRENT_PRODUCT':
        return {
            ...state,
            currentProduct: action.product
        }

    case 'SORT_PRODUCTS':
        return {
            ...state,
            sortChar: action.sortChar
        }
  
    default:
        return state;
  
    }
  };
export default productReducer;