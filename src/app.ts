import express from 'express';
import { AddressInfo } from 'net';

const app = express()

app.get('*', (req, res) => {
    console.log(req.url)
    res.send('hello from ts')
})

const server = app.listen(3000, () => {
    var host = (server.address() as AddressInfo).address;
    var port = (server.address() as AddressInfo).port;
    console.log(server.address())

    console.log('Example app listening at http://%s:%s', host, port);
})