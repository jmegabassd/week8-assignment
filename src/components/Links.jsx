import Link from "next/link";
import classLinks from "./links.module.css";

export default function Links({ href, children }) {
  return (
    <Link href={href} className={classLinks.link}>
      {children}
    </Link>
  );
}
