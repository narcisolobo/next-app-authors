'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function AuthorForm({ initialAuthor, submitFunction }) {
  const router = useRouter();
  const [author, setAuthor] = useState(initialAuthor);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!author.name) {
        throw { name: { message: 'Please enter author name.' } };
      }

      console.log('author name length"', author.name.trim().length);
      if (author.name.trim().length < 2) {
        throw {
          name: { message: 'Author name must be at least two characters.' },
        };
      }
      await submitFunction(author);
      setErrors(null);
      router.push('/authors');
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <div className="shadow rounded bg-gray-800 mb-4 p-4 text-gray-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm text-gray-400">
            Author name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter author name"
            className="block border-0 rounded bg-gray-700 w-full"
            value={author.name}
            onChange={handleChange}
          />
          {errors?.name && (
            <span className="text-orange-400 text-xs">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="rounded py-2 px-4 bg-gray-700 hover:bg-gray-600 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthorForm;
