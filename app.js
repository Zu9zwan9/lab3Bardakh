const express = require('express')
const app = express()
const port = process.env.PORT || 80

const fs = require('fs');
var bodyParser = require('body-parser')

const FILE_NAME = 'file.txt';

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

app.post('/save', urlencodedParser, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const content = req.body.data;

    fs.writeFile(FILE_NAME, content, function (err) {
        if (err) return console.log(err);
        console.log("Saved file");
    });
});

app.get('/get', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    fs.readFile(FILE_NAME, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.send(data);
    });
});


app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
