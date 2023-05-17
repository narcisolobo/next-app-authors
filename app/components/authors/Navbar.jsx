import Link from 'next/link';
import Dropdown from '../ui/Dropdown';

function Navbar({ user }) {
  console.log(user);
  return (
    <header className="bg-gray-800 py-4 mb-4 relative">
      <div className="px-5 sm:p-0 sm:container flex justify-between items-center">
        <Link href="/" className="text-2xl text-gray-200">
          Authors
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/authors" className="nav-link">
            All Authors
          </Link>
          <Link href="/authors/new" className="nav-link">
            Add a New Author
          </Link>
          <Dropdown email={user.email} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
