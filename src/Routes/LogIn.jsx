import React, { useState } from "react";

function LogIn() {
  const [userName, setUserName] = useState("");
  const[password,setPassword]=useState("");

  const handleUserName = e=> setUserName(e.target.value);
  const handlePassword=e=>setPassword(e.target.value);
  const handleLogIn = e=>{

  }

  return (
    <div className="space-y-9 my-9">
      <h1 className="mx-auto w-fit font-bold text-3xl text-emerald-600">
        Log In
      </h1>
      <form className="flex flex-col space-y-4 mx-auto items-center">
        <input
          type="email"
          placeholder="User Name"
          className="w-72 border rounded-lg px-2 py-1"
          onChange={handleUserName}
          value={userName}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-72 border rounded-lg px-2 py-1"
          onChange={handlePassword}
          value={password}
          required
        />

        <input
          type="button"
          value="Log In"
          onClick={handleLogIn}
          className="w-24 border rounded-xl border-emerald-600 py-1 px-2 text-emerald-600 hover:bg-emeerald-600 hover:text-white hover:font-semibold mx-48"
        />
      </form>
    </div>
  );
}

export default LogIn;
