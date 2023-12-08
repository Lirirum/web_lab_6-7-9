export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });

  export const openCartMenu = () => ({
    type: 'OPEN_CART_MENU',
    payload: true,
  });

  export const closeCartMenu = () => ({
    type: 'CLOSE_CART_MENU',
    payload: false,
  });

  export const openLoginMenu = () => ({
    type: 'OPEN_LOGIN_MENU',
    payload: true,
  });

  
  export const closeLoginMenu = () => ({
    type: 'CLOSE_LOGIN_MENU',
    payload: false,
  });