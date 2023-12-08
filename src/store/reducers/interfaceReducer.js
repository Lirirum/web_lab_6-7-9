import products from "../../Product";


const initialState = {
    loginVisible:false
  };
  
  const interfaceReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'OPEN_LOGIN_MENU':    
          
        return {
          ...state,
          loginVisible: action.payload
    
        };
        case 'CLOSE_LOGIN_MENU':              
        return {
          ...state,
          loginVisible: action.payload
    
        };
  
      default:
        return state;
    }
  };
  
  export default interfaceReducer;