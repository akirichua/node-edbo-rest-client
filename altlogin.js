var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/login.db'); 

// form data
var postData = querystring.stringify({
      'grant_type' : 'password',
      'username' : argv.l+'@edbo.gov.ua',
      'password' : argv.p,
      'app_key' : 'PUT_APP_KEY',
      'version' : 'PUT_VERSION_OR_REMOVE_VARIABLE'
});
//console.log(process.argv);
 //console.log(postData);
// request option
var options = {
      host: 'edbo.gov.ua',
      port: '80',
      path: '/data/EDEBOWebApi/oauth/token',
      method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};
 
// request object
var req = http.request(options, function (res) {
  var result = '';
  res.on('data', function (chunk) {
    result += chunk;
  });
  res.on('end', function () {
        var loginsbd = JSON.parse(result);
        db.serialize(function() {

          //db.run('CREATE TABLE login (id TEXT, variab TEXT)');
            //var stmt = db.prepare('INSERT INTO login VALUES("login","")');
          var stmt = db.prepare('UPDATE login SET variab=(?) WHERE id="login"');
          stmt.run(loginsbd["access_token"]);
          stmt.finalize();

          //db.each('SELECT id, variab FROM login WHERE id="login"', function(err, row) {
            //console.log(row.id + ': ' + row.variab);
          //});
        });

        db.close();
        fs.writeFile(`data/login.json`, JSON.stringify(result, null, 2), function (err) {
          if (err) {
            return console.log("Error occurred while saving file: ", err);
        }
        });
      //console.log(result);
      }) 
  res.on('error', function (err) {
    console.log(err);
  })
});
 
// req error
req.on('error', function (err) {
  console.log(err);
});
 
//send request witht the postData form
req.write(postData);
req.end();

