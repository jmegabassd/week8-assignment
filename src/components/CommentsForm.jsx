"use server";
import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import formComments from "./commentsform.module.css";

export default async function UserComments({ postsId }) {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    const name = formData.get("name");
    const comments = formData.get("comments");
    const currentTime = new Date();

    await db.query(
      `INSERT INTO comments (name, time, comments, post_id) VALUES ($1, $2, $3, $4)`,
      [name, currentTime, comments, postsId]
    );

    console.log("Post saved!");

    revalidatePath(`/posts/${postsId}`);
    redirect(`/posts/${postsId}`);
  }

  return (
    <fieldset className={formComments.fieldset}>
      <legend className="text-xl">Leave a comment</legend>
      <form className={formComments.form} action={handleSavePost}>
        <label className={formComments.label} htmlFor="name">
          Name:
        </label>
        <input
          className={formComments.input}
          id="name"
          name="name"
          type="text"
          maxLength={30}
          required
          placeholder="Your name goes here."
        />

        <label className={formComments.label} htmlFor="comments">
          Comments:
        </label>
        <textarea
          className={formComments.textarea}
          id="comments"
          name="comments"
          type="text"
          required
          placeholder="Please leave your comments here."
        />

        <button className={formComments.button} type="submit">
          Save
        </button>
      </form>
    </fieldset>
  );
}
