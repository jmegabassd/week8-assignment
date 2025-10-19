import UserPosts from "@/components/UserPosts";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import userContainer from "@/styles/userId.module.css";

function formatLastSignInDate(date) {
  if (!date) return "Never signed in";
  const dateObject = new Date(date);
  return dateObject.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function UserIdPage() {
  const user = await currentUser();
  return (
    <div>
      <p className="font-semibold">Welcome {user.firstName}</p>
      <div className={userContainer.imagecontainer}>
        <Image
          src={user.imageUrl}
          alt="My user image from registration"
          sizes="100%"
          fill={true}
          className={userContainer.image}
          quality={85}
          priority={true}
        />
      </div>
      <div className={userContainer.userdetails}>
        <p>Username: {user.username}</p>
        <p>
          Full Name: {user.firstName} {user.lastName}
        </p>
        <p>Email Address: {user.emailAddresses[0].emailAddress}</p>
        <p>Last signed in: {formatLastSignInDate(user.lastSignInAt)}</p>
      </div>
      <UserPosts userId={user.id} />
    </div>
  );
}
