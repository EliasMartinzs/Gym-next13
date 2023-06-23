import ExercisesCard from "@/components/ExercisesCard";
import { fetchExercises } from "@/utils";

export default async function SearchedExercises({ query, bodyPart }) {
  const exercises = await fetchExercises(
    "https://exercisedb.p.rapidapi.com/exercises/"
  );

  const exercisesBodyPart = await fetchExercises(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
  );

  return (
    <div>
      <ExercisesCard
        exercises={exercises}
        query={query}
        exercisesBodyPart={exercisesBodyPart}
      />
    </div>
  );
}
