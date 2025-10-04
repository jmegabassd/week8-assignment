"use server";

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export async function deleteComment(commentId) {
  try {
    await db.query(`DELETE FROM comments WHERE id = ${commentId}`);
    revalidatePath(`/posts`);
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}
