import postsContainer from "./posts.module.css";
import { db } from "@/utils/dbConnection";
import Links from "@/components/Links";
import Image from "next/image";

export default async function PostsPage() {
  const query = await db.query(
    `SELECT id, time, author, title, description, video_id From posts`
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
              className="rounded-md"
            />
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{postDateString}</p>
            <Links href={`/posts/${post.id}`}>Read More</Links>
          </div>
        );
      })}
    </div>
  );
}
