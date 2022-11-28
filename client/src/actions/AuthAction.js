import * as AuthApi from "../api/AuthRequest";

//For Company
export const logInCompany = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.logInCompany(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });

  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });

  }
};

export const signUpCompany = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.signUpCompany(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });

  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });

  }
};

//For Seller
export const logInSeller = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.logInSaller(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });

  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });

  }
};

export const signUpSeller = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await AuthApi.signUpSaller(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });

  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });

  }
};