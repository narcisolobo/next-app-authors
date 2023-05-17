import NextAuth from 'next-auth/next';
import User from '@/app/db/models/user-model';
import dbConnect from '@/app/db/db-connect';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('Credentials invalid.');
        }

        // may not work - we'll see
        const passwordIsValid = await user.comparePassword(password);

        if (!passwordIsValid) {
          throw new Error('Credentials invalid.');
        }

        return {
          _id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.email = user.email;
        // console.log('jwt user:', user, 'jwt token:', token);
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user._id = token._id;
      session.user.email = token.email;
      // console.log('session:', session, 'session token', token);
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: '/',
  },
};

export default NextAuth(authOptions);
