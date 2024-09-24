import express from "express";
import { parse } from "node-html-parser";

const app = express();
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const httpRequest = await fetch("https://zsem.edu.pl/plany/plany/o14.html");

  let websiteData = await httpRequest.text();
  websiteData.replace("<!DOCTYPE html>", "");

  const root = parse(websiteData);
  const hours = root.querySelectorAll(".g");
  const lessons = root.querySelectorAll(".l");

  const schedule = {
    days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    hours: [],
  };

  hours.forEach((hour) => {
    schedule.hours.push(hour.innerHTML);
  });

  schedule.days.forEach((day, index) => {
    schedule[day] = [];
    for (let i = index; i < lessons.length; i += 5) {
      schedule[day].push(lessons[i].textContent.replace("\n", "<br>"));
    }
  });

  let responseHTML =
    "<head><meta name='viewport' content='width=device-width,initial-scale=1.0'><link rel='stylesheet' href='index.css'><script src='index.js' defer></script></head>";
  responseHTML += `<div class='container'><h1>Weekly Schedule</h1>`;
  responseHTML += `<table class='schedule'><tr><th>hour</th>`;
  schedule.days.forEach((day) => {
    responseHTML += `<th>${day}</th>`;
  });
  responseHTML += `</tr>`;
  for (let i = 0; i < schedule["monday"].length; i++) {
    responseHTML += `<tr>`;
    responseHTML += `<td data-id='hours'>${schedule.hours[i]}</td>`;
    for (let j = 0; j < schedule.days.length; j++) {
      responseHTML += `<td data-id='number-${j}'><span data-id='time-to-start'></span>${
        schedule[schedule.days[j]][i]
      }<br><span data-id='time-to-end'></span></td>`;
    }
    responseHTML += `</tr>`;
  }
  responseHTML += `</table></div>`;

  res.send(responseHTML);
});

app.listen(80);
