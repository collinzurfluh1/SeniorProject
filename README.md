# Senior Project Getting Started
## You need to run BOTH the Backend AND the Frontend

Navigate to Backend in cmd or terminal and run

### `nodemon index.js`

This runs the backend server.

Navigate to pool-party in cmd or terminal and run

### `npm run start`

This launches the Frontend at http://localhost:3000/
This will automatically refresh when you make an update and save on your machine.

# You need to install some modules into Backend AND pool-party

Navigate to Backend in cmd or terminal and run

### `npm i`

Navigate to pool-party in cmd or terminal and run

### `npm i`

# You need to download MYSQL
https://www.mysql.com/downloads/

# You need to download MYSQL Workbench
https://www.mysql.com/products/workbench/

Once downloaded you need to click the plus icon next to MySQL Connections. Set host name to 127.0.0.1. Set port to 3306. Set username to root. Set password to password. Create a database called auth_db. Create a blank table called users.

# To build for production environment

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
