import * as Users from "./type";
import Services from "../Services";

export const createUser = (firstName, lastName,mobileNumber,userName, password) => async (dispatch) => {
  try {
    console.log("creating new user");
    const user = {firstName,lastName,mobileNumber,userName,password}
    const res = await Services.create(user,console.log("services.create calling")); // console.log is for debugging
console.log("calling dispatch in createUser"); // console.log is for debugging
    dispatch({
      type: Users.CREATE_USER,
      payload: res.data,
    });

    console.log("new user created");

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const listUsers = () => async (dispatch)=>{
  try {
    const res = await Services.getAll();

    dispatch({
      type: Users.GET_USERS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const findByUserName = (userName)=> async (dispatch)=>{
  try {
    const res = await Services.findByUserName(userName);

    dispatch({
      type: Users.FIND_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
}