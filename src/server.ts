import * as Hapi from 'hapi';
import * as Log from './core/logger';
import { IPublisher } from './core/publish/publisher';
import { ISubscriber, subscriberService } from './core/subscribe/subscriber';
import { IRequest } from './core/requests/request';
import { IReply } from './core/requests/reply';

const Inert = require('inert');

var server = new Hapi.Server();

export interface IServer {
    start: () => void;
    stop: (timeout?: number) => void;
    options: (settings: IServerSettings) => void;
    
    subscribe: (subscriber: ISubscriber[]) => void;
    publish: (publisher: IPublisher) => void;
    
    registerRequest: (request: IRequest) => IReply;
}

export interface IServerSettings {
    host: string;
    port: string;
    filesPath: string;
}

export class Server implements IServer {    
    serverSettings: IServerSettings;
    
    public options(settings: IServerSettings) : void {
        this.serverSettings = settings;
    }
    
    public start() : void {         
        server.connection({
           address: this.serverSettings.host,
           port: this.serverSettings.port,
           routes: {
               files: {
                    relativeTo: this.serverSettings.filesPath     
               }
           }
        });
        
        server.register(Inert, () => {});
        
        server.route({
            method: 'GET',
            path: '/{filename}',
            handler: function (request, reply) {
                reply.file(request.params['filename']);
            }
        });
        
        //server.route(this.serverSettings.routes);
        
        server.start((error) => {
            if (error)
                throw Log.error(error);
            
            Log.info('Server running at: ' + server.info.uri);
        });   
    }
    
    public stop(timeout?: number) : void {
        Log.info('Server is stopping...');
        server.stop({ timeout });
    }
    
    public subscribe(subscribers: ISubscriber[]) : void {
        subscribers.forEach(sub => {
           subscriberService.add(sub);
           Log.plain('Registering subscriber: ' + sub.name);
        });
    }
    
    public publish(publisher: IPublisher) : void {
        Log.info('PUBLISH: ' + publisher.name);
        subscriberService.publish(publisher);
    }
    
    public registerRequest(request: IRequest) : IReply {
        return null;
    }
}   