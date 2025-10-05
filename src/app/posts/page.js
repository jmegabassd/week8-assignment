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
    <div>
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
              <Image
                src={`https://img.youtube.com/vi/${post.video_id}/0.jpg`}
                width={240}
                height={180}
                alt="Album images from YouTube"
                className={postsContainer.image}
                priority={true} //Remove lazy loading warning in console
              />

              <p className="flex flex-wrap font-normal">
                Posted by:{post.username} on
              </p>

              <p className="flex flex-wrap font-normal">{postDateString}</p>

              <p className="flex flex-wrap font-normal">
                Artist:
                {post.artist}
              </p>

              <p className="flex flex-wrap font-normal">
                Album:
                {post.album}
              </p>

              <p className="flex flex-wrap font-normal">
                Track:
                {post.track_name}
              </p>
              <p className="flex flex-wrap font-normal">
                Genre:
                {post.genre}
              </p>

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
