Steps to run my goal application on your machine:

1. clone and unzip in desired folder

2. make sure that node and npm are installed by running
      node -v
      npm -v
   in the terminal of root directory

3. to install the project dependencies - both the dependencies as well as the devDependencies (list available in package.json) - run
     npm install
   in the terminal of root directory

4. '0.0.0.0/0' being added as an ip in my whitelist provides access to all ips 

// 4.1. request to get your ip address permanently added in the whitelist of my atlas mongodb server ip address list - mail me your ip address at udaysharma1501@gmail.com

5. run
      npm run dev
   in root directory terminal to (concurrently must be installed to simultaneously run client and server) run the app in your opened broswer - npm install concurrently must be installed

6. if the dev server doesnt automatically open it - go to yoru desired browser and navigate to 'http://localhost:3000'

7. congratulations - you can now register and login as a user AND create, fetch and delete your desired goals. 
