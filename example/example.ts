//import * as cljs from 'cloudjs';


/*import { Server } from '../src/server';
import * as IO from 'socket.io';

let subscriberFunc = (data: any) => {
    console.log('what is my message? ' + data);
};

var jsServer = new Server();
jsServer.options({
    host: 'localhost',
    port: '9876',
    routes: [{
        path: '/', method: 'GET', handler: (request, reply) => {
            jsServer.publish({ name: 'sub1', data: 'this is my message' });
            return reply('this is content i want to show');
        }
    }]
});

jsServer.subscribe([
    { name: 'sub1', func: subscriberFunc }
])

jsServer.start();

var socket = IO();*/