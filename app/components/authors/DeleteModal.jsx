'use client';

import { Dialog } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

function DeleteModal({ isOpen, setIsOpen, authorId, deleteAuthor }) {
  const handleDelete = async () => {
    await deleteAuthor(authorId);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded p-4 bg-gray-700">
          <Dialog.Title className="flex items-center gap-2 font-semibold mb-4 text-lg text-gray-200">
            <ExclamationCircleIcon className="w-6 text-orange-400" />
            Confirm Delete
          </Dialog.Title>
          <p className="text-gray-300 mb-4">
            Are you sure you want to delete this author? This action cannot be
            undone.
          </p>
          <div className="flex justify-end items-center gap-2">
            <button
              className="rounded py-2 px-4 text-sm text-gray-300 hover:bg-gray-600"
              onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button
              className="rounded py-2 px-4 text-sm text-gray-300 hover:bg-gray-600"
              onClick={handleDelete}>
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
export default DeleteModal;
