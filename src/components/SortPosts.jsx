"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SortPosts() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "";

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (newSort) {
      params.set("sort", newSort);
    } else {
      params.delete("sort");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={currentSort} onChange={handleSortChange}>
        <option value="desc">Newest Post</option>
        <option value="asc">Oldest Post</option>
      </select>
    </div>
  );
}
