import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto px-4">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="username"
          placeholder="username"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="email"
          placeholder="email"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="password"
          placeholder="password"
        />
        <button className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex justify-center gap-2 mt-5">
        <p>Already have an Account?</p>
        <Link to="/signin">
          <span className="text-blue-700">sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
