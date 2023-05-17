import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import AuthorList from '../components/authors/AuthorList';
import { transformDocument } from '@/app/utils/transform-document';

export const metadata = {
  title: 'Authors DB - Welcome!',
  description:
    'This is the Authors assignment with login and registration features. This page is protected by middleware.',
};

export const revalidate = 60;

async function AllAuthorsPage() {
  const getAuthors = async () => {
    try {
      await dbConnect();
      const authorDocs = await Author.find({})
        .populate('creator')
        .sort({ createdAt: 'desc' });
      return authorDocs.map((doc) => transformDocument(doc));
    } catch (err) {
      console.log(err);
    }
  };

  const authors = await getAuthors();

  return <AuthorList authors={authors} />;
}

export default AllAuthorsPage;
