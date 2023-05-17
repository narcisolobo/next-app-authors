import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import { revalidatePath } from 'next/cache';

async function createAuthor(author) {
  'use server';

  await dbConnect();
  try {
    await Author.create(author);
    revalidatePath('/authors');
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

export { createAuthor, editAuthor, deleteAuthor };
