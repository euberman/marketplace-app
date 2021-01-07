const initialState = {
  address: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country
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
              isLoggedIn: true,
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
      case 'UPDATE_CURRENT_USER':{
          return {
              ...state,
              isLoggedIn: true,
              currentUser: action.user
          }
      }
      default:
          return state;

  }
};
export default userReducer;