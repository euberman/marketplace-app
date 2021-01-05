
const itemReducer = (sum,item)=> {sum+=item}

var cachedShoppingCart = localStorage;
const initialState = {
  items: [],
  subtotal: 0,
  count: 0,
  showModal: false
}

const cachedState = {
  items: [],
  subtotal: 0,
  count: 0,
  showModal: false
}

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'ADD_TO_CART':
      return {
          ...state,
          items: [...state.items, action.product],
          subtotal: state.items.map( item => item.price ).reduce( itemReducer, 0),
          count: state.items.length
      }
  case 'UPDATE_CART_ITEM':
      return {
        ...state,
        items: state.items.map(item => {
            if (item.product_id === action.product.product_id) {
              return action.product
            } else {
              return item
            }
        }),
        subtotal: state.items.map( item => item.price ).reduce( itemReducer, 0)
      }
  case 'UPDATE_CART_SUBTOTAL':
      return {
          ...state,
          subtotal: state.items.map( item => item.price ).reduce( itemReducer, 0)
      }
  case 'DELETE_CART_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.id)
        }
  case 'TOGGLE_MODAL':
        return {
          ...state,
          showModal: !state.showModal
        }
  default:
      return state;

  }
};
export default shoppingCartReducer;