fetchAllBranchesData();

async function fetchAllBranchesData() {
  try {
    const response = await fetch(
      "https://scheduleplus-production.up.railway.app/api/v3/allBranches?link=https://zsem.edu.pl/plany/lista.html"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const timetableData = await response.json();
    addBranchesDataSelection(timetableData);
    checkSelection();
    changeBranchTimetable();
  } catch (err) {
    console.log(err);
  }
}

function addBranchesDataSelection(data) {
  const branchesDropdownList = document.querySelector("[title='branchSelect']");
  const branchesDropdownListCategories =
    branchesDropdownList.querySelectorAll("optgroup");

  for (let i = 0; i < data.length; i++) {
    data[i].forEach((branch) => {
      const option = document.createElement("option");
      option.value = branch.link;
      option.innerText = branch.wholeName;

      branchesDropdownListCategories[i].appendChild(option);
    });
  }
}

async function changeBranchTimetable() {
  try {
    const currentBranch = document.querySelector(
      '[title="branchSelect"]'
    ).value;

    localStorage.setItem("selection", currentBranch);

    const response = await fetch(
      `https://scheduleplus-production.up.railway.app/api/v3/specifiedTimetable?link=https://zsem.edu.pl/plany/plany/${currentBranch}&formatAsDays=true`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const timetableData = await response.json();
    createTimetable(timetableData);
  } catch (err) {
    console.log(err);
  }
}

function createTimetable(timetableData) {
  const timetableContainer = document.querySelector("[data-id='timetable']");
  timetableContainer.innerHTML = "";

  const currentDate = new Date();
  const dayOfTheWeek = currentDate.getDay() - 1;

  timetableData[dayOfTheWeek].forEach((lesson) => {
    if (lesson.wholeName != "&nbsp;") {
      const row = document.createElement("tr");
      const title = document.createElement("td");
      const time = document.createElement("td");
      const classroom = document.createElement("td");

      title.innerText = lesson.subject;
      time.innerText = lesson.wholeHour;

      row.appendChild(title);
      row.appendChild(time);
      row.appendChild(classroom);

      timetableContainer.appendChild(row);
    }
  });
}

function checkSelection() {
  if (localStorage.getItem("selection")) {
    document.querySelector('[title="branchSelect"]').value =
      localStorage.getItem("selection");
  }
}
