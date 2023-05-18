import AuthorList from '../components/authors/AuthorList';
import { getAllAuthors } from '../actions/author-actions';

export const metadata = {
  title: 'Authors DB - Welcome!',
  description:
    'This is the Authors assignment with login and registration features. This page is protected by middleware.',
};

async function AllAuthorsPage() {
  const authors = await getAllAuthors();

  return <AuthorList authors={authors} />;
}

export default AllAuthorsPage;
