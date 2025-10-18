import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import mainHeader from "./header.module.css";
import classLinks from "./links.module.css";

export default async function () {
  const { isAuthenticated } = await auth();
  if (!isAuthenticated) {
    return <div>Sign in to view this!</div>;
  }
  const user = await currentUser();

  return (
    <div className={mainHeader.clerkdetails}>
      <p className="font-semibold">
        Welcome {user.firstName} {user.lastName}
      </p>
      <Link className={classLinks.link} href={`/user/${user.username}`}>
        go to {user.username}'s page
      </Link>
    </div>
  );
}
