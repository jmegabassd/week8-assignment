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
          <Link href="/sign-in" className={headerStyles.link}>
            Sign in
          </Link>
        </SignedOut>
        <SignedIn>
          <Link href="/create-post" className={headerStyles.link}>
            create a post
          </Link>
        </SignedIn>
        to create a post
      </p>
    </div>
  );
}
