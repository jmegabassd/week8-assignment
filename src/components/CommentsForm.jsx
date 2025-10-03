"use server";
import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import formComments from "./commentsform.module.css";

export default async function UserComments() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    const name = formData.get("name");
    const time = formData.get("time");
    const comments = formData.get("comments");

    await db.query(
      `INSERT INTO comments (name, time, comments) VALUES ($1, $2, $3)`,
      [name, time, comments]
    );

    console.log("Post saved!");

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <fieldset className={formComments.fieldset}>
      <legend className={formComments.legend}>MyForm</legend>
      <form className={formComments.form} action={handleSavePost}>
        <label className={formComments.label} htmlFor="name">
          Name
        </label>
        <input
          className={formComments.input}
          id="name"
          name="name"
          type="text"
          maxLength={30}
        />

        <label htmlFor="time"></label>
        <input type="datetime-local" id="time" name="time" />

        <label className={formComments.label} htmlFor="content">
          Content
        </label>
        <textarea
          className={formComments.textarea}
          id="comments"
          name="comments"
          type="text"
        />

        <button className={formComments.button} type="submit">
          Save
        </button>
      </form>
    </fieldset>
  );
}
