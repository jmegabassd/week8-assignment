import { db } from "@/utils/dbConnection";

export default async function PostsIdPage({ params }) {
  const postsId = (await params).postsId;

  const query = await db.query(
    `SELECT id, time, author, title, description, url From posts WHERE id = ${postsId}`
  );

  const posts = query.rows[0];
  console.log(posts);
  const postDate = new Date(posts.time);
  const postDateString = postDate.toLocaleString("en-US");
  return (
    <div>
      <p>{posts.title}</p>
      <iframe
        width="560"
        height="315"
        src={posts.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>{posts.author}</p>
      <p>{postDateString}</p>
      <p>{posts.description}</p>
    </div>
  );
}
