var http = require("http");

function onRequest(req, res){
	console.log('Request Received!!!');
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("Hello World");
	res.end();
};

http.createServer(onRequest).listen(8888);
console.log("Server Started!!!...");
