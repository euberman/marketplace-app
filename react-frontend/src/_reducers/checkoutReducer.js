const initialState = {
    shipped: false,
    user_id: '',
    payment: '',
    orderItems: null,
    total: 0,
    address: {
        firstName: '',
        lastName: '',
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
                user_id:action.user.id,
                orderItems: action.orderItems,
                total: action.total,
                address: {
                    firstName: action.user.firstName,
                    lastName: action.user.lastName,
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