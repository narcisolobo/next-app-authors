import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getUser() {
  const session = await getServerSession(authOptions);
  const user = {
    _id: session.user._id ?? null,
    email: session.user.email ?? null,
  };
  return user;
}
