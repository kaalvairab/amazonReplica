export const initialState ={
  cart : []
}

export const getCartTotal = (cart)=> cart?.reduce((amount,item)=>item.price+amount,0)


function reducer(state,action){

  console.log(action)
  switch (action.type) {

    case 'ADD_TO_CART':
      // ADD ITEMS TO CART
      return {
        ...state,
        cart:[...state.cart,action.item], 
      };
      
    
    case 'REMOVE_FROM_CART':
      // REMOVE ITEMS FROM CART
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem)=>cartItem.id===action.id);
        console.log(index)
      if (index<=0){
        newCart.splice(index,1)
      }
      else{
        
        console.warn("item not available vanya")
      }

    return {
      ...state,
      cart:newCart,
    };
  
    default:
      break;
  }
}

export default reducer