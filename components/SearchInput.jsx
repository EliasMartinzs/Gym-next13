"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearche = (e) => {
    e.preventDefault;

    updateUrlParams("query");
    setQuery("");
  };

  const updateUrlParams = (param) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (param) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="relative z-50">
      <input
        type="text"
        name="search"
        placeholder="Chest"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="rounded-full py-2 px-5 relative w-96 lg:w-[35rem]"
      />
      <FiSearch
        className="absolute top-2 right-4 text-xl"
        onClick={handleSearche}
      />
    </form>
  );
}
