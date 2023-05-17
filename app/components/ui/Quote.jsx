import { Fragment } from 'react';

export const revalidate = 60;

async function Quote() {
  async function getQuote() {
    const res = await fetch('https://api.quotable.io/quotes/random');
    const data = await res.json();
    return data[0];
  }

  const quote = await getQuote();

  return (
    <Fragment>
      <blockquote className="mb-10">
        <h2 className="text-2xl">
          &ldquo;
          {quote.content}
          &rdquo; &mdash;
        </h2>
        <footer className="text-xl">{quote.author}</footer>
      </blockquote>
      <p className="text-gray-400 text-xs mb-2">
        Quote provided by{' '}
        <a
          href="https://github.com/lukePeavey/quotable"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition">
          Quotable
        </a>
        .
      </p>
    </Fragment>
  );
}

export default Quote;
