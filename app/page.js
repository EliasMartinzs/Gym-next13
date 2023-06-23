import Center from "@/components/Center";
import Exercise from "./exercise/page";
import SearchedExercises from "./exercise/[search]/page";

export default function Home({ searchParams }) {
  const { query } = searchParams;
  const { bodyPart } = searchParams;

  return (
    <>
      <Center />
      <Exercise />
      <SearchedExercises query={query} bodyPart={bodyPart} />
    </>
  );
}
