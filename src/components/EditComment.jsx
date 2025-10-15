"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";

export async function editPostComment(formData) {
  const commentQuery = await db.query(
    `SELECT post_id FROM comments WHERE id = $1`,
    [id]
  );
  const postsId = commentQuery.rows[0].post_id;

  await db.query(`UPDATE comments SET comments = $1 WHERE id = $2`, [
    comments,
    id,
  ]);

  revalidatePath(`/posts/${postsId}`);
  redirect(`/posts/${postsId}`);
}
