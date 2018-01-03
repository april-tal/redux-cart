import { combineReducers } from 'redux'

const addedIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if(state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
    default:
      return state
  }
}

const quantityById = (state = {}, action) => {
  console.log(action);
  const {productId} = action
  switch (action.type) {
    case 'ADD_TO_CART':
    return {
      ...state,
      [productId]:(state[productId] || 0) + 1
    }
    default:
      return state
  }
}

export default combineReducers({
  addedIds,
  quantityById
})
