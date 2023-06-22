import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";

export default function Center() {
  return (
    <div className="w-full h-[35rem] flex flex-col items-center justify-center relative">
      <div className="text-sky-500 p-2 rounded-3xl bg-black bg-opacity-50 w-96 mb-20 text-2xl lg:text-4xl">
        <span className="font-bold">More</span>{" "}
        <h4 className="text-2xl">1300+ Exercises for you</h4>
      </div>
      <Image
        src="/bg-center2.jpg"
        fill
        alt="center"
        className="object-cover bg-center -z-50"
        priority
      />
      <SearchInput />
    </div>
  );
}
