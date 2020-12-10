const WebSocketEventWrapper = require('websocket-event-wrapper');

const server = new WebSocketEventWrapper({
    port: process.env.PORT,
    server: require('http').createServer().listen(5000),
    onConnect: () => console.log(`Client connected`)
});

server.addEventListener(message => {
    console.log(`Message received: ${JSON.stringify(message)}`);

    server.broadcast(JSON.stringify(message));
});
