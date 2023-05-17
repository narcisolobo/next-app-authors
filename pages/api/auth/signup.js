import dbConnect from '@/app/db/db-connect';
import User from '@/app/db/models/user-model';

async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      await dbConnect();
      const countEmails = await User.countDocuments({ email: req.body.email });
      if (countEmails > 0) {
        throw {
          errors: { email: { message: 'Email in use. Please log in.' } },
        };
      }

      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    res.status(405).json({ message: 'Unsupported HTTP method.' });
  }
}

export default handler;
