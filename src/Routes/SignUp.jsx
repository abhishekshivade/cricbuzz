import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

// import TextField from "@mui/material/TextField";

function SignUp() {
  const initialUserState = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    userName: "",
    password: "",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState("");
  const [errMobileNumber, setErrMobileNumber] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const errStyle = { color:"red", display:"block"};

  const noErrStyle = {display:"none"}

  const dispatch = useDispatch();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    const { firstName, value } = e.target;
    setUser({ ...user, [firstName]: value });
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    const { lastName, value } = e.target;
    setUser({ ...user, [lastName]: value });
  };

  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
    const { mobileNumber, value } = e.target;
    setUser({ ...user, [mobileNumber]: value });
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
    const { userName, value } = e.target;
    setUser({ ...user, [userName]: value });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const { password, value } = e.target;
    setUser({ ...user, [password]: value });
  };

  // Do not consider this part below commented part
  //
  // const handleFirstName = (e) => {
  //   const { firstName, value } = e.target;
  //   setFirstName();
  //   setUser({ ...user, [firstName]: value });
  // };
  // const handleLastName = (e) => {
  //   const { lastName, value } = e.target;
  //   console.log("ln : "+lastName);
  //   console.log("value.ln : "+value);
  //   setLastName(value);
  //   setUser({ ...user, [lastName]: value });
  // };
  // const handleMobileNumber = (e) => {
  //   const { mobileNumber, value } = e.target;
  //   setUser({ ...user, [mobileNumber]: value });
  // };
  // const handlePassword = (e) => {
  //   const { password, value } = e.target;
  //   setUser({ ...user, [password]: value });
  // };
  // const handleUserName = (e) => {
  //   const { userName, value } = e.target;
  //   setUser({ ...user, [userName]: value });
  // };

  const saveUser = () => {
    const { firstName, lastName, mobileNumber, userName, password } = newUser;
    console.log("calling createUser in signUp component"); // console.log is for debugging
    dispatch(createUser(firstName, lastName, mobileNumber, userName, password))
      .then((data) => {
        console.log("createUser Call is in .then of signUp component"); // console.log is for debugging
        setUser({
          firstName: data.firstName,
          lastName: data.lastName,
          mobileNumber: data.mobileNumber,
          userName: data.userName,
          password: data.password,
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  const handleSignUp = (e) => {
    //
    //First Name Validation
    //
    if (firstName.length === 0) {
      console.log("First Name is rquired");
      setErrFirstName("First Name is rquired");
    } else if (firstName.trim().length < 3) {
      setErrFirstName("First Name should have at least 3 letters");
      console.log("First Name should have at least 3 letters");
    } else if (!/^[A-Z]{1,1}[a-z]+$/.test(firstName)) {
      setErrFirstName("First Name should only contain a-z & A-Z");
      console.log("Please enter valid First Name");
    }
    //
    //Last Name Validation
    //
    else if (lastName.length === 0) {
      console.log("Last Name is rquired");
      setErrLastName("Last Name is rquired");
    } else if (lastName.trim().length < 3) {
      setErrLastName("Last Name should have at least 3 letters");
      console.log("Last Name should have at least 3 letters");
    } else if (!/^[A-Z]{1,1}[a-z]+$/.test(lastName)) {
      console.log("Please enter valid Last Name");
      setErrLastName("Last Name should only contain a-z & A-Z");
    }
    //
    //Mobile Number Validation
    //
    else if (mobileNumber.length === 0) {
      console.log("Mobile Number is rquired");
      setErrMobileNumber("Mobile Number is rquired");
    } else if (mobileNumber.trim().length !== 10) {
      console.log("Mobile Nuber should have 10 digits");
      setErrMobileNumber("Mobile Nuber should have 10 digits");
    } else if (!/^[0-9]{1,10}$/.test(mobileNumber)) {
      console.log("Please enter valid Mobile Number");
      setErrMobileNumber("Please enter valid Mobile Number");
    }
    //
    //UserName Validation
    //
    else if (userName.length === 0) {
      console.log("UserName is rquired");
      setErrUserName("UserName is rquired");
    }
    // else if (!/^[a-z0-9._-]+@[a-z0-9-]+.[a-z]{2,3}}$/.test(userName))
    // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com\.in|com)$
    else if (!/^[a-z0-9]+@[a-z0-9-]+.[a-z]+$/.test(userName)) {
      // else if (!/^[a-z0-9]+@(?:[a-z0-9]+\.)+[a-z]+$/.test(userName))
      console.log("Please enter valid User Name");
      setErrUserName("Please enter valid User Name");
    }
    // else if (firstName.trim().length < 3)
    //   console.log("User Name should have at least 3 letters");
    //
    //Password Validation
    //
    else if (password.length === 0) {
      console.log("Password is rquired");
      setErrPassword("Password is rquired");
    } else if (password.trim().length < 3) {
      console.log("Password should have at least 8 char long");
      setErrPassword("Password should have at least 8 char long");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        // !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      console.log("Please enter valid Password");
      setErrPassword("Please enter valid Password");
    }
    //
    // Successfull registration
    //
    else {
      console.log(newUser);
      saveUser();
      console.log("Registred Successfully...!");

      // Do not consider this part below commented part
      //
      // setNewUser({[newUser.firstName]:firstName})
      // setNewUser({[newUser.lastName]:lastName})
      // setNewUser({[newUser.mobileNumber]:mobileNumber})
      // setNewUser({[newUser.userName]:userName})
      // setNewUser({[newUser.password]:password})
      // console.log(newUser);
    }

    e.preventDefault();
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You Submitted Successfully...!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        <div className="space-y-9 my-7">
          <h1 className="mx-auto w-fit font-bold text-3xl text-emerald-600">
            Create New Account
          </h1>

          <form className="space-y-4 flex flex-col mx-auto items-center">
            <div className="space-x-2 flex">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-36 border rounded-lg px-2 py-1"
                  onChange={handleFirstName}
                  value={firstName}
                  required
                />
                {errFirstName ? 
                  <div style={errStyle}>{errFirstName}</div>: <div style={{display:"none"}}></div>
                }
              </div>
              {/* <TextField
              {gotError ?{ helperText="First Name should have at least 3 letters" id}:{label="First Name" }}
              /> */}
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-36 border rounded-lg px-2 py-1"
                  onChange={handleLastName}
                  value={lastName}
                  required
                />
                {errLastName && (
                  <div style={{ color: "red" }}>{errLastName}</div>
                )}
              </div>
            </div>
            <div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-72 border rounded-lg px-2 py-1"
              onChange={handleMobileNumber}
              value={mobileNumber}
              required
            />
            {errMobileNumber && (
              <div style={{ color: "red" }}>{errMobileNumber}</div>
            )}
            </div>
            <div>
            <input
              type="email"
              placeholder="User Name"
              className="w-72 border rounded-lg px-2 py-1"
              onChange={handleUserName}
              value={userName}
              required
            />
            {errUserName && (
              <div style={{ color: "red" }}>{errUserName}</div>
            )}
            </div>
            <div>
            <input
              type="password"
              placeholder="Password"
              className="w-72 border rounded-lg px-2 py-1"
              onChange={handlePassword}
              value={password}
              required
            />
            {errPassword && (
              <div style={{ color: "red" }}>{errPassword}</div>
            )}
            </div>
            <input
              type="button"
              value="Sign Up"
              onClick={handleSignUp}
              className="w-24 border rounded-xl border-emerald-600 py-1 px-2 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:font-semibold mx-48"
            />
          </form>
        </div>
      )}
      ;
    </div>
  );
}

export default SignUp;
