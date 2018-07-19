//Example POST method invocation
var Client = require('node-rest-client').Client;
const fs = require('fs');
var serialize = require('serialize-javascript');

 
var client = new Client();

 

// set content-type header and data as json in args parameter
var args = {
    data: { },
    headers: { "Content-Type": "application/json", "Authorization": "Bearer b4C_9Q64O5DEORNJHKe9m33lJz89g3BL4fkA6vvXmLl4Jbdb26Cob30iraWWZin155XbEyInpYuHefWtvic5gcShqkexRbuIsk6SWjmJH6YzOGlRVxthlDEbSJqqA37mlXLSLfoUIq98pHV7tvQttT_04naLQ1R5E98Vy6uhj92zODx2DTULND1mm9GkAYLLqrD4W6UDACFlufOw-ekICV7q1bvvHOd7vBfS07pII1OuDQk2jXhBoVg9pgN5hu1sHBwIL11LWsvS6mRn3yIi2pawBpn-CgzIM0lAUMXRI5-s3VOCoqsJUhSUcUI05G2VWntua6Vxv4vZbihgyc2TIC0UF3u_z39wkeP4PgVRTtYEVMIB_6naICeByzCLHdnv1KEkNhzSba0ac1e4ry19BDGTw3XIbup5nXNVH3Dbjh2YXWkf7Nnr_BaJfQe4OV9R0iL01C1OoIKDgDP7WAZZ0g", "Referer": "http://10.13.67.167:88/profile/NewsList"}};
client.post("http://10.13.67.167:88/data/EDEBOWebApi/api/news/list", args, function (data, response) {
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
 
// registering remote methods
//client.registerMethod("postMethod", "http://remote.site/rest/json/method", "POST");
 
//client.methods.postMethod(args, function (data, response) {
    // parsed response body as js object
    //console.log(data);
    // raw response
    //console.log(response);
//});