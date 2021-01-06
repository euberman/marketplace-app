

export const getLocalCurrentUser = () => {
  const result = localStorage.getItem('currentUser')
  const currentUser = JSON.parse(result)
  if (currentUser) {
    return currentUser
  } else {
    return false
  }
};

export const setLocalCurrentUser = (currentUser) => {
  const user = JSON.stringify(currentUser)
  localStorage.setItem('currentUser', user)
};

export const setLocalShoppingCart = (cart) => {
  const shoppingCart = JSON.stringify(cart)
  localStorage.setItem('shoppingCart', shoppingCart)
};

export const getLocalShoppingCart = () => {
  const items = JSON.parse(localStorage.getItem('cartItems'))
  const subTotal = JSON.parse(localStorage.getItem('cartSubTotal'))
  const count = items.length

  if (items) {
    return {
      items,
      subTotal,
      count
    }
  } else {
    return false
  }
};