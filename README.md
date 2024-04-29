# EnterPrise Application CA

Student No : c20348256



## Introduction
This project is a Simple Web application list all Categories in database
The Website provide Search, Create, Update and Delete function with the data
### Technologies Used
Frontend
- Vite
- React
- TailwindCSS
- AJAX

Backend
- NodeJS
- ExpressJS
- MongoDB

## How to Run it
Open your terminal and enter some commands

First, you need to install all node_modules in server
```
cd server

npm i

npm run start
```

First, you need to install all node_modules in client
```
cd client

npm i

npm run dev
```

Finally, you can open your browser and go to http://localhost:8000
Due to there have lots of data may take some time to load


## Description

### How the Front-End Develops and Functions

The front-end utilizes Vite to create a React app.

Its utilization of native ES modules and on-demand compilation results in faster development server startup times, quicker module resolution, and faster HMR. These optimizations can lead to a smoother and more efficient development experience.

The primary component, App.jsx, manages routing and directs users to the appropriate components:

- Home 
- CreateCategories
- DeleteCategories
- EditCategories
- ShowCategories

The Home page displays data from the database in a list and provides a search function to filter the data.

It employs axios to create an AJAX GET request to the backend using the URL to retrieve data from MongoDB.

Data is stored in categories and displayed using map.

The rest of the pages follow a similar pattern to the Home page, utilizing different RESTful APIs to send AJAX requests to the backend for retrieving or uploading data.


### How the Back-End Develops and Functions

The back-end is developed with ExpressJS.

- connection.js connects to the MongoDB database.
- categories.js handles all routes from the client and uploads or retrieves data from MongoDB.
- server.js opens port 5050 to listen for requests.

The cors Node module allows receiving requests from clients with different ports.
