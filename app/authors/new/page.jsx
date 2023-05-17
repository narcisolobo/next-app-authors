import AuthorForm from '@/app/components/authors/AuthorForm';
import { getUser } from '@/app/utils/get-user';
import { createAuthor } from '@/app/actions/author-actions';

export const metadata = {
  title: 'Authors DB - Create Author',
  description: 'This page allows the logged in user to create a new Author.',
};

async function NewAuthorPage() {
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
