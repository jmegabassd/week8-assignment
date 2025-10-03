import postsContainer from "./posts.module.css";
import { db } from "@/utils/dbConnection";
import Links from "@/components/Links";

export default async function PostsPage() {
  const query = await db.query(
    `SELECT id, time, author, title, description, url From posts`
  );

  const posts = query.rows;

  return (
    <div className={postsContainer.mainpostscontainer}>
      {posts.map((post) => {
        const postDate = new Date(post.time);
        const postDateString = postDate.toLocaleString();
        return (
          <div className={postsContainer.postscontainer} key={post.id}>
            <p>{post.url}</p>
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
