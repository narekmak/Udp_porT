var SRC_PORT = 6025;
var PORT = 6024;
var MULTICAST_ADDR = '239.255.255.250';
var dgram = require('dgram');
var server = dgram.createSocket({type:'udp4',reuseAddr:true});

server.bind(SRC_PORT, function () {
    setInterval(multicastNew, 5000);
});

function multicastNew() {
    var message = new Buffer("Multicast message!");
    server.send(message, 0, message.length, PORT, MULTICAST_ADDR, function () {
        console.log("Sent '" + message + "'");
    });
}
