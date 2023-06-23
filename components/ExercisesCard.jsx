import Image from "next/image";
import Link from "next/link";

export default function ExercisesCard({ exercise }) {
  const { bodyPart, equipment, gifUrl, id, name, target } = exercise;

  return (
    <div className="w-full flex flex-col p-5 border-b border-l rounded-xl border-slate-400 shadow-2xl ">
      <Image
        src={gifUrl}
        width={500}
        height={500}
        loading="lazy"
        alt={name}
        className="object-contain bg-center border-b"
      />
      <div className="mt-5 capitalize font-extralight text-xl">
        <span className="flex items-center justify-center font-light border-b">
          <p>{name}</p>
        </span>
        <span className="flex items-center justify-evenly mt-5">
          <p>{bodyPart}</p>
          <p>{target}</p>
        </span>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href={`/exercise-detail/${id}`}
          className="p-2 border border-blue-500 w-32 flex items-center justify-center  hover:bg-blue-500 hover:text-white rounded-full"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}
