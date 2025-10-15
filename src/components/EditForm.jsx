"use client";
import { editPostComment } from "@/app/actions";
import EditButton from "./EditButton";
import formComments from "./commentsform.module.css";

export default function EditForm({ initialComment }) {
  return (
    <fieldset className={formComments.fieldset}>
      <legend className="text-xl">Edit comment</legend>
      <form className={formComments.form} action={editPostComment}>
        <input type="hidden" name="id" value={initialComment.id} />
        <label
          className={formComments.label}
          htmlFor={`comments-${initialComment.id}`}
        >
          Comments:
        </label>
        <textarea
          defaultValue={initialComment.comments}
          className={formComments.textarea}
          id={`comments-${initialComment.id}`}
          name="comments"
          required
          placeholder="Please leave your comments here."
        />
        <EditButton />
      </form>
    </fieldset>
  );
}
