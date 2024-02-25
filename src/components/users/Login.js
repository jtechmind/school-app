import React from "react";

function Login() {
  const handleSubmit = async () => {};
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-gray-700 font-medium p-5">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="Email"
          className=" border p-3 rounded-lg"
        ></input>
        <input
          type="password"
          name="userPassword"
          placeholder="Password"
          className=" border p-3 rounded-lg"
        ></input>
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase "
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
