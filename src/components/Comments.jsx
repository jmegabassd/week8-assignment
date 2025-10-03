import commentsContainer from "./comments.module.css";
import { db } from "@/utils/dbConnection";

export default async function Comments({ postsId }) {
  const query = await db.query(
    `SELECT id, name, time, comments, post_id From comments WHERE post_id = ${postsId}`
  );

  const comments = query.rows;

  return (
    <>
      {comments.map((comment) => {
        const postDate = new Date(comment.time);
        const postDateString = postDate.toLocaleString();
        return (
          <div className={commentsContainer.commentscontainer} key={comment.id}>
            <p>{comment.name}</p>
            <p>{postDateString}</p>
            <p>{comment.comments}</p>
          </div>
        );
      })}
    </>
  );
}
