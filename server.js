const io = require('socket.io')();

const RTM = require("satori-rtm-sdk");
const endpoint = "wss://open-data.api.satori.com";
const appKey = 'Bb6d6C9c368fd8Cde3773F85574e2c7a';
const channel = "transportation";
const satoriClient = new RTM(endpoint, appKey);


io.on('connection', (client) => {
    client.on('subscribeToTransportData', (req) => {
        satoriClient.on('enter-connected', () => {
            console.log('Connected to Satori RTM!');
        });

        let subscription = satoriClient.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {
            'filter': 'select * from `transportation` where header.`user-data`=\'trimet\''
        });

        subscription.on('rtm/subscription/data', (pdu) => {
            pdu.body.messages.forEach((msg) => {
                console.log('Got message:', JSON.stringify(msg));
                client.emit('GotMessage', JSON.stringify(msg));
            });
        });
    })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);