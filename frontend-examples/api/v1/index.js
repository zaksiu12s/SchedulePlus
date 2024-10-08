"use strict";

const SERVER_LINK = `http://localhost:4000/api/v1`;

// getting all the class branches with fetch
fetchClassBranches().then(async (classBranches) => {
  console.log(classBranches);
});

async function fetchClassBranches() {
  try {
    const request = await fetch(`${SERVER_LINK}/getClassBranches`);
    const data = await request.json();

    return data.data;
  } catch (error) {
    alert("An error occured");
  }
}

async function fetchClassTimetable(classLink) {
  try {
    const request = await fetch(
      `${SERVER_LINK}/getClassTimetable?classTimetableLink=${classLink}`
    );
    const data = await request.json();

    return data.data;
  } catch (error) {
    alert("An error occured");
  }
}
