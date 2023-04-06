const products_reducer = (state, action) => {
  switch (action.type) {
    case "getProductsBegin":
      return { ...state, productsLoading: true };
    case "getProductSuccess":
      return {
        ...state,
        productsLoading: false,
        products: action.payload
      };
    case "getProductError":
      return { ...state, productsLoading: false, productsError: true };
    // single product
    case "getSinglepRoductBegin":
      return {
        ...state,
        singleProductLoading: true,
        singleProductError: false,
      };
    case "getSingleProductSuccess":
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    case "getSingleProductError":
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };
    default:
      return state;
  }
};

export default products_reducer;
