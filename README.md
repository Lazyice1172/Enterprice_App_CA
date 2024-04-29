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

Finally, you can open your browser and go to http://localhost:5173
Due to there have lots of data may take some time to load


## Description
## How Client work

The App.jsx takes users to different pages based on url
All of these pages and inside off the pages file
- Home
- CreateCategories
- DeleteCategories
- EditCategories
- ShowCategories

These Web pages use AJAX to send a RESTful API to the server side and get the data
These data will display all the screen

## How Server work
The server connect to the MongoDB database URL mongodb://localhost:27017 and PORT 5050
These information stored in config.env

When you turn on the server with npm run dev
This code will go to server.js first and import categories.js
The categories.js import connection.js

The connection.js will connect to MongoDB Compass with the URL and export the database is going to use 'Categories'
The categories.js contain all the route the handle the request from client
Finally, The server.js will open a 5050 PORT to listen the client