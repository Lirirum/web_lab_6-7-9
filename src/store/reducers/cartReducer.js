
const initialState = {
    cartItems: [],
    cartItemsCount:0,
    cartItemsPrice:0,
    cartMenu:false,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        console.log(state.cartItems)
        const newItem = action.payload;
        const isItemInCart = state.cartItems.some(item => item.id === newItem.id);
        if (!isItemInCart) {

          const newCartItemsPrice = state.cartItems.reduce(
            (totalPrice, item) => totalPrice + item.price,
            action.payload.price
          );



        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          cartItemsCount: state.cartItems.length,
          cartItemsPrice:newCartItemsPrice,
        }}
      case 'REMOVE_FROM_CART':

        const newCartItemsPrice = state.cartItems.filter(item => item.id !== action.payload).reduce(
          (totalPrice, item) => totalPrice + item.price,0
         
        );

     
 

        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
          cartItemsPrice:newCartItemsPrice,
        };

   
          case 'OPEN_CART_MENU':
            const cartItems =  state.cartItems;     
            if(cartItems.length>0){
       
            return {
              ...state,
              cartMenu: true
        
            };}
          case 'CLOSE_CART_MENU':
            return {
              ...state,
              cartMenu: false
            };
       


      default:
        return state;
    }
  };
  
  export default cartReducer;