## access live website from

https://udays-goalsetter.onrender.com/login

## Steps to run my goal application on your machine:

1. clone and unzip in desired folder

2. make sure that node and npm are installed by running
      `node -v`
      `npm -v`
   in the terminal of root directory
   
2.1. if not installed then - install nodejs and npm (prebuilt version from https://nodejs.org/en/download/prebuilt-installer)

3. to install the project dependencies (list available in package.json) - run
     `npm install`
   in the terminal of root directory
   
4. to install the project dependencies of the frontend (list available in package.json) - run
     `npm install`
   in the terminal of frontend directory (switch to frontend by typing `cd frontend` in root terminal)

4.1. switch back to root folder by typing `cd ..` in the frontend folder before proceeding to next step

5. `0.0.0.0/0` being added as an ip in my whitelist provides access to all ips 

5.1. request to get your ip address permanently added in the whitelist of my atlas mongodb server ip address list - mail me your ip address at udaysharma1501@gmail.com

5. run
      `npm run dev`
   in root directory terminal to run the app in your opened broswer

6. if the dev server doesnt automatically open it - go to yoru desired browser and navigate to 'http://localhost:3000'

7. congratulations - you can now register and login as a user AND create, fetch and delete your desired goals.

TECH USED - MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack, HTML/CSS, JavaScript, JWT (JSON Web Tokens), Redux, Redux Toolkit, Deployed using render.com
