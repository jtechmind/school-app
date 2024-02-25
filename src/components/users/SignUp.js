import React from "react";

function SignUp() {
  const handleSubmit = () => {};
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-gray-700 font-medium p-5">New User Registration</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className=" border p-3 rounded-lg"
        ></input>
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          className=" border p-3 rounded-lg"
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className=" border p-3 rounded-lg"
        ></input>
        <input
          type="email"
          name="userEmail"
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
          Registration
        </button>
      </form>
    </div>
  );
}

export default SignUp;
