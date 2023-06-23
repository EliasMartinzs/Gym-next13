import { fetchExerciseId } from "@/utils";
import Image from "next/image";

export default async function ExerciseDetail({ params }) {
  const { id } = params;

  const exerciseID = await fetchExerciseId(`${id}`);

  return (
    <div className="w-full px-10 mt-5 ">
      <h2 className="flex flex-col justify-center items-center text-xl font-bold text-blue-500 border-b">
        All detail this exercise
        <br />
        <span className="capitalize mt-10 text-black">{exerciseID.name}</span>
      </h2>

      <div className="w-full flex-col flex lg:grid grid-cols-2 lg:gap-y-5 font-extralight">
        <div>
          <Image
            src={exerciseID.gifUrl}
            width={500}
            height={500}
            alt={exerciseID.name}
            className="object-contain"
          />
        </div>

        <div className="mt-10 gap-y-5 flex flex-col capitalize">
          <h3 className="text-xl">
            This exercises {exerciseID.name} is very good for{" "}
            {exerciseID.bodyPart}, it can be used on equipment{" "}
            {exerciseID.equipment}.
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/dumbbel.png"
              width={50}
              height={50}
              alt={exerciseID.equipment}
              className="object-contain"
            />
            <p>{exerciseID.equipment}</p>
          </div>
          <div className="flex items-center gap-x-5">
            <Image
              src="/body.png"
              width={50}
              height={50}
              alt={exerciseID.equipment}
              className="object-contain"
            />
            <p>{exerciseID.target}</p>
          </div>
          <div className="flex items-center gap-x-5">
            <Image
              src="/exercise.png"
              width={50}
              height={50}
              alt={exerciseID.equipment}
              className="object-contain"
            />
            <p>{exerciseID.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
