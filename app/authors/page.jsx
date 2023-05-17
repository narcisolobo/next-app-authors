import AuthorList from '../components/authors/AuthorList';

export const metadata = {
  title: 'Authors DB - Welcome!',
  description:
    'This is the Authors assignment with login and registration features. This page is protected by middleware.',
};

async function AllAuthorsPage() {
  return <AuthorList />;
}

export default AllAuthorsPage;
