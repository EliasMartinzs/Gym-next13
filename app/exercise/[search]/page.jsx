import Exercises from "@/components/Exercises";
import { fetchExercises } from "@/utils";

export default async function SearchedExercises({ query, bodyPart }) {
  const exercises = await fetchExercises(
    "https://exercisedb.p.rapidapi.com/exercises/"
  );

  const exercisesBodyPart = await fetchExercises(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${
      bodyPart || "chest"
    }`
  );

  return (
    <div>
      <Exercises
        exercises={exercises}
        query={query}
        exercisesBodyPart={exercisesBodyPart}
      />
    </div>
  );
}
