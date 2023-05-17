import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import { transformDocument } from '@/app/utils/transform-document';
import AuthorRow from './AuthorRow';
import { revalidatePath } from 'next/cache';

async function AuthorList() {
  const getAuthors = async () => {
    try {
      await dbConnect();
      const authorDocs = await Author.find({}).populate('creator');
      return authorDocs.map((doc) => transformDocument(doc));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAuthor = async (authorId) => {
    'use server';

    await dbConnect();
    try {
      await Author.findByIdAndDelete(authorId);
      revalidatePath('/authors');
    } catch (err) {
      throw err;
    }
  };

  const authors = await getAuthors();

  return (
    <table className="table-auto w-full shadow rounded bg-gray-800 mb-4 p-4 overflow-hidden">
      <thead>
        <tr className="text-left text-sm text-gray-200 border-b border-gray-700">
          <th className="p-4 font-semibold">Author</th>
          <th className="p-4 font-semibold">Uploaded By:</th>
          <th className="p-4 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <AuthorRow
            key={author._id}
            author={author}
            deleteAuthor={deleteAuthor}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AuthorList;
