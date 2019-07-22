import { IPublisher } from '../publish/publisher';

export interface ISubscriber {
    name: string;
    func: (data: any) => void;
}

export class SubscriberService {
    subscribers: ISubscriber[];
    
    constructor() {
        this.subscribers = [];
    }
    
    public add(subscriber: ISubscriber) {
        this.subscribers.push(subscriber);
    }
    
    public remove(subscriber: ISubscriber) {
        var subscriberIndex = this.subscribers.indexOf(subscriber);
        if (subscriberIndex >= 0) {
            this.subscribers.splice(subscriberIndex, 1);
        }
    }
    
    public publish(publisher: IPublisher) {
        this.subscribers.forEach(sub => {
           if (sub.name === publisher.name) {
               sub.func(publisher.data);
           } 
        });
    }
};

export let subscriberService = new SubscriberService();