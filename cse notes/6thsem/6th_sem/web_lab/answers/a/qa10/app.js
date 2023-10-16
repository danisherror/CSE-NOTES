// const express = require('express');
// const app = express();
// const port = 3000;

// // Custom Logger Middleware
// const loggerMiddleware = (req, res, next) => {
//   console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
//   next();
// };

// // Custom Visitor Counter Middleware
// const visitorCounterMiddleware = (req, res, next) => {
//   let count = req.cookies.visitCount || 0;
//   count++;
//   res.cookie('visitCount', count, { maxAge: 3600000 }); // Cookie expires after 1 hour
//   console.log(`Visitor Count: ${count}`);
//   next();
// };

// // Register Middleware
// app.use(express.json());
// app.use(loggerMiddleware);
// app.use(visitorCounterMiddleware);

// // Routes
// app.get('/', (req, res) => {
//   res.send('Welcome to the website!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require("express");
const app = express();

var count = 0;

function counter(req, res, next) {
    count++;
    console.log("Visit count: " + count);
    next();
}

function logger(req, res, next) {
    var timeStamp = new Date().toLocaleString();
    var url = req.protocol + "://" + req.get("host") + req.originalUrl;
    console.log(timeStamp + " " + url);
    console.log("Method: " + req.method);
    next();
}

app.use(counter);
app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => console.log("Server started at port 3000"));