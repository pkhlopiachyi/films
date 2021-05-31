class WsInterface {
    constructor(port, rooms = {}) {
        this.port  = port;
        this.rooms = rooms;
        this.connectionsMap = {};
    }

    init() {
        throw new Error('Not implemented in base class');
    }
    onConnection(connection) {
        throw new Error('Not implemented in base class');
    }
    subscribe(socket, rooms) {
        throw new Error('Not implemented in base class');
    }
    unsubscribe(socket, rooms) {
        throw new Error('Not implemented in base class');
    }
    add(subject_id, socket) {
        throw new Error('Not implemented in base class');
    }
    remove(subject_id) {
        throw new Error('Not implemented in base class');
    }
    sendPublicEvent(room, event, payload) {
        throw new Error('Not implemented in base class');
    }
    sendPrivateEvent(room, event, payload, subject_id) {
        throw new Error('Not implemented in base class');
    }
}

module.exports = WsInterface;
