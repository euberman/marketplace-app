export const getProducts = (data) => {
  return {
      type: 'GET_PRODUCTS',
      products: data
  }
}
export const changeCurrentProduct = (product) => {
  return {
      type: 'CHANGE_CURRENT_PRODUCT',
      product: product
  }
}