export const initialState={
cart=[{dmsc}]
}

function reducer(state,action) {


  switch (action.type) {

    // ADD ITEM TO CART
    case 'ADD_TO_CART':
      return {
        ...state,
        cart:[...state.cart,action.item], 
      };

      // REMOVE ITEM FROM CART
      
  
    default:
      return state;
  }

}

export default reducer
