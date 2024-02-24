import React from "react";

function SignUp() {
  const handleSubmit = () => {};
  return (
    <div className="p-3 max-w-lg mx-auto">
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
          type="password"
          name="userPassword"
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

export default SignUp;
