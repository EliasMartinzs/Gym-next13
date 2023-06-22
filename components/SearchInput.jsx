"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault;

    const searchParam = new URLSearchParams(window.location.search);

    if (query) {
      searchParam.set("q", query);
    } else {
      searchParam.delete("q");
    }

    const newPathname = `${window.location.pathname}?${searchParam.toString()}`;

    router.push(newPathname);
    setQuery("");
  };

  return (
    <form className="relative z-50" onClick={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="sla"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="rounded-full py-2 px-5 relative w-96 lg:w-[35rem]"
      />
      <FiSearch
        className="absolute top-2 right-4 text-xl"
        onClick={handleSearch}
      />
    </form>
  );
}
