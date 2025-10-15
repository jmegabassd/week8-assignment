import postsContainer from "./posts.module.css";
import { db } from "@/utils/dbConnection";
import Links from "@/components/Links";
import Image from "next/image";
import SortPosts from "@/components/SortPosts";

export default async function PostsPage({ searchParams }) {
  const awaitSearchParams = await searchParams; // Fix params await error in console
  const sortDirection = awaitSearchParams.sort || "desc"; // Default to 'desc' (Latest post first)
  const sortDirections = ["asc", "desc"];

  let sortByTime = "time DESC";

  if (sortDirections.includes(sortDirection)) {
    sortByTime = `time ${sortDirection}`;
  }

  const query = await db.query(
    `SELECT id, time, username, artist, album, track_name, genre, video_id From posts ORDER BY ${sortByTime}`
  );

  const posts = query.rows;

  return (
    <div className={postsContainer.maincontainer}>
      <div className={postsContainer.sort}>
        <SortPosts />
      </div>

      <div className={postsContainer.mainpostscontainer}>
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
            <div className={postsContainer.postscontainer} key={post.id}>
              <div className={postsContainer.imagecontainer}>
                <Image
                  src={`https://img.youtube.com/vi/${post.video_id}/hqdefault.jpg`}
                  sizes="100%"
                  fill={true}
                  alt="Album images from YouTube"
                  className={postsContainer.image}
                  quality={85}
                  priority={true}
                />
              </div>
              <div className={postsContainer.poststext}>
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
              <Links className={postsContainer.link} href={`/posts/${post.id}`}>
                Read More
              </Links>
            </div>
          );
        })}
      </div>
    </div>
  );
}
