"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SortPosts() {
  const [sort, setSort] = useState("name");
  const [direction, setDirection] = useState("asc");
  const router = useRouter();

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);

    router.push(`?sort=${selectedSort}&direction=${direction}`);
  };

  const handleDirectionChange = (e) => {
    const selectedDirection = e.target.value;
    setDirection(selectedDirection);

    router.push(`?sort=${sort}&direction=${selectedDirection}`);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" value={sort} onChange={handleSortChange}>
        <option value="time">Time</option>
        <option value="track_name">Track Name</option>
        <option value="genre">Genre</option>
      </select>

      <label htmlFor="direction">Direction:</label>
      <select id="direction" value={direction} onChange={handleDirectionChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
