const socketio              = require('socket.io');
const WsInterface           = require('./WrapperInterface');

class SocketIoWrapper extends WsInterface {
    constructor(port, rooms = {}) {
        super(port, rooms);

        this.films = null;
        this.wss = null;
    }

    init() {
        const socketServer = socketio(this.port, { path: '/films/socket.io' });

        this.wss  = socketServer;
        this.films = this.wss.of('/films');

        this.films.on('connection', this.onConnection.bind(this));

        return this.wss;
    }

    async onConnection(connection) {
        console.log('user connected');
    }

    sendEvent(event, message) {
        this.films.emit(event, message);
    }

    disconnect(socket) {
        console.log('user disconnected');
        socket.disconnect();
    }
}


module.exports = new SocketIoWrapper(5001);
