const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1324";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e921d0052dmsh8b9061ca0515835p19cfbcjsnb5d7bea54c05",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export async function getExercises() {
  const res = await fetch(url, options);

  if (!res.ok) throw new Error("Could not upload exercises");

  const data = await res.json();

  return data;
}
