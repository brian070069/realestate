import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const parsedFormData = JSON.stringify(formData);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: parsedFormData,
      });

      const data = await response.json();

      if (data.success == false) {
        setIsLoading(false);
        setError(data.message);
        return;
      }

      setIsLoading(false);
      setError("");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4">
      <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          isLoading={isLoading}
          className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {isLoading ? "submitting..." : "sign in"}
        </button>
      </form>
      <div className="flex justify-center gap-2 mt-5">
        <p>Don't have an Account?</p>
        <Link to="/signup">
          <span className="text-blue-700">sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignIn;
