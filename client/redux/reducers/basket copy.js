const UPDATE_QUANTTY = 'UPDATE_QUANTTY'

export default (basket = {}, action) => {
  switch (action.type) {
    case UPDATE_QUANTTY: {
      const productId = action.id
      let productQuantity = action.qty

      if (productId in basket) {
        productQuantity += basket[productId]
      }

      if (productQuantity < 1) {
        const  {
          // eslint-disable-next-line
          [productId]: _,
          ...result
        } = basket

        return result
      }
      
      const result = {
        ...basket,
        [productId]: productQuantity
      }

      return result
    }
    default:
      return basket
  }
}

export function addQuantity(id) {
  const qty = 1
  return { type: UPDATE_QUANTTY, id, qty }
}

export function removeQuantity(id) {
  const qty = -1
  return { type: UPDATE_QUANTTY, id, qty }
}
