import { db } from "@/utils/dbConnection";
import postsIdContainer from "./postsid.module.css";
import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";

export default async function PostsIdPage({ params }) {
  const postsId = (await params).postsId;
  const query = await db.query(
    `SELECT id, time, username, artist, album, track_name, genre, video_id From posts WHERE id = ${postsId}`
  );

  const posts = query.rows[0];
  console.log(posts);
  const postDate = new Date(posts.time);
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
    <div className={postsIdContainer.postsidcontainer}>
      <div>
        <h1 className="!text-xl">
          {posts.track_name} by {posts.artist} from {posts.album}
        </h1>
        <iframe
          className={postsIdContainer.iframe}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${posts.video_id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="!text-xl">
          Posted by {posts.username} on {postDateString}
        </h2>
        <CommentsForm postsId={postsId} />
      </div>
      <div className="!overflow-auto !mt-[10px]">
        <h1 className="!text-2xl">Previous comments</h1>
        <Comments postsId={postsId} />
      </div>
    </div>
  );
}
