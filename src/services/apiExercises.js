const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1324";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee6d42b312mshce53bed90519441p17e5b8jsnf79537c5e288",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export async function getExercises() {
  const res = await fetch(url, options);

  if (!res.ok) throw new Error("Could not upload exercises");

  const data = await res.json();

  return data;
}
