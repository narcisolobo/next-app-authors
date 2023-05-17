# Authors (Next.js 13)

## Overview
This project is an implementation of an assignment from the bootcamp I currently teach at, Coding Dojo. The assignment is a basic MERN application capable of full CRUD, where users can create, read, update, and delete authors from a database.

I have been learning Next.js recently. After getting a handle on the pages directory of version 12, I created this app to learn some of new features of Next.js 13.

The original assignment does not require authentication or relationships between database collections, and I wanted to add those features as well.

This app:
- uses the app directory
- has two different layouts
- uses the error.js and loading.js files
- protects a route segment in middleware.js
- fetches data from MongoDB Atlas in Server Components
- creates, updates, and deletes documents via Server Actions (experimental)

The only major new feature this app is missing is a route handler, but I don't know where I'd put one. I used a database for data persistence, so I didn't have a need to GET or POST from or to an API.

I do still have a pages directory for NextAuth, as that package requires an API. Otherwise, there would be no need for any API at all.

## Tech Stack
Whenever I build a project, I like to incorporate libraries or packages that I still don't know that well. In addition to the new features of Next.js 13, this application uses the following libraries/packages/frameworks:
- [Axios](https://axios-http.com/docs/intro)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Headless UI](https://headlessui.com/)
- [Hero Icons](https://heroicons.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Mongoose](https://mongoosejs.com/)
- [Sass](https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Takeaways
I was most unfamiliar with Tailwind, Headless UI, and NextAuth. I've gotten a better handle on those libraries, and I'm happy about that.

Regaring Tailwind, I've been leaning on [React Bootstrap](https://react-bootstrap.github.io/) a heck of a lot, so I wanted to start learning another styling solution. Plus, a lot of the components from React Bootstrap do not work with Server Components. Many of them use hooks under the hood.

I had the most trouble with NextAuth, expecially with customizing the session object. Users can sign up, sign in, sign out, and create author documents that store the logged-in user's id in a "creator" field.

## Next Steps
I have also been learning TypeScript. I'm not sure if I'll migrate this application to TypeScript, but my next Next.js project will use it in conjunction with the app directory and all the new features of Next.js 13.
