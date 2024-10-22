async function fetchData() {
  try {
    const response = await fetch(
      "https://scheduleplus-production.up.railway.app/api/v3/allBranches?link=https://zsem.edu.pl/plany/lista.html"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const timetableData = await response.json();
    console.log(timetableData);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
