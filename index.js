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
      option.classList.add("bg-green-400");
      option.classList.add("text-base");

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

  timetableData[dayOfTheWeek].forEach((lesson, index, array) => {
    if (lesson.wholeName != "&nbsp;") {
      const row = document.createElement("tr");
      row.classList.add("border-2");
      row.classList.add("border-green-400");
      const title = document.createElement("td");
      const time = document.createElement("td");
      time.classList.add("px-3");
      const classroom = document.createElement("td");
      classroom.classList.add("px-3");
      const classT = document.createElement("td");
      const teacher = document.createElement("td");

      classT.innerText = lesson.classData ? lesson.classData.shortName : "";
      if (lesson.teacherData) {
        teacher.innerText = Array.isArray(lesson.teacherData)
          ? lesson.teacherData[0].shortName
          : lesson.teacherData.shortName;

        teacher.classList = Array.isArray(lesson.teacherData)
          ? lesson.teacherData[0].link
          : lesson.teacherData.link;
      }

      title.innerText = Array.isArray(lesson.subject)
        ? lesson.subject[0]
        : lesson.subject;
      time.innerText = lesson.wholeHour.split("-")[0];
      if (lesson.classroomData) {
        classroom.innerText =
          Array.isArray(lesson.classroomData) > 0
            ? lesson.classroomData[0].shortName
            : lesson.classroomData.shortName;
      }
      if (time.innerText.length == 4) {
        time.innerText = "‎ " + time.innerText;
      }

      const currentDate = new Date();
      currentDate.setSeconds(0);

      const startDate = new Date(currentDate.getTime());
      startDate.setHours(lesson.wholeHour.split("-")[0].split(":")[0]);
      startDate.setMinutes(lesson.wholeHour.split("-")[0].split(":")[1]);

      const endDate = new Date(currentDate.getTime());
      endDate.setHours(lesson.wholeHour.split("-")[1].split(":")[0]);
      endDate.setMinutes(lesson.wholeHour.split("-")[1].split(":")[1]);

      if (index >= 1) {
        const prevLessonEnd = new Date(currentDate.getTime());
        prevLessonEnd.setHours(
          array[index - 1].wholeHour.split("-")[1].split(":")[0]
        );
        prevLessonEnd.setMinutes(
          array[index - 1].wholeHour.split("-")[1].split(":")[1]
        );

        if (prevLessonEnd <= currentDate && currentDate <= startDate) {
          row.classList.add("bg-green-400");
        }
      }

      if (startDate < currentDate && endDate > currentDate) {
        row.classList.add("bg-green-400");
      }

      teacher.addEventListener("click", (e) => {
        document.querySelector('[title="branchSelect"]').value =
          e.currentTarget.classList[0];

        changeBranchTimetable();
      });

      row.appendChild(time);
      row.appendChild(title);
      row.appendChild(classT);
      row.appendChild(teacher);
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
