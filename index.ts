import * as http from 'http';

const port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT) : 8000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers, null, 2));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
