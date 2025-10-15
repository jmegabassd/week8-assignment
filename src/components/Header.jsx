import mainHeader from "./header.module.css";
import Links from "./Links";

export default function Header() {
  return (
    <>
      <header className={mainHeader.mainheader}>
        <h1 className="!text-3xl">Music Blog</h1>
        <div className={mainHeader.links}>
          <Links href="/">Home</Links>
          <Links href="/about">About</Links>
          <Links href="/posts">Posts</Links>
          <Links href="/posts/addmusic">Add music</Links>
        </div>
      </header>
    </>
  );
}
