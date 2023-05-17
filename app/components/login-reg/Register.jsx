'use client';
import axios from 'axios';
import { useState } from 'react';

const initialForm = {
  email: '',
  password: '',
  confirmPassword: '',
};

function Register({ setIsLogin, success }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post('/api/auth/signup', form);
      console.log(user);
      setErrors(null);
      setForm(initialForm);
      setIsLogin(true);
      success();
    } catch (err) {
      console.log(err);
      setErrors(err?.response?.data?.errors);
    }
  };

  return (
    <div className="mt-6 rounded-lg bg-gray-800 overflow-hidden w-full sm:w-2/3 lg:w-1/2">
      <header className="border-b border-gray-900 p-4 text-xl">Register</header>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="block border-0 rounded bg-gray-700 w-full"
              value={form.email}
              onChange={handleChange}
            />
            {errors?.email && (
              <span className="text-orange-400 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-400">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block border-0 rounded bg-gray-700 w-full"
              value={form.password}
              onChange={handleChange}
            />
            {errors?.password && (
              <span className="text-orange-400 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm text-gray-400">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="block border-0 rounded bg-gray-700 w-full"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors?.confirmPassword && (
              <span className="text-orange-400 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="border border-slate-500 rounded py-2 px-4 hover:bg-slate-600 hover:border-slate-600 transition">
              Register
            </button>
          </div>
        </form>
      </div>
      <footer className="border-t border-gray-900 py-6 px-4 text-xs flex justify-center items-center gap-2">
        <span>Already registered?</span>
        <button
          className="text-cyan-400 hover:underline transition"
          onClick={() => setIsLogin(true)}>
          Login here.
        </button>
      </footer>
    </div>
  );
}

export default Register;
