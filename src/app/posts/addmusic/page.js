"use server";
import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import addPost from "./addpost.module.css";

export default async function AddPost() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");

    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

    const { username, artist, album, track_name, genre, video_id } =
      Object.fromEntries(formData);

    const currentTime = new Date().toISOString();

    const getYouTubeId = (url) => {
      const regExp =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
      const match = url.match(regExp);
      return match && match[1] ? match[1] : null;
    };

    const videoUrl = video_id;
    const videoid = getYouTubeId(videoUrl);

    await db.query(
      `INSERT INTO posts (time, username, artist, album, track_name, genre, video_id ) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [currentTime, username, artist, album, track_name, genre, videoid]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div className={addPost.maincontainer}>
      <fieldset className={addPost.fieldset}>
        <legend className={addPost.legend}>Add a track</legend>
        <form className={addPost.form} action={handleSavePost}>
          <label className={addPost.label} htmlFor="username">
            Username:
          </label>
          <input
            className={addPost.input}
            id="username"
            name="username"
            type="text"
            required
            placeholder="Your name."
            maxLength={40}
          />

          <label className={addPost.label} htmlFor="artist">
            Artist name:
          </label>
          <input
            className={addPost.input}
            id="artist"
            name="artist"
            type="text"
            required
            placeholder="The artist's name."
            maxLength={80}
          />

          <label className={addPost.label} htmlFor="album">
            Album name:
          </label>
          <input
            className={addPost.input}
            id="album"
            name="album"
            type="text"
            required
            placeholder="The name of the album."
            maxLength={80}
          />

          <label className={addPost.label} htmlFor="track_name">
            Track Name:
          </label>
          <input
            className={addPost.input}
            id="track_name"
            name="track_name"
            type="text"
            required
            placeholder="The track name."
            maxLength={80}
          />

          <label className={addPost.label} htmlFor="genre">
            Genre:
          </label>
          <input
            className={addPost.input}
            id="genre"
            name="genre"
            type="text"
            required
            placeholder="Which genre does this music come from."
            maxLength={20}
          />

          <label className={addPost.label} htmlFor="video_id">
            Video ID:
          </label>
          <input
            className={addPost.input}
            id="video_id"
            name="video_id"
            type="text"
            required
            placeholder="YouTube Video URL"
          />

          <button className={addPost.button} type="submit">
            Save
          </button>
        </form>
      </fieldset>
    </div>
  );
}
