const initialState = {
    isLoggedIn: false,
    currentUser: {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    } 
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null
            }
        case 'LOGIN':
            state = action.user
            return {
                ...state, 
                isLoggedIn: true,
                currentUser: action.user
            }
        case 'SIGN_UP':
            return {
                ...state,
                isLoggedIn: true,
                currentUser: [...state.currentUser, action.user]
            }
        default:
            return state;
  
    }
};
export default userReducer;