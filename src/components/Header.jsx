import mainHeader from "./header.module.css";
import Links from "./Links";
import megabass from "@/../public/images/megabass.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={mainHeader.mainheader}>
        <Image
          src={megabass}
          alt="Megabass's logo"
          width="0"
          height="0"
          style={{ width: "50px", height: "50" }}
          priority={true}
          className={mainHeader.logo}
        />
        <h1 className="!text-3xl !p-3">Music Blog</h1>
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
