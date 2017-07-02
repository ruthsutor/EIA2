import Http = require("http");
import Url = require("url");
import Database = require("./Database");

console.log("Server starting");

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);



function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");
    let query: AssocStringString = Url.parse(_request.url, true).query;
    var command: string = query["command"];

    switch (command) {
        case "insert":
            let student: StudentData = {
                name: query["name"],
                firstname: query["firstname"],
                matrikel: parseInt(query["matrikel"])
            };
            Database.insert(student);
            respond(_response, "storing data");
            break;
        case "find":
            Database.findAll(function(json: string): void {
                respond(_response, json);
            });
        case "findOne":
        let find: Object;
            if(query["searchfor"] = "martikel"){
                find = { matrikel: parseInt(query["matrikel"]) };
                }
            if(query["searchfor"] = "name"){
                find = { name: parseInt(query["name"]) };
                }
            Database.findOne(find, function(json: string): void {
                    respond(_response, json);
                });
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}