import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import AuthorForm from '@/app/components/authors/AuthorForm';
import { getUser } from '@/app/utils/get-user';
import { revalidatePath } from 'next/cache';

export const metadata = {
  title: 'Authors DB - Create Author',
  description: 'This page allows the logged in user to create a new Author.',
};

async function NewAuthorPage() {
  async function createAuthor(author) {
    'use server';

    await dbConnect();
    try {
      const newAuthor = await Author.create(author);
      return newAuthor;
    } catch (err) {
      throw err;
    }
  }

  const user = await getUser();

  const initialAuthor = {
    name: '',
    creator: user._id,
  };

  return (
    <AuthorForm initialAuthor={initialAuthor} submitFunction={createAuthor} />
  );
}

export default NewAuthorPage;
