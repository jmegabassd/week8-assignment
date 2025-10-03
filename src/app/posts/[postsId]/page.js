import { db } from "@/utils/dbConnection";
import postsIdContainer from "./postsid.module.css";
import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";

export default async function PostsIdPage({ params }) {
  const postsId = (await params).postsId;
  const query = await db.query(
    `SELECT id, time, author, title, description, video_id From posts WHERE id = ${postsId}`
  );

  const posts = query.rows[0];
  console.log(posts);
  const postDate = new Date(posts.time);
  const postDateString = postDate.toLocaleString();
  return (
    <div className={postsIdContainer.postsidcontainer}>
      <div>
        <h1>{posts.title}</h1>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${posts.video_id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2>
          {posts.author} on {postDateString}
        </h2>
        <p>{posts.description}</p>
        <p className="!mt-[10px]">Leave a comment</p>
        <div className={`hidden ${postsIdContainer.hiddenform}`}>
          <CommentsForm />
        </div>
      </div>
      <div className="!mt-[10px]">
        <h1 className="!text-2xl">Previous comments</h1>
        <Comments postsId={postsId} />
      </div>
    </div>
  );
}
