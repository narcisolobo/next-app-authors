import User from '@/app/db/models/user-model';
import Author from '@/app/db/models/author-model';
import dbConnect from '@/app/db/db-connect';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const authors = await Author.find({})
      .populate('creator')
      .sort({ createdAt: 'desc' });
    return NextResponse.json(authors);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const author = await Author.create(body);
    return NextResponse.json(author);
  } catch (err) {
    return NextResponse.json(err);
  }
}
