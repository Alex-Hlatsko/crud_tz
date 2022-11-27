import * as ProductsApi from "../api/ProductsRequests";

export const getProducts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await ProductsApi.getProducts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const postProducts = (formData) => async (dispatch) => {
  dispatch({ type: "POST_START" });
  try {
    const { data } = await ProductsApi.postProducts(formData);
    dispatch({ type: "POST_SUCCESS", data: data });

  } catch (error) {
    console.log(error);
    dispatch({ type: "POST_FAIL" });

  }

}