let hourElements = document.querySelectorAll("[data-id='hours']");

removeNonExistentLessons(hourElements);
highlightCurrentLesson();
setInterval(highlightCurrentLesson, 500);

function highlightCurrentLesson() {
  const currentTime = new Date();
  currentTime.setDate(2);
  currentTime.setHours(12);
  currentTime.setMinutes(5);
  currentTime.setSeconds(0);

  const currentLesson = getCurrentLesson(currentTime);
  console.log(currentLesson);

  // hourElements[index].parentElement
  //   .querySelectorAll("td[data-id^='number'")
  //   .forEach((element) => {
  //     element.style.backgroundColor = "transparent";
  //     element.querySelector("span[data-id='time-to-end']").innerText = "";
  //   });

  // highlight lesson element
  currentLesson.style.backgroundColor = "yellow";

  // let timeToLessonEnd = hour.end.getTime() - currentTime.getTime();
  // let minutesToLessonEnd = Math.floor(timeToLessonEnd / 1000 / 60);
  // let secondsToLessonEnd = timeToLessonEnd / 1000 - minutesToLessonEnd * 60;

  // currentLesson.querySelector(
  //   "span[data-id='time-to-end']"
  // ).innerText = `Do końca lekcji: ${minutesToLessonEnd}:${
  //   secondsToLessonEnd > 9 ? secondsToLessonEnd : "0" + secondsToLessonEnd
  // }`;
}

function getCurrentLesson(time) {
  let currentLesson = null;

  const currentTime = time;
  const hours = getScheduleHours(hourElements, currentTime);

  if (currentTime.getDay() >= 6 || currentTime.getDay() == 0) {
    return;
  }
  for (let i = 0; i < hours.length; i++) {
    if (!hours[i + 1]) {
      continue;
    }

    if (hours[i].start <= currentTime && hours[i].end > currentTime) {
      currentLesson = hourElements[i].parentElement.querySelector(
        `td[data-id='number-${currentTime.getDay() - 1}']`
      );
    }

    if (hours[i + 1].start > currentTime && hours[i].end <= currentTime) {
      currentLesson = hourElements[i + 1].parentElement.querySelector(
        `td[data-id='number-${currentTime.getDay() - 1}']`
      );
    }
  }

  if (/^&nbsp;/i.test(currentLesson.innerHTML)) {
    return;
  }

  return currentLesson;
}

function getScheduleHours(elements, correctionTime) {
  const array = [];

  elements.forEach((element) => {
    let hourText = element.textContent;
    let startTime = hourText
      .substring(0, hourText.search("-"))
      .replace(/ /g, "");
    let endTime = hourText
      .substring(hourText.search("-") + 1, hourText.length)
      .replace(/ /g, "");

    const currentDate = correctionTime;
    const startDate = new Date(currentDate.getTime());
    const endDate = new Date(currentDate.getTime());

    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);
    startDate.setSeconds(0);

    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);
    endDate.setSeconds(0);

    array.push({
      start: startDate,
      end: endDate,
    });
  });

  return array;
}

// removes the hours where there are no lesson every day of the week
function removeNonExistentLessons(elements) {
  elements.forEach((element) => {
    let counter = 0;
    for (let i = 1; i < 6; i++) {
      if (
        /&nbsp;/.test(element.parentElement.querySelectorAll("td")[i].innerHTML)
      ) {
        counter++;
      }
    }

    if (counter == 5) {
      element.parentElement.remove();
    }
  });

  hourElements = document.querySelectorAll("[data-id='hours']");
  return;
}
