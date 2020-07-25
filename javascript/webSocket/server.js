let WebSocketServer = require("ws").Server;

let wss = new WebSocketServer({ port: 3000 });

//연결이 수립되면 클라이언트에 메시지를 전송
wss.on("connection", (ws) => {
    ws.send("hi");
    ws.on("message", (msg) => {
        console.log("Received: %s", msg);
    })
})