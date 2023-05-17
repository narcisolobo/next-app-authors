import { Fragment } from 'react';
import Navbar from '../components/authors/Navbar';
import { getUser } from '../utils/get-user';

async function AuthorsLayout({ children }) {
  const user = await getUser();

  return (
    <Fragment>
      <Navbar user={user} />
      <main className="px-4 sm:container sm:p-0 text-gray-200" user={user}>
        {children}
      </main>
    </Fragment>
  );
}

export default AuthorsLayout;
