import userContainer from "@/styles/userId.module.css";
import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function Comments({ userId }) {
  const query = await db.query(
    `SELECT id, time, username, artist, album, track_name, genre, video_id, user_id From posts WHERE user_id = $1`,
    [userId]
  );

  const posts = query.rows;

  return (
    <div className={userContainer.maincontainer}>
      <div className={userContainer.mainpostscontainer}>
        {posts.map((post) => {
          const postDate = new Date(post.time);
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
            <div className={userContainer.postscontainer} key={post.id}>
              <div className={userContainer.imagecontainer}>
                <Image
                  src={`https://img.youtube.com/vi/${post.video_id}/hqdefault.jpg`}
                  sizes="100%"
                  fill={true}
                  alt="Album images from YouTube"
                  className={userContainer.image}
                  quality={85}
                  priority={true}
                />
              </div>
              <div className={userContainer.poststext}>
                <p>Posted by:{post.username} on</p>
                <p>{postDateString}</p>
                <p>
                  Artist:
                  {post.artist}
                </p>
                <p>
                  Album:
                  {post.album}
                </p>
                <p>
                  Track:
                  {post.track_name}
                </p>
                <p>
                  Genre:
                  {post.genre}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
