import React from "react";
import Year from "./Year";

export default function Footer() {
  return (
    <div className="w-full bg-slate-950 text-white py-10 px-5 mt-5">
      <div className="w-full flex items-start justify-center">
        <div className="w-1/2">
          <ul>
            <li>Api Used</li>
            <li>Api Exercises</li>
            <li>Api Youtube</li>
          </ul>
        </div>
        <div className="w-1/2">
          <ul>
            <li>Tecnologies Used</li>
            <li>Next js</li>
            <li>Tailwind CSS</li>
            <li>Material Icons</li>
          </ul>
        </div>
      </div>
      <small className="flex items-center justify-center mt-20">
        Copyright By Elias Martins <Year />
      </small>
    </div>
  );
}
