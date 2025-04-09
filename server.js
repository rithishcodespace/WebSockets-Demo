const webSocket = require("ws");
const WebSocketServer = new webSocket.Server({ port : 8080 }); //it create a server with websocket protocol

WebSocketServer.on("connection", ws =>{ // this functon will be called whenever a new client give a request to the server
    console.log(`New client connected, Total no.of Clients: ${WebSocketServer.clients.size}`)

    WebSocketServer.send("Welcome to the Websocket server") // sends message to the clients

    //sends a message to the client when receiving a message from them // this will send a reply to the incoming messages from the client
    WebSocketServer.on("message",(message)=>{
        console.log(`Received message from the client: ${message}`);
        WebSocketServer.send(`Server response: you sent -> ${message}`);
    });

    setInterval(()=>{
        console.log(`Totally there are ${WebSocketServer.clients.size} clients connected to the server`),5000
    });
})