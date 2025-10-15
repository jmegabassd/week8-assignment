import { db } from "@/utils/dbConnection";
import EditForm from "./EditForm";

export default async function EditPage({ postsId }) {
  const query = await db.query(
    `SELECT id, comments FROM comments WHERE post_id = $1`,
    [postsId]
  );
  const comments = query.rows;

  return (
    <>
      {comments.map((comment) => (
        <EditForm key={comment.id} initialComment={comment.comments} />
      ))}
    </>
  );
}
