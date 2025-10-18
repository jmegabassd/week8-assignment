import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Could not find the specific user</p>
      <Link href="/">Return to the homepage</Link>
    </div>
  );
}
