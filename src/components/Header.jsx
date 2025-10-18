import mainHeader from "./header.module.css";
import Links from "./Links";
import { UserButton, SignedIn, SignOutButton } from "@clerk/nextjs";
import { Suspense } from "react";
import GetClerkDetails from "@/components/GetClerkDetails";

export default function Header() {
  return (
    <>
      <header className={mainHeader.mainheader}>
        <h1 className="!text-3xl flex h-full justify-center items-end">
          Music Blog
        </h1>
        <div className={mainHeader.links}>
          <div className={mainHeader.clerkmaincontainer}>
            <SignedIn>
              <UserButton />
              <Suspense fallback={<p>Loading...</p>}>
                <GetClerkDetails />
              </Suspense>
              <SignOutButton className={mainHeader.button} />
            </SignedIn>
          </div>
          <div className={mainHeader.links}>
            <Links href="/">Home</Links>
            <Links href="/about">About</Links>
            <Links href="/posts">Posts</Links>
            <Links href="/posts/addmusic">Add music</Links>
          </div>
        </div>
      </header>
    </>
  );
}
