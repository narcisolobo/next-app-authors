'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const initialForm = {
  email: '',
  password: '',
};

function Login({ setIsLogin }) {
  const router = useRouter();
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
    const { email, password } = form;
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    console.log('user signed in:', result);
    if (!result.ok) {
      setErrors(result.error);
    } else {
      setForm(initialForm);
      router.push('/authors');
    }
  };

  return (
    <div className="mt-6 rounded bg-gray-800 overflow-hidden w-full sm:w-2/3 lg:w-1/2">
      <header className="border-b border-gray-900 p-4 text-xl">Login</header>
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
            {errors && (
              <span className="text-orange-400 text-xs">{errors}</span>
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
            {errors && (
              <span className="text-orange-400 text-xs">{errors}</span>
            )}
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="border border-slate-500 rounded py-2 px-4 hover:bg-slate-600 hover:border-slate-600 transition">
              Login
            </button>
          </div>
        </form>
      </div>
      <footer className="border-t border-gray-900 py-6 px-4 text-xs flex justify-center items-center gap-2">
        <span>Need an account?</span>
        <button
          className="text-cyan-400 hover:underline transition"
          onClick={() => setIsLogin(false)}>
          Register here.
        </button>
      </footer>
    </div>
  );
}

export default Login;
