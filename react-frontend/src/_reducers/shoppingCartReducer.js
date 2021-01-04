const initialState = {
  items: [],
  subtotal: 0,
  count: 0
}
const itemReducer = (sum,item)=> {sum+=item}

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'ADD_TO_CART':
      return {
          ...state,
          items: [...state.items, action.product],
          subtotal: state.items.map( item => item.price ).reduce( itemReducer, 0),
          count: state.count + 1
      }
  case 'UPDATE_CART_ITEM':
      return {
        ...state,
        
      }
  default:
      return state;

  }
};
export default shoppingCartReducer;