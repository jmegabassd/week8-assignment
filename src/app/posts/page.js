import postsContainer from "./posts.module.css";
import { db } from "@/utils/dbConnection";
import Links from "@/components/Links";
import Image from "next/image";
import SortPosts from "@/components/SortPosts";

export default async function PostsPage({ searchParams }) {
  const sort = searchParams?.sort || "name"; // Default to 'name'
  const direction = searchParams?.direction || "asc"; // Default to 'asc'
  const query = await db.query(
    `SELECT id, time, username, artist, album, track_name, genre, video_id From posts ORDER BY time`
  );

  const posts = query.rows;

  return (
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
              alt="any"
              className={postsContainer.image}
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
  );
}
