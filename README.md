Steps to Run My React App:

Clone and Unzip: Clone the repository or unzip the project folder in your desired location. Use git clone <repository-url> if cloning.

Install Node and npm: Ensure Node.js and npm are installed. Check their versions with:

bash
Copy code
node -v
npm -v
Install Dependencies: Run the following command to install both dependencies and devDependencies:

bash
Copy code
npm install
Whitelist IP Address:

For access to the MongoDB server, provide your IP address for whitelist inclusion. Email your IP address to udaysharma1501@gmail.com.
Note: 0.0.0.0/0 allows access from any IP, which is generally not recommended for production environments.
Run the Application:

Ensure concurrently is installed. Run:
bash
Copy code
npm run dev
This will start both the client and server simultaneously.
Access the App: If the dev server doesn’t automatically open, navigate to:

arduino
Copy code
http://localhost:3000
Use the App: You can now register, log in, create, fetch, and delete goals.
