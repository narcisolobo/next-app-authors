'use client';

import { Fragment, useState } from 'react';
import DeleteModal from './DeleteModal';

function DeleteButton({ authorId, deleteAuthor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <button className="hover:text-orange-400" onClick={() => setIsOpen(true)}>
        Delete
      </button>
      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        authorId={authorId}
        deleteAuthor={deleteAuthor}
      />
    </Fragment>
  );
}

export default DeleteButton;
