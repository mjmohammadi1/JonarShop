import { loginFailure, loginStart, loginSuccess } from "./slices/user";
import { publicRequest } from "../components/utils/api";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(result.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
