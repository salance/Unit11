//Name: Sean Lance
//Filename: websvr.js
//Unit 11 Assignment
/* Problem #3: Submit Screenshots
Problem #3: Submit file websvr.js
  Using Node.js http module, write a Node.js script that starts a simple
  HTTP Server. The HTTP server should run on port 8001, and writes back to client:

  1. response.writeHead(200, {'Content-Type': 'text/html'});

  2. response.write('Hello World, my name is John Smith'); //Fill in your name

    Submit: Create a Unit11 GitHub Repository. Upload Unit 11 Assignment
      to Unit11 Repository. Submit URL to Repository to Canvas.
*/

// Declare and initialize variale for the http server.
var http = require('http');

// Configure HTTP server to respond with a message
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World, my name is Sean Lance");
  response.end();
});

// Listen on port 8001 - View HTML at web URL: http://127.0.0.1
server.listen(8001);

// Display a message in terminal to verify HTTP Server is running
console.log("HTTP Server is running at web URL: http://127.0.0.1:8001/");
