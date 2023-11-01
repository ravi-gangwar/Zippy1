export const getAllfoodReducer = (state = { foods: []}, action) => {
    switch (action.type) {
      case "GET_FOODS_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "GET_FOODS_SUCCESS":
        return {
          ...state,
          foods: action.payload,
          loading: false,
          error: null,
        };
      case "GET_FOODS_FAIL":
        return {
          ...state,
          error: action.paylaod,
          loading: false,
        };
      default:
        return state;
    }
  };
  