
const itemReducer = (sum,item)=> {sum+=item}

// var cachedShoppingCart = localStorage;
const initialState = {
  items: [],
  subTotal: 0.00,
  count: 0,
  showModal: false
}

// const cachedState = {
//   items: json.parse(localStorage.get('cartItems')),
//   subTotal: 0,
//   count: 0,
//   showModal: false
// }

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.product],
        //subTotal: state.subTotal + parseFloat(action.product.subTotal),
        subTotal: parseFloat(action.subTotal),
        count: state.count += 1
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
        subTotal: parseFloat(action.subTotal),
        count: state.count += 1
      }
  case 'UPDATE_CART_SUBTOTAL':
      return {
          ...state,
          subTotal: action.subTotal
          // subTotal: state.items.map( item => item.subTotal ).reduce( itemReducer, 0)
      }
  case 'DELETE_CART_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.product_id !== action.product_id)
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