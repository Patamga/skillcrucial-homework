const UPDATE_QUANTTY = 'UPDATE_QUANTTY'

export default (basket = {}, action) => {
  switch (action.type) {
    case UPDATE_QUANTTY: {
      const productId = action.id
      let productQuantity = action.qty
      const productPrice = action.price

      if (productId in basket) {
        productQuantity += basket[productId].qty
      }

      if (productQuantity < 1) {
        const {
          // eslint-disable-next-line
          [productId]: _,
          ...result
        } = basket

        return result
      }

      const result = {
        ...basket,
        [productId]: { qty: productQuantity, price: productPrice }
      }

      return result
    }
    default:
      return basket
  }
}

export function addQuantity(id, price) {
  const qty = 1
  return { type: UPDATE_QUANTTY, id, qty, price }
}

export function removeQuantity(id, price) {
  const qty = -1
  return { type: UPDATE_QUANTTY, id, qty, price }
}
