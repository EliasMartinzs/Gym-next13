"use client";

import { useEffect, useState } from "react";

export default function ExercisesCard({ exercises, query, exercisesBodyPart }) {
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    const data = () => {
      if (!query) {
        setExerciseData(exercisesBodyPart);
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

  return <div></div>;
}
