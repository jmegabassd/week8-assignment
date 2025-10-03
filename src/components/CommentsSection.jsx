"use client";

import { useState } from "react";
import CommentsForm from "@/components/CommentsForm";

export default function CommentSection({ posts }) {
  const [showCommentsForm, setShowCommentsForm] = useState(false);

  const toggleCommentsForm = () => {
    setShowCommentsForm(!showCommentsForm);
  };

  const postDate = new Date(posts.time);
  const postDateString = postDate.toLocaleString();

  return (
    <>
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
      <p className="!mt-[10px] cursor-pointer" onClick={toggleCommentsForm}>
        Leave a comment
      </p>
      {showCommentsForm && (
        <div>
          <CommentsForm />
        </div>
      )}
    </>
  );
}
