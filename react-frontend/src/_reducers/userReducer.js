const initialState = {
    isLoggedIn: false,
    allUsers: [],
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
            // state = action.user
            let trueUser = state.allUsers.find(u => u.email === action.user.email && u.password === action.user.password)
            debugger
            if (trueUser){
                return {
                    ...state, 
                    isLoggedIn: true,
                    currentUser: trueUser
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case 'SIGN_UP':{
            return {
                ...state,
                isLoggedIn: true,
                currentUser: [...state.currentUser, action.user]
            }
        }
        default:
            return state;
  
    }
};
export default userReducer;