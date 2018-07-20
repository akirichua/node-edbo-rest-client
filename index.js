//Example POST method invocation
var Client = require('node-rest-client').Client;
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/login.db'); 
var client = new Client();
global.token = "java is shit";

// set content-type header and data as json in args parameter

        db.each('SELECT id, variab FROM login WHERE id="login"', function (err, row) {           
    var args = {
    data: { },
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + row.variab}};
            client.post("http://edbo.gov.ua/data/EDEBOWebApi/api/news/list", args, function (data, response) {
    // parsed response body as js object 
    fs.writeFile(`data/data.json`, JSON.stringify(data, null, 2), function (err) {
          if (err) {
            return console.log("Error occurred while saving file: ", err);
        }
        console.log(`The file was successfully saved!`);
    });

    //console.log(data);
    // raw response;
    fs.writeFile(`data/response.json`, JSON.stringify(data, null, 2), function (err) {
          if (err) {
            return console.log("Error occurred while saving file: ", err);
        }
        console.log(`The file was successfully saved!`);
    });

    //console.log(response);
});
          });
        db.close();

