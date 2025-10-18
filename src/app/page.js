import hompageContainer from "./homepage.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={hompageContainer.hompagecontainer}>
      <h1>HomePage</h1>
      <p>
        Please
        <SignedOut>
          <Link href="/sign-in" className={hompageContainer.links}>
            Sign in
          </Link>
        </SignedOut>
        <SignedIn>
          <Link href="/posts/addmusic" className={hompageContainer.links}>
            add music
          </Link>
        </SignedIn>
        to leave a post
      </p>
    </div>
  );
}
