"use client";

import { deleteComment } from "./DeleteComment";
import classDelete from "./deletebutton.module.css";

export default function DeleteButton({ commentId }) {
  const handleConfirmDelete = (event) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <form action={deleteComment.bind(null, commentId)}>
      <button
        type="submit"
        onClick={handleConfirmDelete}
        className={classDelete.button}
      >
        Delete
      </button>
    </form>
  );
}
