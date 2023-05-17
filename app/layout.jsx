import './globals.scss';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Authors DB',
  description: 'Authors assignment with login and registration features.',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="text-gray-200">{children}</main>
      </body>
    </html>
  );
}
