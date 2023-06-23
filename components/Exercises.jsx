"use client";

import { useEffect, useState } from "react";
import ExercisesCard from "./ExercisesCard";
import Pagination from "@mui/material/Pagination";

export default function Exercises({ exercises, query, exercisesBodyPart }) {
  const [exerciseData, setExerciseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexLastPage = currentPage * exercisesPerPage;
  const indexFirstPage = indexLastPage - exercisesPerPage;
  const exercisePagination = exerciseData.slice(indexFirstPage, indexLastPage);

  const paginate = (_, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const data = () => {
      if (!query) {
        setExerciseData(exercisesBodyPart);
      } else {
        setExerciseData("chest");
      }
    };
    data();
  }, [exercisesBodyPart]);

  useEffect(() => {
    handleSearch();
  }, [query]);

  const handleSearch = () => {
    if (query) {
      const searchedExercises = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(query) ||
          exercise.target.toLowerCase().includes(query) ||
          exercise.equipment.toLowerCase().includes(query) ||
          exercise.bodyPart.toLowerCase().includes(query)
      );
      setExerciseData(searchedExercises);
    }
  };

  return (
    <div className="">
      <div className="w-full flex flex-col lg:grid grid-cols-3 gap-5 mt-10 px-10">
        {Array.isArray(exercisePagination)
          ? exercisePagination.map((exercise) => (
              <ExercisesCard key={exercise.id} exercise={exercise} />
            ))
          : null}
      </div>
      <div className="mt-16 w-full flex items-center justify-center mx-auto">
        <Pagination
          defaultPage={1}
          page={currentPage}
          count={Math.ceil(exerciseData.length / exercisesPerPage)}
          onChange={paginate}
        />
      </div>
    </div>
  );
}
