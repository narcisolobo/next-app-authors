import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import { transformEmptyDocument } from '@/app/utils/transform-document';
import AuthorForm from '@/app/components/authors/AuthorForm';
import { editAuthor } from '@/app/actions/author-actions';

export const metadata = {
  title: 'Authors DB - Edit Author',
  description:
    'This page allows the logged in user to edit an existing Author.',
};

async function EditAuthorPage({ params }) {
  const getAuthor = async (authorId) => {
    await dbConnect();

    try {
      const authorDoc = await Author.findById(authorId);
      return transformEmptyDocument(authorDoc);
    } catch (err) {
      throw err;
    }
  };

  const initialAuthor = await getAuthor(params.id);

  return (
    <AuthorForm initialAuthor={initialAuthor} submitFunction={editAuthor} />
  );
}

export default EditAuthorPage;
