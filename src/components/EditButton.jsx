"use client";
import { editPostComment } from "./EditComment";
import classDelete from "./deletebutton.module.css";

export default function EditButton({ commentId }) {
  const handleConfirmEdit = (event) => {
    const confirmed = window.confirm(
      "Are you sure you want to edit this comment?"
    );

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <form action={editPostComment.bind(null, commentId)}>
      <button
        type="submit"
        onClick={handleConfirmEdit}
        className={classDelete.button}
      >
        Edit
      </button>
    </form>
  );
}
