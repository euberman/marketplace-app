const initialState = {
    allOrders: [],
    currentOrder: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'GET_ORDERS':
        return {
            ...state,
            allOrders: action.orders
        }

    case 'ADD_NEW_ORDER':
        return {
            ...state,
            allOrders: [...state.allOrders, action.order]
        }

    // case 'ADD_TO_CURRENT_ORDER':
    //     return {
    //         ...state,
    //         currentOrder: action.order
    //     }
  
    default:
        return state;
  
    }
  };
export default orderReducer;