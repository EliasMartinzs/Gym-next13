const headers = {
  "X-RapidAPI-Key": "0264115b1emsh1b3249af6606378p1eb643jsn4d6042d81d36",
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

export const fetchBodyPart = async () => {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    { headers: headers }
  );

  const data = await response.json();

  return data;
};

export const fetchExercises = async (url) => {
  const response = await fetch(url, {
    headers: headers,
  });

  const dataExercises = await response.json();

  return dataExercises;
};
