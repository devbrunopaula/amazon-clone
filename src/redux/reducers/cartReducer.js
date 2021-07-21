import * as actions from "../types/cartTypes"

const initalState = {
  cart: [
    {
      id: "",
      title: "",
      price: "",
      image: "",
      ratting: "",
    },
  ],
  user: "Bruno Paula",
}

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.item],
      }

    default:
      return state
  }
}

export default cartReducer
