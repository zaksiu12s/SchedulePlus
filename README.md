# Schedule+

App for displaying schedule in upgraded version

How to setup:

1. Prerequisites:
   - nodeJS installed
   - npm installed
2. Download all the files.
3. Open folder in terminal.
4. type npm i to install all the dependencies.
5. to check if everything works type npm run app
6. The console will show if the server is running and the current port (default should be localhost:4000)

Npm commands:

- npm run app runs the main index file server with nodemon
- npm run build builds the typescript
- npm run dev runs both app and build commands at the same time (should be used when developing the backend)

Example requests:

- http://localhost:4000/api/v1/getClassTimetable?classTimetableLink=o15.html
- http://localhost:4000/api/v1/getClassBranches
