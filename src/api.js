//TODO: Proxy through server
// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:8000');

// function subscribeToTimer(cb) {
//     socket.on('timer', timestamp => cb(null, timestamp));
//     socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer }

// function subscribeToTransportData(cb) {
//     socket.on('GotMessage', timestamp => cb(null, timestamp));
//     socket.emit('subscribeToTransportData');
// }

import RTM from 'satori-rtm-sdk';

const endpoint = "wss://open-data.api.satori.com";
const appKey = 'Bb6d6C9c368fd8Cde3773F85574e2c7a';
const channel = "transportation";

const client = new RTM(endpoint, appKey);

function subscribeToTransportData(cb) {
    // client.close();
    client.on('enter-connected', function () {
        console.log('Connected to Satori RTM!');
    });

    const subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {
        'filter': 'select * from `transportation` where header.`user-data`=\'trimet\''
    });

    subscription.on('rtm/subscription/data', function (pdu) {
        pdu.body.messages.forEach(function (msg) {
            cb(null, msg);
        });
    });

    client.start();
}

export { subscribeToTransportData }