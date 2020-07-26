let app = require("express")();
let server = require("http").createServer(app);
let io = require("socket.io")(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



io.on('connection', (socket) => {
    //클라이언트의 정보가 수신되면
    socket.on('login', (data) => {
        console.log('client logged-in:\n name:' + data.name + '\n userid:' + data.userid);
        //클라이언트의 정보를 저장
        socket.name = data.name;
        socket.userid = data.userid;
        //접속된 모든 클라이언트에게 메시지를 전송
        io.emit('login', data.name);
    })

    //클라이언트로부터의 메시지가 수신되면
    socket.on('chat', (data) => {
        console.log('Message from %s: %s', socket.name, data.msg);

        let msg = {
            from: {
                name: socket.name,
                userid: socket.userid
            },
            msg: data.msg
        };

        //메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
        socket.broadcast.emit('chat', msg);

        // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
        // socket.emit('s2c chat', msg);

        // 접속된 모든 클라이언트에게 메시지를 전송한다
        // io.emit('s2c chat', msg);

        // 특정 클라이언트에게만 메시지를 전송한다
        // io.to(id).emit('s2c chat', data);
    });

    // force client disconnect from server
    socket.on('forceDisconnect', function () {
        socket.disconnect();
    })

    socket.on('disconnect', function () {
        console.log('user disconnected: ' + socket.name);
    });
})
server.listen(3000, () => {
    console.log('socket IO server listening on port 3000');
})