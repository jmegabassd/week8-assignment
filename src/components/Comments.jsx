import commentsContainer from "./comments.module.css";
import { db } from "@/utils/dbConnection";
import DeleteButton from "./DeleteButton";

export default async function Comments({ postsId }) {
  const query = await db.query(
    `SELECT id, name, time, comments, post_id From comments WHERE post_id = ${postsId}`
  );

  const comments = query.rows;

  return (
    <div className={commentsContainer.master}>
      {comments.map((comment) => {
        const postDate = new Date(comment.time);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        const postDateString = postDate.toLocaleString("en-US", options);
        return (
          <div className={commentsContainer.commentscontainer} key={comment.id}>
            <p>
              {comment.name} on {postDateString} says:
            </p>
            <p>{comment.comments}</p>
            <DeleteButton commentId={comment.id} />
          </div>
        );
      })}
    </div>
  );
}
