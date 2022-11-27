const ProductReducer = (
    state = { products: null, loading: false, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      // belongs to PostShare.jsx
      case "UPLOAD_START":
        return { ...state, error: false, uploading: true };
      case "UPLOAD_SUCCESS":
        return { ...state, products: [action.data, ...state.products], uploading: false, error: false };
      case "UPLOAD_FAIL":
        return { ...state, uploading: false, error: true };
      // belongs to Posts.jsx
      case "RETREIVING_START":
        return { ...state, loading: true, error: false };
      case "RETREIVING_SUCCESS":
        return { ...state, products: action.data, loading: false, error: false };
      case "RETREIVING_FAIL":
        return { ...state, loading: false, error: true };
      case "POST_START":
        return { ...state, loading: true, error: false };
      case "POST_SUCCESS":
        return { ...state, products: [action.data, ...state.products], loading: false, error: false };
      case "POST_FAIL":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  
  export default ProductReducer;