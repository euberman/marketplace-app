const initialState = {
    isLoggedIn: false,
    allUsers: [],
    currentUser: {
        id: null,
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    } 
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':{
            return {
                ...state,
                allUsers: action.users
            }
        }
        case 'LOGOUT':{
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null
            }
        }
        case 'LOGIN':{
            return {
                ...state,
                currentUser: action.user
            }
        }
        case 'SIGN_UP':{
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.user
                // allUsers: [...state.allUsers, action.user]
            }
        }
        default:
            return state;
  
    }
};
export default userReducer;