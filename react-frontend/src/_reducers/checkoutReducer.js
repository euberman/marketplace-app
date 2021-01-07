const initialState = {
    shipped: false,
    user_id: '',
    payment: '',
    orderItems: null,
    total: 0,
    count: 0,
    address: {
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: 'US'
  } 
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETUP_CHECKOUT':{
            return {
                ...state,
                user_id:action.cartData.user_id,
                orderItems: action.cartData.orderItems,
                total: action.cartData.total,
                count: action.cartData.count,
                address: {
                    ...state.address,
                    firstname: action.cartData.firstname,
                    lastname: action.cartData.lastname,
                    country: 'US'
                } 
            }
        }
        case 'ADD_ADDRESS':{
            return {
                ...state,
                address: {
                    ...state.address,
                    firstName: action.address.firstName,
                    lastName: action.address.lastName,
                    addressLine1: action.address.addressLine1,
                    addressLine2: action.address.addressLine2,
                    city: action.address.city,
                    state: action.address.state,
                    zip: action.address.zip,
                    country: 'US'
                } 
            }
    }
        
        case 'ADD_PAYMENT':{
            return {
                ...state,
                payment: action.payment
            }
        }
        case 'CLEAR_CHECKOUT':{
            return {
                ...initialState
            }
        }
        default:
            return state;

    }
};
export default checkoutReducer;