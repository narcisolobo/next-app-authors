import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import { revalidatePath } from 'next/cache';

async function createAuthor(author) {
  'use server';

  try {
    await fetch('http://localhost:3000/api/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(author),
    });
    revalidatePath('/authors');
  } catch (err) {
    throw err;
  }
}

async function getAllAuthors() {
  try {
    const res = await fetch('http://localhost:3000/api/authors', {
      cache: 'no-store',
    });
    const authors = await res.json();
    return authors;
  } catch (err) {
    throw err;
  }
}

async function editAuthor(author) {
  'use server';

  await dbConnect();
  try {
    await Author.findByIdAndUpdate(author._id, author, {
      new: true,
    });
    revalidatePath('/authors');
  } catch (err) {
    throw err;
  }
}

async function deleteAuthor(authorId) {
  'use server';

  await dbConnect();
  try {
    await Author.findByIdAndDelete(authorId);
    revalidatePath('/authors');
  } catch (err) {
    throw err;
  }
}

export { createAuthor, getAllAuthors, editAuthor, deleteAuthor };
