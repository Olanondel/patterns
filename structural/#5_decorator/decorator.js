class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) { // #5_decorator
    server.isAWS = true
    server.awsInfo = function () {
        return server.url
    }

    return server
}

const server1 = aws(new Server('12.34.56.78', '8080'))
console.log(server1.isAWS);
console.log(server1.awsInfo());
