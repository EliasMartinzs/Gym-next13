"use client";

import { Combobox } from "@headlessui/react";
import { useState, Fragment } from "react";

export default function BodyPartList({ bodyPart }) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? bodyPart
      : bodyPart.filter((body) => {
          return body.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(body) => body}
      />
      <Combobox.Options>
        {filteredPeople.map((body) => (
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
  );
}
