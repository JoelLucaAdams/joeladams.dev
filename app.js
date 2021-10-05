const { readFileSync, WriteFileSync } = require('fs');

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(express.json())

app.get('/', (req, res) => {

    res.sendFile('public/views/index.html', {root: __dirname });
}); 

app.get('/navigation', (req, res) => {

    res.sendFile('public/views/navigation.html', {root: __dirname });
}); 

app.get('/about', (req, res) => {

    res.sendFile('public/views/about.html', {root: __dirname });
});

app.get('/api', (req, res) => {

    res.sendFile('public/views/api.html', {root: __dirname });
});

app.get('/cv', (req, res) => {

    res.sendFile('public/views/cv.html', {root: __dirname });
}); 

app.get('/cv/pdf', (req, res) => {

    res.sendFile('public/Joel Adams CV.pdf', {root: __dirname });
}); 

// app.get('/vs-code-image.png', (req, res) => {

//     res.sendFile('public/images/vs-code-image.png', {root: __dirname });
// }); 

// app.get('/infinite-road.jpg', (req, res) => {

//     res.sendFile('public/images/infinite road.jpg', {root: __dirname });
// }); 

// app.get('/lake.jpg', (req, res) => {

//     res.sendFile('public/images/Lake_4.jpg', {root: __dirname });
// }); 

// app.get('/hut.jpg', (req, res) => {

//     res.sendFile('public/images/Lake_hut_ 2.jpg', {root: __dirname });
// }); 

app.listen(8080, () => console.log('http://localhost:8080/'));