"use server";

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteComment(commentId) {
  try {
    await db.query(`DELETE FROM comments WHERE id = ${commentId}`);
    revalidatePath(`/posts`);
    redirect(`/posts`);
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}
