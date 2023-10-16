// const express = require('express');
// const app = express();
// const port = 3000;

// // Set up routes
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });

// app.get('/registration', (req, res) => {
//   res.send('Registration Page');
// });

// app.get('/announcements', (req, res) => {
//   res.send('Announcements Page');
// });

// app.get('/contact', (req, res) => {
//   res.send('Contact Page');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require('express');
const app = express();

app.get("/", (req, res) => {
    var text = `this is Home page <br>
    <a href='/registration'>Registration</a> <br>
    <a href='/announcements'>Announcements</a> <br> 
    <a href='/contact'>Contact</a> <br>
    `;
    res.header("Content-Type", "text/html");
    res.send(text);
})

app.get("/registration", (req, res) => {
    var text = `this is Registration page <br>
    <a href='/'>Home</a> <br>
    <a href='/announcements'>Announcements</a> <br> 
    <a href='/contact'>Contact</a> <br>
    `;
    res.header("Content-Type", "text/html");
    res.send(text);
})

app.get("/announcements", (req, res) => {
    var text = ` this is Announcements page <br>
    <a href='/'>Home</a> <br>
    <a href='/registration'>Registration</a> <br> 
    <a href='/contact'>Contact</a> <br>
    `;
    res.header("Content-Type", "text/html");
    res.send(text);
})

app.get("/contact", (req, res) => {
    var text = `this is Contact page <br>
    <a href='/'>Home</a> <br>
    <a href='/registration'>Registration </a> <br> 
    <a href='/announcements'>Announcements</a> <br>
    `;
    res.header("Content-Type", "text/html");
    res.send(text);
})

app.listen(3000, () => console.log("Server started at port 3000"));