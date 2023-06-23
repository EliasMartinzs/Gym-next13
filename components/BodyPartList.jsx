"use client";

import { Combobox } from "@headlessui/react";

import { useRouter } from "next/navigation";
import { useState, Fragment } from "react";
import { FiSearch } from "react-icons/fi";

export default function BodyPartList({ bodyPart }) {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredExercise =
    query === ""
      ? bodyPart
      : bodyPart.filter((body) => {
          return body.toLowerCase().includes(query.toLowerCase());
        });

  const handleSearch = (e) => {
    e.preventDefault;

    updateUrlParams(selectedBodyPart);
    setQuery("");
  };

  const updateUrlParams = (param) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (param) {
      searchParams.set("bodyPart", selectedBodyPart);
    } else {
      searchParams.delete("bodyPart");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center mx-auto mt-10">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 border-b">
          Search Exercises By BodyPart
        </h2>
      </div>
      <Combobox
        value={selectedBodyPart}
        onChange={setSelectedBodyPart}
        as="div"
        className="py-10 flex flex-col items-center justify-center w-full"
      >
        <div className="relative">
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(body) => body}
            className="w-full lg:w-[35rem] py-2 px-2 rounded-full border-2 outline-none  "
            placeholder="Quadriceps"
          />
          <FiSearch
            className="absolute top-2 right-4 text-xl z-50 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <Combobox.Options className="flex flex-col w-56 lg:w-[33rem] ">
          {filteredExercise.map((body) => (
            <Combobox.Option key={body.id} value={body} as={Fragment}>
              {({ active }) => (
                <li
                  className={`${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  {body}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
