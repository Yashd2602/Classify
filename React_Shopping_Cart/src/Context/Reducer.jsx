export const cartReducer=(state,action) =>{
    switch (action.type){
    case "ADD_TO_CART":
        const existingItem = state.cart.find((c)=>c.id === action.payload.id);
        if(!existingItem){
        return {...state,cart:[...state.cart,{...action.payload,qty:1}]};
    }else{return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c
        ),}}
    
    case "REMOVE_FROM_CART":
        return {...state,cart: state.cart.filter((c)=>c.id !== action.payload.id)};
        case "ADD_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c
        ),
      };
        case "SUBTRACT_CART_QTY":
        return {...state,cart: state.cart.map((c)=>c.id === action.payload.id ?{ ...c,qty:c.qty-1}:c)};
        default:
            return state;
    }
}
