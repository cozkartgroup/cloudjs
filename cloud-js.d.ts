declare module 'cloud-js/src/core/logger' {
	export let error: (msg: string) => void;
	export let info: (msg: string) => void;
	export let warn: (msg: string) => void;
	export let plain: (msg: string) => void;

}
declare module 'cloud-js/src/core/publish/publisher' {
	export interface IPublisher {
	    name: string;
	    data: any;
	}

}
declare module 'cloud-js/src/core/subscribe/subscriber' {
	import { IPublisher } from 'cloud-js/src/core/publish/publisher';
	export interface ISubscriber {
	    name: string;
	    func: (data: any) => void;
	}
	export class SubscriberService {
	    subscribers: ISubscriber[];
	    constructor();
	    add(subscriber: ISubscriber): void;
	    remove(subscriber: ISubscriber): void;
	    publish(publisher: IPublisher): void;
	}
	export let subscriberService: SubscriberService;

}
declare module 'cloud-js/src/core/requests/request' {
	export interface IRequest {
	}

}
declare module 'cloud-js/src/core/requests/reply' {
	export interface IReply {
	}

}
declare module 'cloud-js/src/server' {
	import { IPublisher } from 'cloud-js/src/core/publish/publisher';
	import { ISubscriber } from 'cloud-js/src/core/subscribe/subscriber';
	import { IRequest } from 'cloud-js/src/core/requests/request';
	import { IReply } from 'cloud-js/src/core/requests/reply';
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
	    options(settings: IServerSettings): void;
	    start(): void;
	    stop(timeout?: number): void;
	    subscribe(subscribers: ISubscriber[]): void;
	    publish(publisher: IPublisher): void;
	    registerRequest(request: IRequest): IReply;
	}

}
declare module 'cloud-js/index' {
	import * as CloudJS from 'cloud-js/src/server';
	export let cloudjs: typeof CloudJS;

}
// Type definitions for Node.js v4.x
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>, DefinitelyTyped <https://github.com/borisyankov/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v4.x API                *
*                                               *
************************************************/

interface Error {
    stack?: string;
}


// compat for TypeScript 1.5.3
// if you use with --target es3 or --target es5 and use below definitions,
// use the lib.es6.d.ts that is bundled with TypeScript 1.5.3.
interface MapConstructor {}
interface WeakMapConstructor {}
interface SetConstructor {}
interface WeakSetConstructor {}

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeJS.Process;
declare var global: NodeJS.Global;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

interface NodeRequireFunction {
    (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var require: NodeRequire;

interface NodeModule {
    exports: any;
    require: NodeRequireFunction;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

declare var module: NodeModule;

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (size: Uint8Array): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
};


// Buffer class
interface Buffer extends NodeBuffer {}

/**
 * Raw data is stored in instances of the Buffer class.
 * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
 * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 */
declare var Buffer: {
    /**
     * Allocates a new buffer containing the given {str}.
     *
     * @param str String to store in buffer.
     * @param encoding encoding to use, optional.  Default is 'utf8'
     */
    new (str: string, encoding?: string): Buffer;
    /**
     * Allocates a new buffer of {size} octets.
     *
     * @param size count of octets to allocate.
     */
    new (size: number): Buffer;
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     */
    new (array: Uint8Array): Buffer;
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     */
    new (array: any[]): Buffer;
    /**
     * Copies the passed {buffer} data onto a new {Buffer} instance.
     *
     * @param buffer The buffer to copy.
     */
    new (buffer: Buffer): Buffer;
    prototype: Buffer;
    /**
     * Returns true if {obj} is a Buffer
     *
     * @param obj object to test.
     */
    isBuffer(obj: any): obj is Buffer;
    /**
     * Returns true if {encoding} is a valid encoding argument.
     * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
     *
     * @param encoding string to test.
     */
    isEncoding(encoding: string): boolean;
    /**
     * Gives the actual byte length of a string. encoding defaults to 'utf8'.
     * This is not the same as String.prototype.length since that returns the number of characters in a string.
     *
     * @param string string to test.
     * @param encoding encoding used to evaluate (defaults to 'utf8')
     */
    byteLength(string: string, encoding?: string): number;
    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     *
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     *
     * @param list An array of Buffer objects to concatenate
     * @param totalLength Total length of the buffers when concatenated.
     *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     */
    concat(list: Buffer[], totalLength?: number): Buffer;
    /**
     * The same as buf1.compare(buf2).
     */
    compare(buf1: Buffer, buf2: Buffer): number;
};

/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/
declare module NodeJS {
    export interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

    export interface EventEmitter {
        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;
        once(event: string, listener: Function): this;
        removeListener(event: string, listener: Function): this;
        removeAllListeners(event?: string): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }

    export interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string|Buffer;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }

    export interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Buffer|string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export interface ReadWriteStream extends ReadableStream, WritableStream {}

    export interface Events extends EventEmitter { }

    export interface Domain extends Events {
        run(fn: Function): void;
        add(emitter: Events): void;
        remove(emitter: Events): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;

        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;
        once(event: string, listener: Function): this;
        removeListener(event: string, listener: Function): this;
        removeAllListeners(event?: string): this;
    }

    export interface Process extends EventEmitter {
        stdout: WritableStream;
        stderr: WritableStream;
        stdin: ReadableStream;
        argv: string[];
        execArgv: string[];
        execPath: string;
        abort(): void;
        chdir(directory: string): void;
        cwd(): string;
        env: any;
        exit(code?: number): void;
        getgid(): number;
        setgid(id: number): void;
        setgid(id: string): void;
        getuid(): number;
        setuid(id: number): void;
        setuid(id: string): void;
        version: string;
        versions: {
            http_parser: string;
            node: string;
            v8: string;
            ares: string;
            uv: string;
            zlib: string;
            openssl: string;
        };
        config: {
            target_defaults: {
                cflags: any[];
                default_configuration: string;
                defines: string[];
                include_dirs: string[];
                libraries: string[];
            };
            variables: {
                clang: number;
                host_arch: string;
                node_install_npm: boolean;
                node_install_waf: boolean;
                node_prefix: string;
                node_shared_openssl: boolean;
                node_shared_v8: boolean;
                node_shared_zlib: boolean;
                node_use_dtrace: boolean;
                node_use_etw: boolean;
                node_use_openssl: boolean;
                target_arch: string;
                v8_no_strict_aliasing: number;
                v8_use_snapshot: boolean;
                visibility: string;
            };
        };
        kill(pid:number, signal?: string|number): void;
        pid: number;
        title: string;
        arch: string;
        platform: string;
        memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
        nextTick(callback: Function): void;
        umask(mask?: number): number;
        uptime(): number;
        hrtime(time?:number[]): number[];
        domain: Domain;

        // Worker
        send?(message: any, sendHandle?: any): void;
        disconnect(): void;
        connected: boolean;
    }

    export interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        GLOBAL: Global;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: Function;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: Function;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        clearImmediate: (immediateId: any) => void;
        clearInterval: (intervalId: NodeJS.Timer) => void;
        clearTimeout: (timeoutId: NodeJS.Timer) => void;
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        process: Process;
        root: Global;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc: () => void;
        v8debug?: any;
    }

    export interface Timer {
        ref() : void;
        unref() : void;
    }
}

/**
 * @deprecated
 */
interface NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    toJSON(): any;
    length: number;
    equals(otherBuffer: Buffer): boolean;
    compare(otherBuffer: Buffer): number;
    copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    slice(start?: number, end?: number): Buffer;
    writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
    readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
    readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
    readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
    readUInt8(offset: number, noAssert?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): number;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
    writeInt8(value: number, offset: number, noAssert?: boolean): number;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
    fill(value: any, offset?: number, end?: number): Buffer;
    indexOf(value: string | number | Buffer, byteOffset?: number): number;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
    export var INSPECT_MAX_BYTES: number;
    var BuffType: typeof Buffer;
    var SlowBuffType: typeof SlowBuffer;
    export { BuffType as Buffer, SlowBuffType as SlowBuffer };
}

declare module "querystring" {
    export interface StringifyOptions {
        encodeURIComponent?: Function;
    }

    export interface ParseOptions {
        maxKeys?: number;
        decodeURIComponent?: Function;
    }

    export function stringify<T>(obj: T, sep?: string, eq?: string, options?: StringifyOptions): string;
    export function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): any;
    export function parse<T extends {}>(str: string, sep?: string, eq?: string, options?: ParseOptions): T;
    export function escape(str: string): string;
    export function unescape(str: string): string;
}

declare module "events" {
    export class EventEmitter implements NodeJS.EventEmitter {
        static EventEmitter: EventEmitter;
        static listenerCount(emitter: EventEmitter, event: string): number; // deprecated
        static defaultMaxListeners: number;

        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;
        once(event: string, listener: Function): this;
        removeListener(event: string, listener: Function): this;
        removeAllListeners(event?: string): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }
}

declare module "http" {
    import * as events from "events";
    import * as net from "net";
    import * as stream from "stream";

    export interface RequestOptions {
        protocol?: string;
        host?: string;
        hostname?: string;
        family?: number;
        port?: number;
        localAddress?: string;
        socketPath?: string;
        method?: string;
        path?: string;
        headers?: { [key: string]: any };
        auth?: string;
        agent?: Agent|boolean;
    }

    export interface Server extends events.EventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
        listen(port: number, hostname?: string, callback?: Function): Server;
        listen(path: string, callback?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(cb?: any): Server;
        address(): { port: number; family: string; address: string; };
        maxHeadersCount: number;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ServerRequest extends IncomingMessage {
        connection: net.Socket;
    }
    export interface ServerResponse extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;
        statusCode: number;
        statusMessage: string;
        headersSent: boolean;
        setHeader(name: string, value: string | string[]): void;
        sendDate: boolean;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        write(chunk: any, encoding?: string): any;
        addTrailers(headers: any): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface ClientRequest extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        write(chunk: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface IncomingMessage extends events.EventEmitter, stream.Readable {
        httpVersion: string;
        headers: any;
        rawHeaders: string[];
        trailers: any;
        rawTrailers: any;
        setTimeout(msecs: number, callback: Function): NodeJS.Timer;
        /**
         * Only valid for request obtained from http.Server.
         */
        method?: string;
        /**
         * Only valid for request obtained from http.Server.
         */
        url?: string;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusCode?: number;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusMessage?: string;
        socket: net.Socket;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ClientResponse extends IncomingMessage { }

	export interface AgentOptions {
		/**
		 * Keep sockets around in a pool to be used by other requests in the future. Default = false
		 */
		keepAlive?: boolean;
		/**
		 * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
		 * Only relevant if keepAlive is set to true.
		 */
		keepAliveMsecs?: number;
		/**
		 * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
		 */
		maxSockets?: number;
		/**
		 * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
		 */
		maxFreeSockets?: number;
	}

    export class Agent {
		maxSockets: number;
		sockets: any;
		requests: any;

		constructor(opts?: AgentOptions);

		/**
		 * Destroy any sockets that are currently in use by the agent.
		 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
		 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
		 * sockets may hang open for quite a long time before the server terminates them.
		 */
		destroy(): void;
	}

    export var METHODS: string[];

    export var STATUS_CODES: {
        [errorCode: number]: string;
        [errorCode: string]: string;
    };
    export function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) =>void ): Server;
    export function createClient(port?: number, host?: string): any;
    export function request(options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    export function get(options: any, callback?: (res: IncomingMessage) => void): ClientRequest;
    export var globalAgent: Agent;
}

declare module "cluster" {
    import * as child from "child_process";
    import * as events from "events";

    export interface ClusterSettings {
        exec?: string;
        args?: string[];
        silent?: boolean;
    }

    export interface Address {
        address: string;
        port: number;
        addressType: string;
    }

    export class Worker extends events.EventEmitter {
        id: string;
        process: child.ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any): void;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
    }

    export var settings: ClusterSettings;
    export var isMaster: boolean;
    export var isWorker: boolean;
    export function setupMaster(settings?: ClusterSettings): void;
    export function fork(env?: any): Worker;
    export function disconnect(callback?: Function): void;
    export var worker: Worker;
    export var workers: Worker[];

    // Event emitter
    export function addListener(event: string, listener: Function): void;
    export function on(event: "disconnect", listener: (worker: Worker) => void): void;
    export function on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): void;
    export function on(event: "fork", listener: (worker: Worker) => void): void;
    export function on(event: "listening", listener: (worker: Worker, address: any) => void): void;
    export function on(event: "message", listener: (worker: Worker, message: any) => void): void;
    export function on(event: "online", listener: (worker: Worker) => void): void;
    export function on(event: "setup", listener: (settings: any) => void): void;
    export function on(event: string, listener: Function): any;
    export function once(event: string, listener: Function): void;
    export function removeListener(event: string, listener: Function): void;
    export function removeAllListeners(event?: string): void;
    export function setMaxListeners(n: number): void;
    export function listeners(event: string): Function[];
    export function emit(event: string, ...args: any[]): boolean;
}

declare module "zlib" {
    import * as stream from "stream";
    export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    export interface Gzip extends stream.Transform { }
    export interface Gunzip extends stream.Transform { }
    export interface Deflate extends stream.Transform { }
    export interface Inflate extends stream.Transform { }
    export interface DeflateRaw extends stream.Transform { }
    export interface InflateRaw extends stream.Transform { }
    export interface Unzip extends stream.Transform { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gunzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function unzipSync(buf: Buffer, options?: ZlibOptions): any;

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
    export var Z_NULL: number;
}

declare module "os" {
    export interface CpuInfo {
        model: string;
        speed: number;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
    }

    export interface NetworkInterfaceInfo {
        address: string;
        netmask: string;
        family: string;
        mac: string;
        internal: boolean;
    }

    export function tmpdir(): string;
    export function homedir(): string;
    export function endianness(): string;
    export function hostname(): string;
    export function type(): string;
    export function platform(): string;
    export function arch(): string;
    export function release(): string;
    export function uptime(): number;
    export function loadavg(): number[];
    export function totalmem(): number;
    export function freemem(): number;
    export function cpus(): CpuInfo[];
    export function networkInterfaces(): {[index: string]: NetworkInterfaceInfo[]};
    export var EOL: string;
}

declare module "https" {
    import * as tls from "tls";
    import * as events from "events";
    import * as http from "http";

    export interface ServerOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        crl?: any;
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;
        SNICallback?: (servername: string) => any;
    }

    export interface RequestOptions extends http.RequestOptions{
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
        secureProtocol?: string;
    }

    export interface Agent {
        maxSockets: number;
        sockets: any;
        requests: any;
    }
    export var Agent: {
        new (options?: RequestOptions): Agent;
    };
    export interface Server extends tls.Server { }
    export function createServer(options: ServerOptions, requestListener?: Function): Server;
    export function request(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export function get(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export var globalAgent: Agent;
}

declare module "punycode" {
    export function decode(string: string): string;
    export function encode(string: string): string;
    export function toUnicode(domain: string): string;
    export function toASCII(domain: string): string;
    export var ucs2: ucs2;
    interface ucs2 {
        decode(string: string): number[];
        encode(codePoints: number[]): string;
    }
    export var version: any;
}

declare module "repl" {
    import * as stream from "stream";
    import * as events from "events";

    export interface ReplOptions {
        prompt?: string;
        input?: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
    }
    export function start(options: ReplOptions): events.EventEmitter;
}

declare module "readline" {
    import * as events from "events";
    import * as stream from "stream";

    export interface Key {
        sequence?: string;
        name?: string;
        ctrl?: boolean;
        meta?: boolean;
        shift?: boolean;
    }

    export interface ReadLine extends events.EventEmitter {
        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: (answer: string) => void): void;
        pause(): ReadLine;
        resume(): ReadLine;
        close(): void;
        write(data: string|Buffer, key?: Key): void;
    }

    export interface Completer {
        (line: string): CompleterResult;
        (line: string, callback: (err: any, result: CompleterResult) => void): any;
    }

    export interface CompleterResult {
        completions: string[];
        line: string;
    }

    export interface ReadLineOptions {
        input: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        completer?: Completer;
        terminal?: boolean;
        historySize?: number;
    }

    export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
    export function createInterface(options: ReadLineOptions): ReadLine;

    export function cursorTo(stream: NodeJS.WritableStream, x: number, y: number): void;
    export function moveCursor(stream: NodeJS.WritableStream, dx: number|string, dy: number|string): void;
    export function clearLine(stream: NodeJS.WritableStream, dir: number): void;
    export function clearScreenDown(stream: NodeJS.WritableStream): void;
}

declare module "vm" {
    export interface Context { }
    export interface Script {
        runInThisContext(): void;
        runInNewContext(sandbox?: Context): void;
    }
    export function runInThisContext(code: string, filename?: string): void;
    export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
    export function runInContext(code: string, context: Context, filename?: string): void;
    export function createContext(initSandbox?: Context): Context;
    export function createScript(code: string, filename?: string): Script;
}

declare module "child_process" {
    import * as events from "events";
    import * as stream from "stream";

    export interface ChildProcess extends events.EventEmitter {
        stdin:  stream.Writable;
        stdout: stream.Readable;
        stderr: stream.Readable;
        stdio: (stream.Readable|stream.Writable)[];
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle?: any): void;
        disconnect(): void;
        unref(): void;
    }

    export function spawn(command: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        custom?: any;
        env?: any;
        detached?: boolean;
    }): ChildProcess;
    export function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function exec(command: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string,
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[],
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function fork(modulePath: string, args?: string[], options?: {
        cwd?: string;
        env?: any;
        execPath?: string;
        execArgv?: string[];
        silent?: boolean;
        uid?: number;
        gid?: number;
    }): ChildProcess;
    export function spawnSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): {
        pid: number;
        output: string[];
        stdout: string | Buffer;
        stderr: string | Buffer;
        status: number;
        signal: string;
        error: Error;
    };
    export function execSync(command: string, options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
    export function execFileSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
}

declare module "url" {
    export interface Url {
        href?: string;
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: any; // string | Object
        slashes?: boolean;
        hash?: string;
        path?: string;
    }

    export function parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url;
    export function format(url: Url): string;
    export function resolve(from: string, to: string): string;
}

declare module "dns" {
    export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
    export function lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
    export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
}

declare module "net" {
    import * as stream from "stream";

    export interface Socket extends stream.Duplex {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remoteFamily: string;
        remotePort: number;
        localAddress: string;
        localPort: number;
        bytesRead: number;
        bytesWritten: number;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }

    export var Socket: {
        new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): Socket;
    };

    export interface Server extends Socket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    export function createServer(connectionListener?: (socket: Socket) =>void ): Server;
    export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Socket) =>void ): Server;
    export function connect(options: { port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function connect(port: number, host?: string, connectionListener?: Function): Socket;
    export function connect(path: string, connectionListener?: Function): Socket;
    export function createConnection(options: { port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
    export function createConnection(path: string, connectionListener?: Function): Socket;
    export function isIP(input: string): number;
    export function isIPv4(input: string): boolean;
    export function isIPv6(input: string): boolean;
}

declare module "dgram" {
    import * as events from "events";

    interface RemoteInfo {
        address: string;
        port: number;
        size: number;
    }

    interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }

    export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

    interface Socket extends events.EventEmitter {
        send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
        bind(port: number, address?: string, callback?: () => void): void;
        close(): void;
        address(): AddressInfo;
        setBroadcast(flag: boolean): void;
        setMulticastTTL(ttl: number): void;
        setMulticastLoopback(flag: boolean): void;
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
    }
}

declare module "fs" {
    import * as stream from "stream";
    import * as events from "events";

    interface Stats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }

    interface FSWatcher extends events.EventEmitter {
        close(): void;
    }

    export interface ReadStream extends stream.Readable {
        close(): void;
    }
    export interface WriteStream extends stream.Writable {
        close(): void;
        bytesWritten: number;
    }

    /**
     * Asynchronous rename.
     * @param oldPath
     * @param newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous rename
     * @param oldPath
     * @param newPath
     */
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncate(path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncateSync(path: string, len?: number): void;
    export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chownSync(path: string, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchownSync(path: string, uid: number, gid: number): void;
    export function chmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmodSync(path: string, mode: number): void;
    export function chmodSync(path: string, mode: string): void;
    export function fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmodSync(path: string, mode: number): void;
    export function lchmodSync(path: string, mode: string): void;
    export function stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string): Stats;
    export function lstatSync(path: string): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function linkSync(srcpath: string, dstpath: string): void;
    export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    export function readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string): string;
    export function realpath(path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string, cache: {[path: string]: string}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) =>any): void;
    export function realpathSync(path: string, cache?: { [path: string]: string }): string;
    /*
     * Asynchronous unlink - deletes the file specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous unlink - deletes the file specified in {path}
     *
     * @param path
     */
    export function unlinkSync(path: string): void;
    /*
     * Asynchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     */
    export function rmdirSync(path: string): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: number): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: string): void;
    export function readdir(path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    export function readdirSync(path: string): string[];
    export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function openSync(path: string, flags: string, mode?: number): number;
    export function openSync(path: string, flags: string, mode?: string): number;
    export function utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimesSync(path: string, atime: number, mtime: number): void;
    export function utimesSync(path: string, atime: Date, mtime: Date): void;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function futimesSync(fd: number, atime: Date, mtime: Date): void;
    export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     */
    export function readFileSync(filename: string, encoding: string): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    export function writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
    export function exists(path: string, callback?: (exists: boolean) => void): void;
    export function existsSync(path: string): boolean;
    /** Constant for fs.access(). File is visible to the calling process. */
    export var F_OK: number;
    /** Constant for fs.access(). File can be read by the calling process. */
    export var R_OK: number;
    /** Constant for fs.access(). File can be written by the calling process. */
    export var W_OK: number;
    /** Constant for fs.access(). File can be executed by the calling process. */
    export var X_OK: number;
    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void;
    export function access(path: string, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
    /** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
    export function accessSync(path: string, mode ?: number): void;
    export function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
    }): ReadStream;
    export function createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
    }): WriteStream;
}

declare module "path" {

    /**
     * A parsed path object generated by path.parse() or consumed by path.format().
     */
    export interface ParsedPath {
        /**
         * The root of the path such as '/' or 'c:\'
         */
        root: string;
        /**
         * The full directory path such as '/home/user/dir' or 'c:\path\dir'
         */
        dir: string;
        /**
         * The file name including extension (if any) such as 'index.html'
         */
        base: string;
        /**
         * The file extension (if any) such as '.html'
         */
        ext: string;
        /**
         * The file name without extension (if any) such as 'index'
         */
        name: string;
    }

    /**
     * Normalize a string path, reducing '..' and '.' parts.
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     *
     * @param p string path to normalize.
     */
    export function normalize(p: string): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: any[]): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: string[]): string;
    /**
     * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
     *
     * Starting from leftmost {from} paramter, resolves {to} to an absolute path.
     *
     * If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.
     *
     * @param pathSegments string paths to join.  Non-string arguments are ignored.
     */
    export function resolve(...pathSegments: any[]): string;
    /**
     * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
     *
     * @param path path to test.
     */
    export function isAbsolute(path: string): boolean;
    /**
     * Solve the relative path from {from} to {to}.
     * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
     *
     * @param from
     * @param to
     */
    export function relative(from: string, to: string): string;
    /**
     * Return the directory name of a path. Similar to the Unix dirname command.
     *
     * @param p the path to evaluate.
     */
    export function dirname(p: string): string;
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     *
     * @param p the path to evaluate.
     * @param ext optionally, an extension to remove from the result.
     */
    export function basename(p: string, ext?: string): string;
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     *
     * @param p the path to evaluate.
     */
    export function extname(p: string): string;
    /**
     * The platform-specific file separator. '\\' or '/'.
     */
    export var sep: string;
    /**
     * The platform-specific file delimiter. ';' or ':'.
     */
    export var delimiter: string;
    /**
     * Returns an object from a path string - the opposite of format().
     *
     * @param pathString path to evaluate.
     */
    export function parse(pathString: string): ParsedPath;
    /**
     * Returns a path string from an object - the opposite of parse().
     *
     * @param pathString path to evaluate.
     */
    export function format(pathObject: ParsedPath): string;

    export module posix {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }

    export module win32 {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }
}

declare module "string_decoder" {
    export interface NodeStringDecoder {
        write(buffer: Buffer): string;
        detectIncompleteChar(buffer: Buffer): number;
    }
    export var StringDecoder: {
        new (encoding: string): NodeStringDecoder;
    };
}

declare module "tls" {
    import * as crypto from "crypto";
    import * as net from "net";
    import * as stream from "stream";

    var CLIENT_RENEG_LIMIT: number;
    var CLIENT_RENEG_WINDOW: number;

    export interface TlsOptions {
        host?: string;
        port?: number;
        pfx?: any;   //string or buffer
        key?: any;   //string or buffer
        passphrase?: string;
        cert?: any;
        ca?: any;    //string or buffer
        crl?: any;   //string or string array
        ciphers?: string;
        honorCipherOrder?: any;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //array or Buffer;
        SNICallback?: (servername: string) => any;
    }

    export interface ConnectionOptions {
        host?: string;
        port?: number;
        socket?: net.Socket;
        pfx?: any;   //string | Buffer
        key?: any;   //string | Buffer
        passphrase?: string;
        cert?: any;  //string | Buffer
        ca?: any;    //Array of string | Buffer
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //Array of string | Buffer
        servername?: string;
    }

    export interface Server extends net.Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;

        listen(port: number, host?: string, callback?: Function): Server;
        close(): Server;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    export interface ClearTextStream extends stream.Duplex {
        authorized: boolean;
        authorizationError: Error;
        getPeerCertificate(): any;
        getCipher: {
            name: string;
            version: string;
        };
        address: {
            port: number;
            family: string;
            address: string;
        };
        remoteAddress: string;
        remotePort: number;
    }

    export interface SecurePair {
        encrypted: any;
        cleartext: any;
    }

    export interface SecureContextOptions {
        pfx?: any;   //string | buffer
        key?: any;   //string | buffer
        passphrase?: string;
        cert?: any;  // string | buffer
        ca?: any;    // string | buffer
        crl?: any;   // string | string[]
        ciphers?: string;
        honorCipherOrder?: boolean;
    }

    export interface SecureContext {
        context: any;
    }

    export function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) =>void ): Server;
    export function connect(options: TlsOptions, secureConnectionListener?: () =>void ): ClearTextStream;
    export function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    export function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    export function createSecurePair(credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
    export function createSecureContext(details: SecureContextOptions): SecureContext;
}

declare module "crypto" {
    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string): Hmac;
    export function createHmac(algorithm: string, key: Buffer): Hmac;
    export interface Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export interface Hmac extends NodeJS.ReadWriteStream {
        update(data: any, input_encoding?: string): Hmac;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    export interface Cipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
        getAuthTag(): Buffer;
    }
    export function createDecipher(algorithm: string, password: any): Decipher;
    export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    export interface Decipher {
        update(data: Buffer): Buffer;
        update(data: string|Buffer, input_encoding?: string, output_encoding?: string): string;
        update(data: string|Buffer, input_encoding?: string, output_encoding?: string): Buffer;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
        setAuthTag(tag: Buffer): void;
    }
    export function createSign(algorithm: string): Signer;
    export interface Signer extends NodeJS.WritableStream {
        update(data: any): void;
        sign(private_key: string, output_format: string): string;
    }
    export function createVerify(algorith: string): Verify;
    export interface Verify extends NodeJS.WritableStream {
        update(data: any): void;
        verify(object: string, signature: string, signature_format?: string): boolean;
    }
    export function createDiffieHellman(prime_length: number): DiffieHellman;
    export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
    export interface DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2Sync(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number) : Buffer;
    export function pbkdf2Sync(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string) : Buffer;
    export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    export interface RsaPublicKey {
        key: string;
        padding?: any;
    }
    export interface RsaPrivateKey {
        key: string;
        passphrase?: string,
        padding?: any;
    }
    export function publicEncrypt(public_key: string|RsaPublicKey, buffer: Buffer): Buffer
    export function privateDecrypt(private_key: string|RsaPrivateKey, buffer: Buffer): Buffer
}

declare module "stream" {
    import * as events from "events";

    export class Stream extends events.EventEmitter {
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }

    export interface ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }

    export class Readable extends events.EventEmitter implements NodeJS.ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions);
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }

    export interface WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
        objectMode?: boolean;
    }

    export class Writable extends events.EventEmitter implements NodeJS.WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }

    // Note: Duplex extends both Readable and Writable.
    export class Duplex extends Readable implements NodeJS.ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface TransformOptions extends ReadableOptions, WritableOptions {}

    // Note: Transform lacks the _read and _write methods of Readable/Writable.
    export class Transform extends events.EventEmitter implements NodeJS.ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions);
        _transform(chunk: any, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export class PassThrough extends Transform {}
}

declare module "util" {
    export interface InspectOptions {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
        customInspect?: boolean;
    }

    export function format(format: any, ...param: any[]): string;
    export function debug(string: string): void;
    export function error(...param: any[]): void;
    export function puts(...param: any[]): void;
    export function print(...param: any[]): void;
    export function log(string: string): void;
    export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    export function inspect(object: any, options: InspectOptions): string;
    export function isArray(object: any): boolean;
    export function isRegExp(object: any): boolean;
    export function isDate(object: any): boolean;
    export function isError(object: any): boolean;
    export function inherits(constructor: any, superConstructor: any): void;
    export function debuglog(key:string): (msg:string,...param: any[])=>void;
}

declare module "assert" {
    function internal (value: any, message?: string): void;
    module internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {message?: string; actual?: any; expected?: any;
                                  operator?: string; stackStartFunction?: Function});
        }

        export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        export function ok(value: any, message?: string): void;
        export function equal(actual: any, expected: any, message?: string): void;
        export function notEqual(actual: any, expected: any, message?: string): void;
        export function deepEqual(actual: any, expected: any, message?: string): void;
        export function notDeepEqual(acutal: any, expected: any, message?: string): void;
        export function strictEqual(actual: any, expected: any, message?: string): void;
        export function notStrictEqual(actual: any, expected: any, message?: string): void;
        export function deepStrictEqual(actual: any, expected: any, message?: string): void;
        export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;
        export var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export var doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export function ifError(value: any): void;
    }

    export = internal;
}

declare module "tty" {
    import * as net from "net";

    export function isatty(fd: number): boolean;
    export interface ReadStream extends net.Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
        isTTY: boolean;
    }
    export interface WriteStream extends net.Socket {
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}

declare module "domain" {
    import * as events from "events";

    export class Domain extends events.EventEmitter implements NodeJS.Domain {
        run(fn: Function): void;
        add(emitter: events.EventEmitter): void;
        remove(emitter: events.EventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;
    }

    export function create(): Domain;
}

declare module "constants" {
    export var E2BIG: number;
    export var EACCES: number;
    export var EADDRINUSE: number;
    export var EADDRNOTAVAIL: number;
    export var EAFNOSUPPORT: number;
    export var EAGAIN: number;
    export var EALREADY: number;
    export var EBADF: number;
    export var EBADMSG: number;
    export var EBUSY: number;
    export var ECANCELED: number;
    export var ECHILD: number;
    export var ECONNABORTED: number;
    export var ECONNREFUSED: number;
    export var ECONNRESET: number;
    export var EDEADLK: number;
    export var EDESTADDRREQ: number;
    export var EDOM: number;
    export var EEXIST: number;
    export var EFAULT: number;
    export var EFBIG: number;
    export var EHOSTUNREACH: number;
    export var EIDRM: number;
    export var EILSEQ: number;
    export var EINPROGRESS: number;
    export var EINTR: number;
    export var EINVAL: number;
    export var EIO: number;
    export var EISCONN: number;
    export var EISDIR: number;
    export var ELOOP: number;
    export var EMFILE: number;
    export var EMLINK: number;
    export var EMSGSIZE: number;
    export var ENAMETOOLONG: number;
    export var ENETDOWN: number;
    export var ENETRESET: number;
    export var ENETUNREACH: number;
    export var ENFILE: number;
    export var ENOBUFS: number;
    export var ENODATA: number;
    export var ENODEV: number;
    export var ENOENT: number;
    export var ENOEXEC: number;
    export var ENOLCK: number;
    export var ENOLINK: number;
    export var ENOMEM: number;
    export var ENOMSG: number;
    export var ENOPROTOOPT: number;
    export var ENOSPC: number;
    export var ENOSR: number;
    export var ENOSTR: number;
    export var ENOSYS: number;
    export var ENOTCONN: number;
    export var ENOTDIR: number;
    export var ENOTEMPTY: number;
    export var ENOTSOCK: number;
    export var ENOTSUP: number;
    export var ENOTTY: number;
    export var ENXIO: number;
    export var EOPNOTSUPP: number;
    export var EOVERFLOW: number;
    export var EPERM: number;
    export var EPIPE: number;
    export var EPROTO: number;
    export var EPROTONOSUPPORT: number;
    export var EPROTOTYPE: number;
    export var ERANGE: number;
    export var EROFS: number;
    export var ESPIPE: number;
    export var ESRCH: number;
    export var ETIME: number;
    export var ETIMEDOUT: number;
    export var ETXTBSY: number;
    export var EWOULDBLOCK: number;
    export var EXDEV: number;
    export var WSAEINTR: number;
    export var WSAEBADF: number;
    export var WSAEACCES: number;
    export var WSAEFAULT: number;
    export var WSAEINVAL: number;
    export var WSAEMFILE: number;
    export var WSAEWOULDBLOCK: number;
    export var WSAEINPROGRESS: number;
    export var WSAEALREADY: number;
    export var WSAENOTSOCK: number;
    export var WSAEDESTADDRREQ: number;
    export var WSAEMSGSIZE: number;
    export var WSAEPROTOTYPE: number;
    export var WSAENOPROTOOPT: number;
    export var WSAEPROTONOSUPPORT: number;
    export var WSAESOCKTNOSUPPORT: number;
    export var WSAEOPNOTSUPP: number;
    export var WSAEPFNOSUPPORT: number;
    export var WSAEAFNOSUPPORT: number;
    export var WSAEADDRINUSE: number;
    export var WSAEADDRNOTAVAIL: number;
    export var WSAENETDOWN: number;
    export var WSAENETUNREACH: number;
    export var WSAENETRESET: number;
    export var WSAECONNABORTED: number;
    export var WSAECONNRESET: number;
    export var WSAENOBUFS: number;
    export var WSAEISCONN: number;
    export var WSAENOTCONN: number;
    export var WSAESHUTDOWN: number;
    export var WSAETOOMANYREFS: number;
    export var WSAETIMEDOUT: number;
    export var WSAECONNREFUSED: number;
    export var WSAELOOP: number;
    export var WSAENAMETOOLONG: number;
    export var WSAEHOSTDOWN: number;
    export var WSAEHOSTUNREACH: number;
    export var WSAENOTEMPTY: number;
    export var WSAEPROCLIM: number;
    export var WSAEUSERS: number;
    export var WSAEDQUOT: number;
    export var WSAESTALE: number;
    export var WSAEREMOTE: number;
    export var WSASYSNOTREADY: number;
    export var WSAVERNOTSUPPORTED: number;
    export var WSANOTINITIALISED: number;
    export var WSAEDISCON: number;
    export var WSAENOMORE: number;
    export var WSAECANCELLED: number;
    export var WSAEINVALIDPROCTABLE: number;
    export var WSAEINVALIDPROVIDER: number;
    export var WSAEPROVIDERFAILEDINIT: number;
    export var WSASYSCALLFAILURE: number;
    export var WSASERVICE_NOT_FOUND: number;
    export var WSATYPE_NOT_FOUND: number;
    export var WSA_E_NO_MORE: number;
    export var WSA_E_CANCELLED: number;
    export var WSAEREFUSED: number;
    export var SIGHUP: number;
    export var SIGINT: number;
    export var SIGILL: number;
    export var SIGABRT: number;
    export var SIGFPE: number;
    export var SIGKILL: number;
    export var SIGSEGV: number;
    export var SIGTERM: number;
    export var SIGBREAK: number;
    export var SIGWINCH: number;
    export var SSL_OP_ALL: number;
    export var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
    export var SSL_OP_CIPHER_SERVER_PREFERENCE: number;
    export var SSL_OP_CISCO_ANYCONNECT: number;
    export var SSL_OP_COOKIE_EXCHANGE: number;
    export var SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
    export var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
    export var SSL_OP_EPHEMERAL_RSA: number;
    export var SSL_OP_LEGACY_SERVER_CONNECT: number;
    export var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
    export var SSL_OP_MICROSOFT_SESS_ID_BUG: number;
    export var SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
    export var SSL_OP_NETSCAPE_CA_DN_BUG: number;
    export var SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
    export var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NO_COMPRESSION: number;
    export var SSL_OP_NO_QUERY_MTU: number;
    export var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
    export var SSL_OP_NO_SSLv2: number;
    export var SSL_OP_NO_SSLv3: number;
    export var SSL_OP_NO_TICKET: number;
    export var SSL_OP_NO_TLSv1: number;
    export var SSL_OP_NO_TLSv1_1: number;
    export var SSL_OP_NO_TLSv1_2: number;
    export var SSL_OP_PKCS1_CHECK_1: number;
    export var SSL_OP_PKCS1_CHECK_2: number;
    export var SSL_OP_SINGLE_DH_USE: number;
    export var SSL_OP_SINGLE_ECDH_USE: number;
    export var SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
    export var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
    export var SSL_OP_TLS_BLOCK_PADDING_BUG: number;
    export var SSL_OP_TLS_D5_BUG: number;
    export var SSL_OP_TLS_ROLLBACK_BUG: number;
    export var ENGINE_METHOD_DSA: number;
    export var ENGINE_METHOD_DH: number;
    export var ENGINE_METHOD_RAND: number;
    export var ENGINE_METHOD_ECDH: number;
    export var ENGINE_METHOD_ECDSA: number;
    export var ENGINE_METHOD_CIPHERS: number;
    export var ENGINE_METHOD_DIGESTS: number;
    export var ENGINE_METHOD_STORE: number;
    export var ENGINE_METHOD_PKEY_METHS: number;
    export var ENGINE_METHOD_PKEY_ASN1_METHS: number;
    export var ENGINE_METHOD_ALL: number;
    export var ENGINE_METHOD_NONE: number;
    export var DH_CHECK_P_NOT_SAFE_PRIME: number;
    export var DH_CHECK_P_NOT_PRIME: number;
    export var DH_UNABLE_TO_CHECK_GENERATOR: number;
    export var DH_NOT_SUITABLE_GENERATOR: number;
    export var NPN_ENABLED: number;
    export var RSA_PKCS1_PADDING: number;
    export var RSA_SSLV23_PADDING: number;
    export var RSA_NO_PADDING: number;
    export var RSA_PKCS1_OAEP_PADDING: number;
    export var RSA_X931_PADDING: number;
    export var RSA_PKCS1_PSS_PADDING: number;
    export var POINT_CONVERSION_COMPRESSED: number;
    export var POINT_CONVERSION_UNCOMPRESSED: number;
    export var POINT_CONVERSION_HYBRID: number;
    export var O_RDONLY: number;
    export var O_WRONLY: number;
    export var O_RDWR: number;
    export var S_IFMT: number;
    export var S_IFREG: number;
    export var S_IFDIR: number;
    export var S_IFCHR: number;
    export var S_IFLNK: number;
    export var O_CREAT: number;
    export var O_EXCL: number;
    export var O_TRUNC: number;
    export var O_APPEND: number;
    export var F_OK: number;
    export var R_OK: number;
    export var W_OK: number;
    export var X_OK: number;
    export var UV_UDP_REUSEADDR: number;
}
// Type definitions for hapi 13.0.0
// Project: http://github.com/spumko/hapi
// Definitions by: Jason Swearingen <http://github.com/jasonswearingen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//Note/Disclaimer: This .d.ts was created against hapi v8.x but has been incrementally upgraded to 13.x.  Some newer features/changes may be missing.  YMMV.


/// <reference path="../node/node.d.ts" />

declare module "hapi" {
    import http = require("http");
    import stream = require("stream");
    import Events = require("events");

    interface IDictionary<T> {
        [key: string]: T;
    }

    interface IThenable<R> {
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>): IThenable<U>;
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void): IThenable<U>;
    }

    interface IPromise<R> extends IThenable<R> {
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>): IPromise<U>;
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void): IPromise<U>;
        catch<U>(onRejected?: (error: any) => U | IThenable<U>): IPromise<U>;
    }

	/** Boom Module for errors. https://github.com/hapijs/boom
	*  boom provides a set of utilities for returning HTTP errors. Each utility returns a Boom error response object (instance of Error) which includes the following properties:  */
    export interface IBoom extends Error {
        /**  if true, indicates this is a Boom object instance.  */
        isBoom: boolean;
        /** convenience bool indicating status code >= 500.  */
        isServer: boolean;
        /**  the error message.  */
        message: string;
        /**  the formatted response.Can be directly manipulated after object construction to return a custom error response.Allowed root keys:  */
        output: {
            /** the HTTP status code (typically 4xx or 5xx).  */
            statusCode: number;
            /** an object containing any HTTP headers where each key is a header name and value is the header content.  */
            headers: IDictionary<string>;
            /** the formatted object used as the response payload (stringified).Can be directly manipulated but any changes will be lost if reformat() is called.Any content allowed and by default includes the following content: */
            payload: {
                /** the HTTP status code, derived from error.output.statusCode.  */
                statusCode: number;
                /** the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from statusCode.  */
                error: string;
                /** the error message derived from error.message. */
                message: string;
            };
        };
        /**  reformat()rebuilds error.output using the other object properties.  */
        reformat(): void;

    }

    /** cache functionality via the "CatBox" module. */
    export interface ICatBoxCacheOptions {
        /**  a prototype function or catbox engine object.  */
        engine: any;
        /**   an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisions as well.  */
        name?: string;
        /**   if true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false.  */
        shared?: boolean;
    }

    /** Any connections configuration server defaults can be included to override and customize the individual connection. */
    export interface IServerConnectionOptions extends IConnectionConfigurationServerDefaults {
        /**  - the public hostname or IP address. Used only to set server.info.host and server.info.uri. If not configured, defaults to the operating system hostname and if not available, to 'localhost'.*/
        host?: string;
        /** - sets the host name or IP address the connection will listen on.If not configured, defaults to host if present, otherwise to all available network interfaces (i.e. '0.0.0.0').Set to 127.0.0.1 or localhost to restrict connection to only those coming from the same machine.*/
        address?: string;
        /** - the TCP port the connection will listen to.Defaults to an ephemeral port (0) which uses an available port when the server is started (and assigned to server.info.port).If port is a string containing a '/' character, it is used as a UNIX domain socket path and if it starts with '\.\pipe' as a Windows named pipe.*/
        port?: string | number;
        /** - the full public URI without the path (e.g. 'http://example.com:8080').If present, used as the connection info.uri otherwise constructed from the connection settings.*/
        uri?: string;
        /**  - optional node.js HTTP (or HTTPS) http.Server object or any compatible object.If the listener needs to be manually started, set autoListen to false.If the listener uses TLS, set tls to true.*/
        listener?: any;
        /**  - indicates that the connection.listener will be started manually outside the framework.Cannot be specified with a port setting.Defaults to true.*/
        autoListen?: boolean;
        /**  caching headers configuration: */
        cache?: {
            /** - an array of HTTP response status codes (e.g. 200) which are allowed to include a valid caching directive.Defaults to [200]. */
            statuses: number[];
        };
        /** - a string or string array of labels used to server.select() specific connections matching the specified labels.Defaults to an empty array [](no labels).*/
        labels?: string | string[];
        /**  - used to create an HTTPS connection.The tls object is passed unchanged as options to the node.js HTTPS server as described in the node.js HTTPS documentation.Set to true when passing a listener object that has been configured to use TLS directly. */
        tls?: boolean | { key?: string; cert?: string; pfx?: string; } | Object;

    }

    export interface IConnectionConfigurationServerDefaults {
        /**  application-specific connection configuration which can be accessed via connection.settings.app. Provides a safe place to store application configuration without potential conflicts with the framework internals. Should not be used to configure plugins which should use plugins[name]. Note the difference between connection.settings.app which is used to store configuration values and connection.app which is meant for storing run-time state.  */
        app?: any;
        /**  connection load limits configuration where:  */
        load?: {
            /**  maximum V8 heap size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
            maxHeapUsedBytes: number;
            /**  maximum process RSS size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
            maxRssBytes: number;
            /**  maximum event loop delay duration in milliseconds over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
            maxEventLoopDelay: number;
        };
        /**  plugin-specific configuration which can later be accessed via connection.settings.plugins. Provides a place to store and pass connection-specific plugin configuration. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between connection.settings.plugins which is used to store configuration values and connection.plugins which is meant for storing run-time state. */
        plugins?: any;
        /**  controls how incoming request URIs are matched against the routing table: */
        router?: {
            /**  determines whether the paths '/example' and '/EXAMPLE' are considered different resources. Defaults to true.  */
            isCaseSensitive: boolean;
            /**  removes trailing slashes on incoming paths. Defaults to false.  */
            stripTrailingSlash: boolean;
        };
        /** a route options object used to set the default configuration for every route. */
        routes?: IRouteAdditionalConfigurationOptions;
        state?: IServerState;
    }

    /** Note that the options object is deeply cloned and cannot contain any values that are unsafe to perform deep copy on.*/
    export interface IServerOptions {
        /**  application-specific configuration which can later be accessed via server.settings.app. Note the difference between server.settings.app which is used to store static configuration values and server.app which is meant for storing run-time state. Defaults to {}.  */
        app?: any;
		/**   sets up server-side caching. Every server includes a default cache for storing application state. By default, a simple memory-based cache is created which has limited capacity and capabilities. hapi uses catbox for its cache which includes support for common storage solutions (e.g. Redis, MongoDB, Memcached, and Riak). Caching is only utilized if methods and plugins explicitly store their state in the cache. The server cache configuration only defines the storage container itself. cache can be assigned:
		a prototype function (usually obtained by calling require() on a catbox strategy such as require('catbox-redis')).
		a configuration object with the following options:
		enginea prototype function or catbox engine object.
		namean identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisions as well.
		sharedif true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false.
		other options passed to the catbox strategy used.
		an array of the above object for configuring multiple cache instances, each with a unique name. When an array of objects is provided, multiple cache connections are established and each array item (except one) must include a name.  */
        cache?: string | ICatBoxCacheOptions | Array<ICatBoxCacheOptions> | any;
        /**  sets the default connections configuration which can be overridden by each connection where:  */
        connections?: IConnectionConfigurationServerDefaults;
        /** determines which logged events are sent to the console (this should only be used for development and does not affect which events are actually logged internally and recorded). Set to false to disable all console logging, or to an object*/
        debug?: boolean | {
            /** - a string array of server log tags to be displayed via console.error() when the events are logged via server.log() as well as internally generated server logs. For example, to display all errors, set the option to ['error']. To turn off all console debug messages set it to false. Defaults to uncaught errors thrown in external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error. */
            log: string[];
            /**  - a string array of request log tags to be displayed via console.error() when the events are logged via request.log() as well as internally generated request logs. For example, to display all errors, set the option to ['error']. To turn off all console debug messages set it to false. Defaults to uncaught errors thrown in external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error.*/
            request: string[];
        };
        /** file system related settings*/
        files?: {
            /**  sets the maximum number of file etag hash values stored in the etags cache. Defaults to 10000.*/
            etagsCacheMaxSize?: number;
        };
        /**  process load monitoring*/
        load?: {
            /**  the frequency of sampling in milliseconds. Defaults to 0 (no sampling).*/
            sampleInterval?: number;
        };

        /** options passed to the mimos module (https://github.com/hapijs/mimos) when generating the mime database used by the server and accessed via server.mime.*/
        mime?: any;
        /**  if true, does not load the inert (file and directory support), h2o2 (proxy support), and vision (views support) plugins automatically. The plugins can be loaded manually after construction. Defaults to false (plugins loaded). */
        minimal?: boolean;
        /** plugin-specific configuration which can later be accessed via server.settings.plugins. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between server.settings.plugins which is used to store static configuration values and server.plugins which is meant for storing run-time state. Defaults to {}.*/
        plugins?: IDictionary<any>;

    }

    export interface IServerViewCompile {
        (template: string, options: any): void;
        (template: string, options: any, callback: (err: any, compiled: (context: any, options: any, callback: (err: any, rendered: boolean) => void) => void) => void): void;
    }

    export interface IServerViewsAdditionalOptions {
        /**	path - the root file path used to resolve and load the templates identified when calling reply.view().Defaults to current working directory.*/
        path?: string;
		/**partialsPath - the root file path where partials are located.Partials are small segments of template code that can be nested and reused throughout other templates.Defaults to no partials support (empty path).
		*/
        partialsPath?: string;
        /**helpersPath - the directory path where helpers are located.Helpers are functions used within templates to perform transformations and other data manipulations using the template context or other inputs.Each '.js' file in the helpers directory is loaded and the file name is used as the helper name.The files must export a single method with the signature function(context) and return a string.Sub - folders are not supported and are ignored.Defaults to no helpers support (empty path).Note that jade does not support loading helpers this way.*/
        helpersPath?: string;
        /**relativeTo - a base path used as prefix for path and partialsPath.No default.*/
        relativeTo?: string;

        /**layout - if set to true or a layout filename, layout support is enabled.A layout is a single template file used as the parent template for other view templates in the same engine.If true, the layout template name must be 'layout.ext' where 'ext' is the engine's extension. Otherwise, the provided filename is suffixed with the engine's extension and loaded.Disable layout when using Jade as it will handle including any layout files independently.Defaults to false.*/
        layout?: boolean;
        /**layoutPath - the root file path where layout templates are located (using the relativeTo prefix if present). Defaults to path.*/
        layoutPath?: string;
        /**layoutKeyword - the key used by the template engine to denote where primary template content should go.Defaults to 'content'.*/
        layoutKeywork?: string;
        /**encoding - the text encoding used by the templates when reading the files and outputting the result.Defaults to 'utf8'.*/
        encoding?: string;
        /**isCached - if set to false, templates will not be cached (thus will be read from file on every use).Defaults to true.*/
        isCached?: boolean;
        /**allowAbsolutePaths - if set to true, allows absolute template paths passed to reply.view().Defaults to false.*/
        allowAbsolutePaths?: boolean;
        /**allowInsecureAccess - if set to true, allows template paths passed to reply.view() to contain '../'.Defaults to false.*/
        allowInsecureAccess?: boolean;
        /**compileOptions - options object passed to the engine's compile function. Defaults to empty options {}.*/
        compileOptions?: any;
        /**runtimeOptions - options object passed to the returned function from the compile operation.Defaults to empty options {}.*/
        runtimeOptions?: any;
        /**contentType - the content type of the engine results.Defaults to 'text/html'.*/
        contentType?: string;
        /**compileMode - specify whether the engine compile() method is 'sync' or 'async'.Defaults to 'sync'.*/
        compileMode?: string;
        /**context - a global context used with all templates.The global context option can be either an object or a function that takes no arguments and returns a context object.When rendering views, the global context will be merged with any context object specified on the handler or using reply.view().When multiple context objects are used, values from the global context always have lowest precedence.*/
        context?: any;
    }

    export interface IServerViewsEnginesOptions extends IServerViewsAdditionalOptions {
		/**- the npm module used for rendering the templates.The module object must contain: "module", the rendering function. The required function signature depends on the compileMode settings.
		* If the compileMode is 'sync', the signature is compile(template, options), the return value is a function with signature function(context, options), and the method is allowed to throw errors.If the compileMode is 'async', the signature is compile(template, options, callback) where callback has the signature function(err, compiled) where compiled is a function with signature function(context, options, callback) and callback has the signature function(err, rendered).*/
        module: {
            compile?(template: any, options: any): (context: any, options: any) => void;
            compile?(template: any, options: any, callback: (err: any, compiled: (context: any, options: any, callback: (err: any, rendered: any) => void) => void) => void): void;
        };
    }

	/**Initializes the server views manager
	var Hapi = require('hapi');
	var server = new Hapi.Server();

	server.views({
	engines: {
	html: require('handlebars'),
	jade: require('jade')
	},
	path: '/static/templates'
	});
	When server.views() is called within a plugin, the views manager is only available to plugins methods.
	*/
    export interface IServerViewsConfiguration extends IServerViewsAdditionalOptions {
        /** - required object where each key is a file extension (e.g. 'html', 'hbr'), mapped to the npm module used for rendering the templates.Alternatively, the extension can be mapped to an object with the following options:*/
        engines: IDictionary<any> | IServerViewsEnginesOptions;
        /**  defines the default filename extension to append to template names when multiple engines are configured and not explicit extension is provided for a given template. No default value.*/
        defaultExtension?: string;
    }

	/**  Concludes the handler activity by setting a response and returning control over to the framework where:
	erran optional error response.
	resultan optional response payload.
	Since an request can only have one response regardless if it is an error or success, the reply() method can only result in a single response value. This means that passing both an err and result will only use the err. There is no requirement for either err or result to be (or not) an Error object. The framework will simply use the first argument if present, otherwise the second. The method supports two arguments to be compatible with the common callback pattern of error first.
	FLOW CONTROL:
	When calling reply(), the framework waits until process.nextTick() to continue processing the request and transmit the response. This enables making changes to the returned response object before the response is sent. This means the framework will resume as soon as the handler method exits. To suspend this behavior, the returned response object supports the following methods: hold(), send() */
    export interface IReply {
        <T>(err: Error,
            result?: string | number | boolean | Buffer | stream.Stream | IPromise<T> | T,
            /**  Note that when used to return both an error and credentials in the authentication methods, reply() must be called with three arguments function(err, null, data) where data is the additional authentication information. */
            credentialData?: any
        ): IBoom;
        /**  Note that if result is a Stream with a statusCode property, that status code will be used as the default response code.  */
        <T>(result: string | number | boolean | Buffer | stream.Stream | IPromise<T> | T): Response;

		/** Returns control back to the framework without setting a response. If called in the handler, the response defaults to an empty payload with status code 200.
		  * The data argument is only used for passing back authentication data and is ignored elsewhere. */
        continue(credentialData?: any): void;

        /** Transmits a file from the file system. The 'Content-Type' header defaults to the matching mime type based on filename extension.  The response flow control rules do not apply. */
        file(
            /**   the file path. */
            path: string,
            /**  optional settings:  */
            options?: {
                /** - an optional filename to specify if sending a 'Content-Disposition' header, defaults to the basename of path*/
                filename?: string;
				/** specifies whether to include the 'Content-Disposition' header with the response. Available values:
				false - header is not included. This is the default value.
				'attachment'
				'inline'*/
                mode?: boolean | string;
                /**   if true, looks for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false.  */
                lookupCompressed: boolean;
            }): void;
		/**  Concludes the handler activity by returning control over to the router with a templatized view response.
		the response flow control rules apply. */

        view(
            /**  the template filename and path, relative to the templates path configured via the server views manager. */
            template: string,
            /**  optional object used by the template to render context-specific result. Defaults to no context {}. */
            context?: {},
            /**  optional object used to override the server's views manager configuration for this response. Cannot override isCached, partialsPath, or helpersPath which are only loaded at initialization.  */
            options?: any): Response;
		/** Concludes the handler activity by returning control over to the router and informing the router that a response has already been sent back directly via request.raw.res and that no further response action is needed
		The response flow control rules do not apply. */
        close(options?: {
            /**   if false, the router will not call request.raw.res.end()) to ensure the response was ended. Defaults to true.  */
            end?: boolean;
        }): void;
		/** Proxies the request to an upstream endpoint.
		the response flow control rules do not apply. */

        proxy(/**  an object including the same keys and restrictions defined by the route proxy handler options. */
            options: IProxyHandlerConfig): void;
		/** Redirects the client to the specified uri. Same as calling reply().redirect(uri).
		he response flow control rules apply. */
        redirect(uri: string): ResponseRedirect;
    }

    export interface ISessionHandler {
        (request: Request, reply: IReply): void;
    }
    export interface IRequestHandler<T> {
        (request: Request): T;
    }


    export interface IFailAction {
        (source: string, error: any, next: () => void): void
    }
    /**  generates a reverse proxy handler */
    export interface IProxyHandlerConfig {
        /** the upstream service host to proxy requests to. The same path on the client request will be used as the path on the host.*/
        host?: string;
        /** the upstream service port. */
        port?: number;
		/**  The protocol to use when making a request to the proxied host:
		'http'
		'https'*/
        protocol?: string;
        /**  an absolute URI used instead of the incoming host, port, protocol, path, and query. Cannot be used with host, port, protocol, or mapUri.*/
        uri?: string;
        /**  if true, forwards the headers sent from the client to the upstream service being proxied to, headers sent from the upstream service will also be forwarded to the client. Defaults to false.*/
        passThrough?: boolean;
        /** localStatePassThrough - if false, any locally defined state is removed from incoming requests before being passed upstream. This is a security feature to prevent local state (e.g. authentication cookies) from leaking upstream to other servers along with the cookies intended for those servers. This value can be overridden on a per state basis via the server.state() passThrough option. Defaults to false.*/
        localStatePassThrough?: boolean;
        /**acceptEncoding - if false, does not pass-through the 'Accept-Encoding' HTTP header which is useful when using an onResponse post-processing to avoid receiving an encoded response (e.g. gzipped). Can only be used together with passThrough. Defaults to true (passing header).*/
        acceptEncoding?: boolean;
        /** rejectUnauthorized - sets the rejectUnauthorized property on the https agent making the request. This value is only used when the proxied server uses TLS/SSL. When set it will override the node.js rejectUnauthorized property. If false then ssl errors will be ignored. When true the server certificate is verified and an 500 response will be sent when verification fails. This shouldn't be used alongside the agent setting as the agent will be used instead. Defaults to the https agent default value of true.*/
        rejectUnauthorized?: boolean;
        /**if true, sets the 'X-Forwarded-For', 'X-Forwarded-Port', 'X-Forwarded-Proto' headers when making a request to the proxied upstream endpoint. Defaults to false.*/
        xforward?: boolean;
        /** the maximum number of HTTP redirections allowed, to be followed automatically by the handler. Set to false or 0 to disable all redirections (the response will contain the redirection received from the upstream service). If redirections are enabled, no redirections (301, 302, 307, 308) will be passed along to the client, and reaching the maximum allowed redirections will return an error response. Defaults to false.*/
        redirects?: boolean | number;
        /**number of milliseconds before aborting the upstream request. Defaults to 180000 (3 minutes).*/
        timeout?: number;
		/** a function used to map the request URI to the proxied URI. Cannot be used together with host, port, protocol, or uri. The function signature is function(request, callback) where:
		request - is the incoming request object.
		callback - is function(err, uri, headers) where:
		err - internal error condition.
		uri - the absolute proxy URI.
		headers - optional object where each key is an HTTP request header and the value is the header content.*/
        mapUri?: (request: Request, callback: (err: any, uri: string, headers?: { [key: string]: string }) => void) => void;
        /**  a custom function for processing the response from the upstream service before sending to the client. Useful for custom error handling of responses from the proxied endpoint or other payload manipulation. Function signature is function(err, res, request, reply, settings, ttl) where: - err - internal or upstream error returned from attempting to contact the upstream proxy. - res - the node response object received from the upstream service. res is a readable stream (use the wreck module read method to easily convert it to a Buffer or string). - request - is the incoming request object. - reply - the reply interface function. - settings - the proxy handler configuration. - ttl - the upstream TTL in milliseconds if proxy.ttl it set to 'upstream' and the upstream response included a valid 'Cache-Control' header with 'max-age'.*/
        onResponse?: (
            err: any,
            res: http.ServerResponse,
            req: Request,
            reply: IReply,
            settings: IProxyHandlerConfig,
            ttl: number
        ) => void;
        /** if set to 'upstream', applies the upstream response caching policy to the response using the response.ttl() method (or passed as an argument to the onResponse method if provided).*/
        ttl?: number;
        /** - a node http(s) agent to be used for connections to upstream server.  see https://nodejs.org/api/http.html#http_class_http_agent */
        agent?: http.Agent;
        /** sets the maximum number of sockets available per outgoing proxy host connection. false means use the wreck module default value (Infinity). Does not affect non-proxy outgoing client connections. Defaults to Infinity.*/
        maxSockets?: boolean | number;
    }
    /**  TODO: fill in joi definition  */
    export interface IJoi {

    }
    /**  a validation function using the signature function(value, options, next) */
    export interface IValidationFunction {

        (/**   the object containing the path parameters. */
            value: any,
            /**  the server validation options. */
            options: any,
            /**   the callback function called when validation is completed.  */
            next: (err: any, value: any) => void): void;
    }
    /**  a custom error handler function with the signature 'function(request, reply, source, error)` */
    export interface IRouteFailFunction {
        /**  a custom error handler function with the signature 'function(request, reply, source, error)` */
        (
            /** - the [request object]. */
            request: Request,
            /**   the continuation reply interface. */
            reply: IReply,
            /**  the source of the invalid field (e.g. 'path', 'query', 'payload'). */
            source: string,
            /**  the error object prepared for the client response (including the validation function error under error.data). */
            error: any): void;
    }

    /**  Each route can be customize to change the default behavior of the request lifecycle using the following options:  */
    export interface IRouteAdditionalConfigurationOptions {
        /**  application specific configuration.Should not be used by plugins which should use plugins[name] instead. */
        app?: any;
		/** authentication configuration.Value can be: false to disable authentication if a default strategy is set.
		a string with the name of an authentication strategy registered with server.auth.strategy().
		an object  */
        auth?: boolean | string |
        {
			/**  the authentication mode.Defaults to 'required' if a server authentication strategy is configured, otherwise defaults to no authentication.Available values:
			'required'authentication is required.
			'optional'authentication is optional (must be valid if present).
			'try'same as 'optional' but allows for invalid authentication. */
            mode?: string;
            /**  a string array of strategy names in order they should be attempted.If only one strategy is used, strategy can be used instead with the single string value.Defaults to the default authentication strategy which is available only when a single strategy is configured.  */
            strategies?: string | Array<string>;
			/**  if set, the payload (in requests other than 'GET' and 'HEAD') is authenticated after it is processed.Requires a strategy with payload authentication support (e.g.Hawk).Cannot be set to a value other than 'required' when the scheme sets the options.payload to true.Available values:
			falseno payload authentication.This is the default value.
			'required'payload authentication required.This is the default value when the scheme sets options.payload to true.
			'optional'payload authentication performed only when the client includes payload authentication information (e.g.hash attribute in Hawk). */
            payload?: string;
            /**  the application scope required to access the route.Value can be a scope string or an array of scope strings.The authenticated credentials object scope property must contain at least one of the scopes defined to access the route.Set to false to remove scope requirements.Defaults to no scope required.  */
            scope?: string | Array<string> | boolean;
			/** the required authenticated entity type.If set, must match the entity value of the authentication credentials.Available values:
			anythe authentication can be on behalf of a user or application.This is the default value.
			userthe authentication must be on behalf of a user.
			appthe authentication must be on behalf of an application. */
            entity?: string;
			/**
			* an object or array of objects specifying the route access rules. Each rule is evaluated against an incoming
			* request and access is granted if at least one rule matches. Each rule object must include at least one of:
			*/
            access?: IRouteAdditionalConfigurationAuthAccess | IRouteAdditionalConfigurationAuthAccess[];
        };
        /** an object passed back to the provided handler (via this) when called. */
        bind?: any;
        /** if the route method is 'GET', the route can be configured to include caching directives in the response using the following options */
        cache?: {
			/**  mines the privacy flag included in clientside caching using the 'Cache-Control' header.Values are:
			fault'no privacy flag.This is the default setting.
			'public'mark the response as suitable for public caching.
			'private'mark the response as suitable only for private caching.  */
            privacy: string;
            /**  relative expiration expressed in the number of milliseconds since the item was saved in the cache.Cannot be used together with expiresAt. */
            expiresIn: number;
            /**  time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire.Cannot be used together with expiresIn.  */
            expiresAt: string;
        };
        /** the Cross- Origin Resource Sharing protocol allows browsers to make cross- origin API calls.CORS is required by web applications running inside a browser which are loaded from a different domain than the API server.CORS headers are disabled by default. To enable, set cors to true, or to an object with the following options: */
        cors?: {
            /** a strings array of allowed origin servers ('Access-Control-Allow-Origin').The array can contain any combination of fully qualified origins along with origin strings containing a wildcard '' character, or a single `''origin string. Defaults to any origin['*']`. */
            origin?: Array<string>;
            /** if true, matches the value of the incoming 'Origin' header to the list of origin values ('*' matches anything) and if a match is found, uses that as the value of the 'Access-Control-Allow-Origin' response header.When false, the origin config is returned as- is.Defaults to true.  */
            matchOrigin?: boolean;
            /** if false, prevents the connection from returning the full list of non- wildcard origin values if the incoming origin header does not match any of the values.Has no impact if matchOrigin is set to false.Defaults to true. */
            isOriginExposed?: boolean;
            /**  number of seconds the browser should cache the CORS response ('Access-Control-Max-Age').The greater the value, the longer it will take before the browser checks for changes in policy.Defaults to 86400 (one day). */
            maxAge?: number;
            /**  a strings array of allowed headers ('Access-Control-Allow-Headers').Defaults to ['Authorization', 'Content-Type', 'If-None-Match']. */
            headers?: string[];
            /**  a strings array of additional headers to headers.Use this to keep the default headers in place. */
            additionalHeaders?: string[];
            /**  a strings array of allowed HTTP methods ('Access-Control-Allow-Methods').Defaults to ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS']. */
            methods?: string[];
            /**  a strings array of additional methods to methods.Use this to keep the default methods in place. */
            additionalMethods?: string[];
            /**  a strings array of exposed headers ('Access-Control-Expose-Headers').Defaults to ['WWW-Authenticate', 'Server-Authorization']. */
            exposedHeaders?: string[];
            /**  a strings array of additional headers to exposedHeaders.Use this to keep the default headers in place. */
            additionalExposedHeaders?: string[];
            /**  if true, allows user credentials to be sent ('Access-Control-Allow-Credentials').Defaults to false. */
            credentials?: boolean;
            /** if false, preserves existing CORS headers set manually before the response is sent.Defaults to true. */
            override?: boolean;
        };
        /**   defines the behavior for serving static resources using the built-in route handlers for files and directories: */
        files?: {/** determines the folder relative paths are resolved against when using the file and directory handlers. */
            relativeTo: string;
        };

        /**  an alternative location for the route handler option. */
        handler?: ISessionHandler | string | IRouteHandlerConfig;
        /** an optional unique identifier used to look up the route using server.lookup(). */
        id?: number;
        /** optional arguments passed to JSON.stringify() when converting an object or error response to a string payload.Supports the following: */
        json?: {
            /** the replacer function or array.Defaults to no action. */
            replacer?: Function | string[];
            /**  number of spaces to indent nested object keys.Defaults to no indentation. */
            space?: number | string;
            /** string suffix added after conversion to JSON string.Defaults to no suffix. */
            suffix?: string;
        };
        /** enables JSONP support by setting the value to the query parameter name containing the function name used to wrap the response payload.For example, if the value is 'callback', a request comes in with 'callback=me', and the JSON response is '{ "a":"b" }', the payload will be 'me({ "a":"b" });'.Does not work with stream responses. */
        jsonp?: string;
        /** determines how the request payload is processed: */
        payload?: {
			/**  the type of payload representation requested. The value must be one of:
			'data'the incoming payload is read fully into memory.If parse is true, the payload is parsed (JSON, formdecoded, multipart) based on the 'Content- Type' header.If parse is false, the raw Buffer is returned.This is the default value except when a proxy handler is used.
			'stream'the incoming payload is made available via a Stream.Readable interface.If the payload is 'multipart/form-data' and parse is true, fields values are presented as text while files are provided as streams.File streams from a 'multipart/form-data' upload will also have a property hapi containing filename and headers properties.
			'file'the incoming payload in written to temporary file in the directory specified by the server's payload.uploads settings. If the payload is 'multipart/ formdata' and parse is true, fields values are presented as text while files are saved. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track of which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform any needed cleaup. */
            output?: string;
			/**  can be true, false, or gunzip; determines if the incoming payload is processed or presented raw. true and gunzip includes gunzipping when the appropriate 'Content-Encoding' is specified on the received request. If parsing is enabled and the 'Content-Type' is known (for the whole payload as well as parts), the payload is converted into an object when possible. If the format is unknown, a Bad Request (400) error response is sent. Defaults to true, except when a proxy handler is used. The supported mime types are:
			'application/json'
			'application/x-www-form-urlencoded'
			'application/octet-stream'
			'text/ *'
			'multipart/form-data' */
            parse?: string | boolean;
            /** a string or an array of strings with the allowed mime types for the endpoint.Defaults to any of the supported mime types listed above.Note that allowing other mime types not listed will not enable them to be parsed, and that if parsing mode is 'parse', the request will result in an error response. */
            allow?: string | string[];
            /** a mime type string overriding the 'Content-Type' header value received.Defaults to no override. */
            override?: string;
            /**  limits the size of incoming payloads to the specified byte count.Allowing very large payloads may cause the server to run out of memory.Defaults to 1048576 (1MB).  */
            maxBytes?: number;
            /** payload reception timeout in milliseconds.Sets the maximum time allowed for the client to transmit the request payload (body) before giving up and responding with a Request Timeout (408) error response.Set to false to disable.Defaults to 10000 (10 seconds). */
            timeout?: number;
            /**  the directory used for writing file uploads.Defaults to os.tmpDir(). */
            uploads?: string;
			/**  determines how to handle payload parsing errors. Allowed values are:
			'error'return a Bad Request (400) error response. This is the default value.
			'log'report the error but continue processing the request.
			'ignore'take no action and continue processing the request. */
            failAction?: string;
        };
        /** pluginspecific configuration.plugins is an object where each key is a plugin name and the value is the plugin configuration.  */
        plugins?: IDictionary<any>;
        /** an array with [route prerequisites] methods which are executed in serial or in parallel before the handler is called.  */
        pre?: any[];
        /** validation rules for the outgoing response payload (response body).Can only validate object response: */
        response?: {
            /** the default HTTP status code when the payload is empty. Value can be 200 or 204.
            Note that a 200 status code is converted to a 204 only at the time or response transmission
            (the response status code will remain 200 throughout the request lifecycle unless manually set). Defaults to 200. */
            emptyStatusCode?: number;
			/**   the default response object validation rules (for all non-error responses) expressed as one of:
			true - any payload allowed (no validation performed). This is the default.
			false - no payload allowed.
			a Joi validation object.
			a validation function using the signature function(value, options, next) where:
			value - the object containing the response object.
			options - the server validation options.
			next(err) - the callback function called when validation is completed.  */
            schema?: boolean | any;
            /** HTTP status- codespecific validation rules.The status key is set to an object where each key is a 3 digit HTTP status code and the value has the same definition as schema.If a response status code is not present in the status object, the schema definition is used, expect for errors which are not validated by default.  */
            status?: { [statusCode: number] : boolean | any };
            /** the percent of responses validated (0100).Set to 0 to disable all validation.Defaults to 100 (all responses). */
            sample?: number;
			/**  defines what to do when a response fails validation.Options are:
			errorreturn an Internal Server Error (500) error response.This is the default value.
			loglog the error but send the response.  */
            failAction?: string;
            /** if true, applies the validation rule changes to the response.Defaults to false. */
            modify?: boolean;
            /** options to pass to Joi.Useful to set global options such as stripUnknown or abortEarly (the complete list is available here: https://github.com/hapijs/joi#validatevalue-schema-options-callback ).Defaults to no options.  */
            options?: any;
        };
        /** sets common security headers (disabled by default).To enable set security to true or to an object with the following options */
        security?: boolean | {
            /** controls the 'Strict-Transport-Security' header.If set to true the header will be set to max- age=15768000, if specified as a number the maxAge parameter will be set to that number.Defaults to true.You may also specify an object with the following fields: */
            hsts?: boolean | number | {
                /** the max- age portion of the header, as a number.Default is 15768000. */
                maxAge?: number;
                /**  a boolean specifying whether to add the includeSubdomains flag to the header. */
                includeSubdomains?: boolean;
                /** a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header. */
                preload?: boolean;
            };
            /** controls the 'X-Frame-Options' header.When set to true the header will be set to DENY, you may also specify a string value of 'deny' or 'sameorigin'.To use the 'allow-from' rule, you must set this to an object with the following fields: */
            xframe?: {
                /** either 'deny', 'sameorigin', or 'allow-from' */
                rule: string;
                /** when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored.If rule is 'allow-from' but source is unset, the rule will be automatically changed to 'sameorigin'. */
                source: string;
            };
            /** boolean that controls the 'X-XSS-PROTECTION' header for IE.Defaults to true which sets the header to equal '1; mode=block'.NOTE: This setting can create a security vulnerability in versions of IE below 8, as well as unpatched versions of IE8.See here and here for more information.If you actively support old versions of IE, it may be wise to explicitly set this flag to false. */
            xss?: boolean;
            /**  boolean controlling the 'X-Download-Options' header for IE, preventing downloads from executing in your context.Defaults to true setting the header to 'noopen'. */
            noOpen?: boolean;
            /** boolean controlling the 'X-Content-Type-Options' header.Defaults to true setting the header to its only and default option, 'nosniff'. */
            noSniff?: boolean;
        };
        /** HTTP state management (cookies) allows the server to store information on the client which is sent back to the server with every request (as defined in RFC 6265).state supports the following options: */
        state?: {
            /** determines if incoming 'Cookie' headers are parsed and stored in the request.state object.Defaults to true. */
            parse: boolean;
			/** determines how to handle cookie parsing errors.Allowed values are:
			'error'return a Bad Request (400) error response.This is the default value.
			'log'report the error but continue processing the request.
			'ignore'take no action. */
            failAction: string;
        };
        /**  request input validation rules for various request components.When using a Joi validation object, the values of the other inputs (i.e.headers, query, params, payload, and auth) are made available under the validation context (accessible in rules as Joi.ref('$query.key')).Note that validation is performed in order(i.e.headers, params, query, payload) and if type casting is used (converting a string to number), the value of inputs not yet validated will reflect the raw, unvalidated and unmodified values.The validate object supports: */
        validate?: {
			/** validation rules for incoming request headers.Values allowed:
			* trueany headers allowed (no validation performed).This is the default.
			falseno headers allowed (this will cause all valid HTTP requests to fail).
			a Joi validation object.
			a validation function using the signature function(value, options, next) where:
			valuethe object containing the request headers.
			optionsthe server validation options.
			next(err, value)the callback function called when validation is completed.
			*/
            headers?: boolean | IJoi | IValidationFunction;


			/** validation rules for incoming request path parameters, after matching the path against the route and extracting any parameters then stored in request.params.Values allowed:
			trueany path parameters allowed (no validation performed).This is the default.
			falseno path variables allowed.
			a Joi validation object.
			a validation function using the signature function(value, options, next) where:
			valuethe object containing the path parameters.
			optionsthe server validation options.
			next(err, value)the callback function called when validation is completed. */
            params?: boolean | IJoi | IValidationFunction;
			/** validation rules for an incoming request URI query component (the key- value part of the URI between '?' and '#').The query is parsed into its individual key- value pairs (using the qs module) and stored in request.query prior to validation.Values allowed:
			trueany query parameters allowed (no validation performed).This is the default.
			falseno query parameters allowed.
			a Joi validation object.
			a validation function using the signature function(value, options, next) where:
			valuethe object containing the query parameters.
			optionsthe server validation options.
			next(err, value)the callback function called when validation is completed. */
            query?: boolean | IJoi | IValidationFunction;
			/**  validation rules for an incoming request payload (request body).Values allowed:
			trueany payload allowed (no validation performed).This is the default.
			falseno payload allowed.
			a Joi validation object.
			a validation function using the signature function(value, options, next) where:
			valuethe object containing the payload object.
			optionsthe server validation options.
			next(err, value)the callback function called when validation is completed.  */
            payload?: boolean | IJoi | IValidationFunction;
            /** an optional object with error fields copied into every validation error response. */
            errorFields?: any;
			/** determines how to handle invalid requests.Allowed values are:
			'error'return a Bad Request (400) error response.This is the default value.
			'log'log the error but continue processing the request.
			'ignore'take no action.
			OR a custom error handler function with the signature 'function(request, reply, source, error)` where:
			requestthe request object.
			replythe continuation reply interface.
			sourcethe source of the invalid field (e.g. 'path', 'query', 'payload').
			errorthe error object prepared for the client response (including the validation function error under error.data). */
            failAction?: string | IRouteFailFunction;
            /** options to pass to Joi.Useful to set global options such as stripUnknown or abortEarly (the complete list is available here: https://github.com/hapijs/joi#validatevalue-schema-options-callback ).Defaults to no options. */
            options?: any;
        };
        /** define timeouts for processing durations: */
        timeout?: {
            /** response timeout in milliseconds.Sets the maximum time allowed for the server to respond to an incoming client request before giving up and responding with a Service Unavailable (503) error response.Disabled by default (false). */
            server: boolean | number;
            /** by default, node sockets automatically timeout after 2 minutes.Use this option to override this behavior.Defaults to undefined which leaves the node default unchanged.Set to false to disable socket timeouts. */
            socket: boolean | number;
        };

		/**  ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
		*route description used for generating documentation (string).
		*/
        description?: string;
		/**  ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
		*route notes used for generating documentation (string or array of strings).
		*/
        notes?: string | string[];
		/**  ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
		*route tags used for generating documentation (array of strings).
		*/
        tags?: string[]
    }

	/**
	* specifying the route access rules. Each rule is evaluated against an incoming request and access is granted if at least one rule matches
	*/
    export interface IRouteAdditionalConfigurationAuthAccess {
		/**
		* the application scope required to access the route. Value can be a scope string or an array of scope strings.
		* The authenticated credentials object scope property must contain at least one of the scopes defined to access the route.
		* If a scope string begins with a + character, that scope is required. If a scope string begins with a ! character,
		* that scope is forbidden. For example, the scope ['!a', '+b', 'c', 'd'] means the incoming request credentials'
		* scope must not include 'a', must include 'b', and must include on of 'c' or 'd'. You may also access properties
		* on the request object (query and params} to populate a dynamic scope by using {} characters around the property name,
		* such as 'user-{params.id}'. Defaults to false (no scope requirements).
		*/
        scope?: string | Array<string> | boolean;
		/** the required authenticated entity type. If set, must match the entity value of the authentication credentials. Available values:
		* any - the authentication can be on behalf of a user or application. This is the default value.
		* user - the authentication must be on behalf of a user which is identified by the presence of a user attribute in the credentials object returned by the authentication strategy.
		* app - the authentication must be on behalf of an application which is identified by the lack of presence of a user attribute in the credentials object returned by the authentication strategy.
		*/
        entity?: string;
    }

	/** server.realm http://hapijs.com/api#serverrealm
	The realm object contains server-wide or plugin-specific state that can be shared across various methods. For example, when calling server.bind(),
	the active realm settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin).
	Realms are a limited version of a sandbox where plugins can maintain state used by the framework when adding routes, extensions, and other properties.
	The server.realm object should be considered read-only and must not be changed directly except for the plugins property can be directly manipulated by the plugins (each setting its own under plugins[name]).
	exports.register = function (server, options, next) {
	console.log(server.realm.modifiers.route.prefix);
	return next();
	};
	*/
    export interface IServerRealm {
        /** when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method */
        modifiers: {
            /** routes preferences: */
            route: {
                /** - the route path prefix used by any calls to server.route() from the server. */
                prefix: string;
                /**  the route virtual host settings used by any calls to server.route() from the server. */
                vhost: string;
            };

        };
        /** the active plugin name (empty string if at the server root). */
        plugin: string;
        /** plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state. */
        plugins: IDictionary<any>;
        /**  settings overrides */
        settings: {
            files: {
                relativeTo: any;
            };
            bind: any;
        }
    }
	/** server.state(name, [options]) http://hapijs.com/api#serverstatename-options
	HTTP state management uses client cookies to persist a state across multiple requests. Registers a cookie definitions where:*/
    export interface IServerState {
/**  - the cookie name string. */name: string;

/** - are the optional cookie settings: */options: {
/**  - time - to - live in milliseconds.Defaults to null (session time- life - cookies are deleted when the browser is closed).*/ttl: number;
/**  - sets the 'Secure' flag.Defaults to false.*/isSecure: boolean;
/**  - sets the 'HttpOnly' flag.Defaults to false.*/isHttpOnly: boolean
/**  - the path scope.Defaults to null (no path).*/path: any;
/**  - the domain scope.Defaults to null (no domain). */domain: any;
			/**  if present and the cookie was not received from the client or explicitly set by the route handler, the cookie is automatically added to the response with the provided value. The value can be a function with signature function(request, next) where:
			request - the request object.
			next - the continuation function using the function(err, value) signature.*/
            autoValue: (request: Request, next: (err: any, value: any) => void) => void;
			/**  - encoding performs on the provided value before serialization. Options are:
			'none' - no encoding. When used, the cookie value must be a string. This is the default value.
			'base64' - string value is encoded using Base64.
			'base64json' - object value is JSON-stringified than encoded using Base64.
			'form' - object value is encoded using the x-www-form-urlencoded method.
			'iron' - Encrypts and sign the value using iron.*/
            encoding: string;
/**  - an object used to calculate an HMAC for cookie integrity validation.This does not provide privacy, only a mean to verify that the cookie value was generated by the server.Redundant when 'iron' encoding is used.Options are:*/sign: {
/** - algorithm options.Defaults to require('iron').defaults.integrity.*/integrity: any;
/** - password used for HMAC key generation.*/password: string;
            };
/**  - password used for 'iron' encoding.*/password: string;
/** - options for 'iron' encoding.Defaults to require('iron').defaults.*/iron: any;
/** - if false, errors are ignored and treated as missing cookies.*/ignoreErrors: boolean;
/**  - if true, automatically instruct the client to remove invalid cookies.Defaults to false.*/clearInvalid: boolean;
/**  - if false, allows any cookie value including values in violation of RFC 6265. Defaults to true.*/strictHeader: boolean;
/**  - overrides the default proxy localStatePassThrough setting.*/passThrough: any;
        };
    }

    export interface IFileHandlerConfig {
        /**  a path string or function as described above.*/
        path: string;
        /** an optional filename to specify if sending a 'Content-Disposition' header, defaults to the basename of path*/
        filename?: string;
		/**- specifies whether to include the 'Content-Disposition' header with the response. Available values:
		false - header is not included. This is the default value.
		'attachment'
		'inline'*/
        mode?: boolean | string;
        /** if true, looks for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false.*/
        lookupCompressed: boolean;
    }

	/**http://hapijs.com/api#route-handler
	Built-in handlers

	The framework comes with a few built-in handler types available by setting the route handler config to an object containing one of these keys.*/
    export interface IRouteHandlerConfig {
		/** generates a static file endpoint for serving a single file. file can be set to:
					a relative or absolute file path string (relative paths are resolved based on the route files configuration).
		a function with the signature function(request) which returns the relative or absolute file path.
		an object with the following options */
        file?: string | IRequestHandler<void> | IFileHandlerConfig;
		/** directory - generates a directory endpoint for serving static content from a directory. Routes using the directory handler must include a path parameter at the end of the path string (e.g. /path/to/somewhere/{param} where the parameter name does not matter). The path parameter can use any of the parameter options (e.g. {param} for one level files only, {param?} for one level files or the directory root, {param*} for any level, or {param*3} for a specific level). If additional path parameters are present, they are ignored for the purpose of selecting the file system resource. The directory handler is an object with the following options:
					path - (required) the directory root path (relative paths are resolved based on the route files configuration). Value can be:
		a single path string used as the prefix for any resources requested by appending the request path parameter to the provided string.
		an array of path strings. Each path will be attempted in order until a match is found (by following the same process as the single path string).
		a function with the signature function(request) which returns the path string or an array of path strings. If the function returns an error, the error is passed back to the client in the response.
		index - optional boolean|string|string[], determines if an index file will be served if found in the folder when requesting a directory. The given string or strings specify the name(s) of the index file to look for. If true, looks for 'index.html'. Any falsy value disables index file lookup. Defaults to true.
		listing - optional boolean, determines if directory listing is generated when a directory is requested without an index document. Defaults to false.
		showHidden - optional boolean, determines if hidden files will be shown and served. Defaults to false.
		redirectToSlash - optional boolean, determines if requests for a directory without a trailing slash are redirected to the same path with the missing slash. Useful for ensuring relative links inside the response are resolved correctly. Disabled when the server config router.stripTrailingSlash is true.Defaults to false.
		lookupCompressed - optional boolean, instructs the file processor to look for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false.
		defaultExtension - optional string, appended to file requests if the requested file is not found. Defaults to no extension.*/
        directory?: {
            path: string | Array<string> | IRequestHandler<string> | IRequestHandler<Array<string>>;
            index?: boolean | string | string[];
            listing?: boolean;
            showHidden?: boolean;
            redirectToSlash?: boolean;
            lookupCompressed?: boolean;
            defaultExtension?: string;
        };
        proxy?: IProxyHandlerConfig;
        view?: string | {
            template: string;
            context: {
                payload: any;
                params: any;
                query: any;
                pre: any;
            }
        };
        config?: {
            handler: any;
            bind: any;
            app: any;
            plugins: {
                [name: string]: any;
            };
            pre: Array<() => void>;
            validate: {
                headers: any;
                params: any;
                query: any;
                payload: any;
                errorFields?: any;
                failAction?: string | IFailAction;
            };
            payload: {
                output: {
                    data: any;
                    stream: any;
                    file: any;
                };
                parse?: any;
                allow?: string | Array<string>;
                override?: string;
                maxBytes?: number;
                uploads?: number;
                failAction?: string;
            };
            response: {
                schema: any;
                sample: number;
                failAction: string;
            };
            cache: {
                privacy: string;
                expiresIn: number;
                expiresAt: number;
            };
            auth: string | boolean | {
                mode: string;
                strategies: Array<string>;
                payload?: boolean | string;
                tos?: boolean | string;
                scope?: string | Array<string>;
                entity: string;
            };
            cors?: boolean;
            jsonp?: string;
            description?: string;
            notes?: string | Array<string>;
            tags?: Array<string>;
        };
    }
	/** Route configuration
	The route configuration object*/
    export interface IRouteConfiguration {
        /**  - (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the connection router configuration option.The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.*/
        path: string;
		/** - (required) the HTTP method.Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'.Any HTTP method is allowed, except for 'HEAD'.Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match).
		* Can be assigned an array of methods which has the same result as adding the same route with different methods manually.*/
        method: string | string[];
        /**  - an optional domain string or an array of domain strings for limiting the route to only requests with a matching host header field.Matching is done against the hostname part of the header only (excluding the port).Defaults to all hosts.*/
        vhost?: string;
        /**  - (required) the function called to generate the response after successful authentication and validation.The handler function is described in Route handler.If set to a string, the value is parsed the same way a prerequisite server method string shortcut is processed.Alternatively, handler can be assigned an object with a single key using the name of a registered handler type and value with the options passed to the registered handler.*/
        handler: ISessionHandler | string | IRouteHandlerConfig;
        /** - additional route options.*/
        config?: IRouteAdditionalConfigurationOptions;
    }
    /** Route public interface When route information is returned or made available as a property.  http://hapijs.com/api#route-public-interface */
    export interface IRoute {


        /** the route HTTP method. */
        method: string;
        /** the route path. */
        path: string;
        /** the route vhost option if configured. */
        vhost?: string | Array<string>;
        /** the [active realm] associated with the route.*/
        realm: IServerRealm;
        /** the [route options]  object with all defaults applied. */
        settings: IRouteAdditionalConfigurationOptions;
    }

    export interface IServerAuthScheme {
		/** authenticate(request, reply) - required function called on each incoming request configured with the authentication scheme where:
		request - the request object.
		reply - the reply interface the authentication method must call when done authenticating the request where:
		reply(err, response, result) - is called if authentication failed where:
		err - any authentication error.
		response - any authentication response action such as redirection. Ignored if err is present, otherwise required.
		result - an object containing:
		credentials - the authenticated credentials.
		artifacts - optional authentication artifacts.
		reply.continue(result) - is called if authentication succeeded where:
		result - same object as result above.
		When the scheme authenticate() method implementation calls reply() with an error condition, the specifics of the error affect whether additional authentication strategies will be attempted if configured for the route.
		.If the err returned by the reply() method includes a message, no additional strategies will be attempted.
		If the err does not include a message but does include a scheme name (e.g. Boom.unauthorized(null, 'Custom')), additional strategies will be attempted in order of preference.
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		var scheme = function (server, options) {
		return {
		authenticate: function (request, reply) {
		var req = request.raw.req;
		var authorization = req.headers.authorization;
		if (!authorization) {
		return reply(Boom.unauthorized(null, 'Custom'));
		}
		return reply(null, { credentials: { user: 'john' } });
		}
		};
		};
		server.auth.scheme('custom', scheme);*/
        authenticate(request: Request, reply: IReply): void;
		/** payload(request, reply) - optional function called to authenticate the request payload where:
		request - the request object.
		reply(err, response) - is called if authentication failed where:
		err - any authentication error.
		response - any authentication response action such as redirection. Ignored if err is present, otherwise required.
		reply.continue() - is called if payload authentication succeeded.
		When the scheme payload() method returns an error with a message, it means payload validation failed due to bad payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')), authentication may still be successful if the route auth.payload configuration is set to 'optional'.*/
        payload?(request: Request, reply: IReply): void;
		/** response(request, reply) - optional function called to decorate the response with authentication headers before the response headers or payload is written where:
		request - the request object.
		reply(err, response) - is called if an error occurred where:
		err - any authentication error.
		response - any authentication response to send instead of the current response. Ignored if err is present, otherwise required.
		reply.continue() - is called if the operation succeeded.*/
        response?(request: Request, reply: IReply): void;
        /** an optional object  */
        options?: {
            /**  if true, requires payload validation as part of the scheme and forbids routes from disabling payload auth validation. Defaults to false.*/
            payload: boolean;
        }
    }

    /**the response object where:
     statusCode - the HTTP status code.
     headers - an object containing the headers set.
     payload - the response payload string.
     rawPayload - the raw response payload buffer.
     raw - an object with the injection request and response objects:
     req - the simulated node request object.
     res - the simulated node response object.
     result - the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of the internal objects returned (instead of parsing the response string).
     request - the request object.*/
    export interface IServerInjectResponse {
        statusCode: number;
        headers: IDictionary<string>;
        payload: string;
        rawPayload: Buffer;
        raw: {
            req: http.ClientRequest;
            res: http.ServerResponse
        };
        result: string;
        request: Request;
    }

    export interface IServerInject {
        (options: string | IServerInjectOptions, callback: (res: IServerInjectResponse) => void): void;
        (options: string | IServerInjectOptions): IPromise<IServerInjectResponse>;
    }

    export interface IServerInjectOptions {
        /**  the request HTTP method (e.g. 'POST'). Defaults to 'GET'.*/
        method: string;
        /** the request URL. If the URI includes an authority (e.g. 'example.com:8080'), it is used to automatically set an HTTP 'Host' header, unless one was specified in headers.*/
        url: string;
        /** an object with optional request headers where each key is the header name and the value is the header content. Defaults to no additions to the default Shot headers.*/
        headers?: IDictionary<string>;
        /** n optional string, buffer or object containing the request payload. In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload processing defaults to 'application/json' if no 'Content-Type' header provided.*/
        payload?: string | {} | Buffer;
        /** an optional credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Defaults to no credentials.*/
        credentials?: any;
        /** an optional artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.*/
        artifacts?: any;
        /** sets the initial value of request.app*/
        app?: any;
        /** sets the initial value of request.plugins*/
        plugins?: any;
        /** allows access to routes with config.isInternal set to true. Defaults to false.*/
        allowInternals?: boolean;
        /** sets the remote address for the incoming connection.*/
        remoteAddress?: boolean;
        /**object with options used to simulate client request stream conditions for testing:
        error - if true, emits an 'error' event after payload transmission (if any). Defaults to false.
        close - if true, emits a 'close' event after payload transmission (if any). Defaults to false.
        end - if false, does not end the stream. Defaults to true.*/
        simulate?: {
            error: boolean;
            close: boolean;
            end: boolean;
        };
    }


	/** host - optional host to filter routes matching a specific virtual host. Defaults to all virtual hosts.
	The return value is an array where each item is an object containing:
	info - the connection.info the connection the table was generated for.
	labels - the connection labels.
	table - an array of routes where each route contains:
	settings - the route config with defaults applied.
	method - the HTTP method in lower case.
	path - the route path.*/
    export interface IConnectionTable {
        info: any;
        labels: any;
        table: IRoute[];
    }

    export interface ICookieSettings {
        /** - time - to - live in milliseconds.Defaults to null (session time- life - cookies are deleted when the browser is closed).*/
        ttl?: number;
        /** - sets the 'Secure' flag.Defaults to false.*/
        isSecure?: boolean;
        /** - sets the 'HttpOnly' flag.Defaults to false.*/
        isHttpOnly?: boolean;
        /** - the path scope.Defaults to null (no path).*/
        path?: string;
        /** - the domain scope.Defaults to null (no domain).*/
        domain?: any;
		/** - if present and the cookie was not received from the client or explicitly set by the route handler, the cookie is automatically added to the response with the provided value.The value can be a function with signature function(request, next) where:
		request - the request object.
		next - the continuation function using the function(err, value) signature.*/
        autoValue?: (request: Request, next: (err: any, value: any) => void) => void;
		/** - encoding performs on the provided value before serialization.Options are:
		'none' - no encoding.When used, the cookie value must be a string.This is the default value.
		'base64' - string value is encoded using Base64.
		'base64json' - object value is JSON- stringified than encoded using Base64.
		'form' - object value is encoded using the x- www - form - urlencoded method. */
        encoding?: string;
		/**  - an object used to calculate an HMAC for cookie integrity validation.This does not provide privacy, only a mean to verify that the cookie value was generated by the server.Redundant when 'iron' encoding is used.Options are:
		integrity - algorithm options.Defaults to require('iron').defaults.integrity.
		password - password used for HMAC key generation. */
        sign?: { integrity: any; password: string; }
        password?: string;
        iron?: any;
        ignoreErrors?: boolean;
        clearInvalid?: boolean;
        strictHeader?: boolean;
        passThrough?: any;
    }

	/** method - the method function with the signature is one of:
	function(arg1, arg2, ..., argn, next) where:
	arg1, arg2, etc. - the method function arguments.
	next - the function called when the method is done with the signature function(err, result, ttl) where:
	err - error response if the method failed.
	result - the return value.
	ttl - 0 if result is valid but cannot be cached. Defaults to cache policy.
	function(arg1, arg2, ..., argn) where:
	arg1, arg2, etc. - the method function arguments.
	the callback option is set to false.
	the method must returns a value (result, Error, or a promise) or throw an Error.*/
    export interface IServerMethod {
        //(): void;
        //(next: (err: any, result: any, ttl: number) => void): void;
        //(arg1: any): void;
        //(arg1: any, arg2: any, next: (err: any, result: any, ttl: number) => void): void;
        //(arg1: any, arg2: any): void;
        (...args: any[]): void;

    }
	/** options - optional configuration:
	bind - a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered.
	cache - the same cache configuration used in server.cache().
	callback - if false, expects the method to be a synchronous function. Note that using a synchronous function with caching will convert the method interface to require a callback as an additional argument with the signature function(err, result, cached, report) since the cache interface cannot return values synchronously. Defaults to true.
	generateKey - a function used to generate a unique key (for caching) from the arguments passed to the method function (the callback argument is not passed as input). The server will automatically generate a unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation function must be provided which takes the same arguments as the function and returns a unique string (or null if no key can be generated).*/
    export interface IServerMethodOptions {
        bind?: any;
        cache?: ICatBoxCacheOptions;
        callback?: boolean;
        generateKey?(args: any[]): string;
    }
	/** Request object

	The request object is created internally for each incoming request. It is different from the node.js request object received from the HTTP server callback (which is available in request.raw.req). The request object methods and properties change throughout the request lifecycle.
	Request events

	The request object supports the following events:

	'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
	'finish' - emitted when the request payload finished reading. The event method signature is function ().
	'disconnect' - emitted when a request errors or aborts unexpectedly.
	var Crypto = require('crypto');
	var Hapi = require('hapi');
	var server = new Hapi.Server();
	server.connection({ port: 80 });

	server.ext('onRequest', function (request, reply) {

	var hash = Crypto.createHash('sha1');
	request.on('peek', function (chunk) {

	hash.update(chunk);
	});

	request.once('finish', function () {

	console.log(hash.digest('hex'));
	});

	request.once('disconnect', function () {

	console.error('request aborted');
	});

	return reply.continue();
	});*/
    export class Request extends Events.EventEmitter {
        /** application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].*/
        app: any;
        /**  authentication information*/
        auth: {
            /** true is the request has been successfully authenticated, otherwise false.*/
            isAuthenticated: boolean;
            /**  the credential object received during the authentication process. The presence of an object does not mean successful authentication.  can be set in the validate function's callback.*/
            credentials: any;
            /**  an artifact object received from the authentication strategy and used in authentication-related actions.*/
            artifacts: any;
            /**  the route authentication mode.*/
            mode: any;
            /** the authentication error is failed and mode set to 'try'.*/
            error: any;
        };
        /** the connection used by this request*/
        connection: ServerConnection;
        /**  the node domain object used to protect against exceptions thrown in extensions, handlers and route prerequisites. Can be used to manually bind callback functions otherwise bound to other domains.*/
        domain: any;
        /** the raw request headers (references request.raw.headers).*/
        headers: IDictionary<string>;
        /** a unique request identifier (using the format '{now}:{connection.info.id}:{5 digits counter}').*/
        id: number;
        /**  request information */
        info: {
            /**  the request preferred encoding. */
            acceptEncoding: string;
            /**  if CORS is enabled for the route, contains the following: */
            cors: {
                isOriginMatch: boolean; /**  true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle. */
            };
            /**  content of the HTTP 'Host' header (e.g. 'example.com:8080'). */
            host: string;
            /**  the hostname part of the 'Host' header (e.g. 'example.com').*/
            hostname: string;
            /**  request reception timestamp. */
            received: number;
            /**  content of the HTTP 'Referrer' (or 'Referer') header. */
            referrer: string;
            /** remote client IP address. */
            remoteAddress: string;
            /**  remote client port. */
            remotePort: number;
            /**  request response timestamp (0 is not responded yet). */
            responded: number;
        };
        /**  the request method in lower case (e.g. 'get', 'post'). */
        method: string;
        /**  the parsed content-type header. Only available when payload parsing enabled and no payload error occurred. */
        mime: string;
        /**  an object containing the values of params, query, and payload before any validation modifications made. Only set when input validation is performed.*/
        orig: {
            params: any;
            query: any;
            payload: any;
        };
        /**  an object where each key is a path parameter name with matching value as described in Path parameters.*/
        params: IDictionary<string>;
        /** an array containing all the path params values in the order they appeared in the path.*/
        paramsArray: string[];
        /**  the request URI's path component. */
        path: string;
        /** the request payload based on the route payload.output and payload.parse settings.*/
        payload: stream.Readable | Buffer | any;
        /**  plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state.*/
        plugins: any;
        /** an object where each key is the name assigned by a route prerequisites function. The values are the raw values provided to the continuation function as argument. For the wrapped response object, use responses.*/
        pre: IDictionary<any>;
        /** the response object when set. The object can be modified but must not be assigned another object. To replace the response with another from within an extension point, use reply(response) to override with a different response. Contains null when no response has been set (e.g. when a request terminates prematurely when the client disconnects).*/
        response: Response;
        /**preResponses - same as pre but represented as the response object created by the pre method.*/
        preResponses: any;
        /**an object containing the query parameters.*/
        query: any;
        /**  an object containing the Node HTTP server objects. Direct interaction with these raw objects is not recommended.*/
        raw: {
            req: http.ClientRequest;
            res: http.ServerResponse;
        };
        /** the route public interface.*/
        route: IRoute;
        /** the server object. */
        server: Server;
        /** an object containing parsed HTTP state information (cookies) where each key is the cookie name and value is the matching cookie content after processing using any registered cookie definition. */
        state: any;
        /** complex object contining details on the url */
        url: {
            /** null when i tested */
            auth: any;
            /** null when i tested */
            hash: any;
            /** null when i tested */
            host: any;
            /** null when i tested */
            hostname: any;
            href: string;
            path: string;
            /** path without search*/
            pathname: string;
            /** null when i tested */
            port: any;
            /** null when i tested */
            protocol: any;
            /** querystring parameters*/
            query: IDictionary<string>;
            /** querystring parameters as a string*/
            search: string;
            /** null when i tested */
            slashes: any;
        };
		/** request.setUrl(url)

		Available only in 'onRequest' extension methods.

		Changes the request URI before the router begins processing the request where:

		url - the new request path value.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });

		server.ext('onRequest', function (request, reply) {

		// Change all requests to '/test'
		request.setUrl('/test');
		return reply.continue();
		});*/
        setUrl(url: string): void;
		/** request.setMethod(method)

		Available only in 'onRequest' extension methods.

		Changes the request method before the router begins processing the request where:

		method - is the request HTTP method (e.g. 'GET').
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });

		server.ext('onRequest', function (request, reply) {

		// Change all requests to 'GET'
		request.setMethod('GET');
		return reply.continue();
		});*/
        setMethod(method: string): void;
		/** request.log(tags, [data, [timestamp]])

		Always available.

		Logs request-specific events. When called, the server emits a 'request' event which can be used by other listeners or plugins. The arguments are:

		data - an optional message string or object with the application data being logged.
		timestamp - an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).
		Any logs generated by the server internally will be emitted only on the 'request-internal' channel and will include the event.internal flag set to true.

		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });

		server.on('request', function (request, event, tags) {

		if (tags.error) {
		console.log(event);
		}
		});

		var handler = function (request, reply) {

		request.log(['test', 'error'], 'Test event');
		return reply();
		};
		*/
        log(
            /** a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events.*/
            tags: string | string[],
            /** an optional message string or object with the application data being logged.*/
            data?: string,
            /**  an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).*/
            timestamp?: number): void;
		/** request.getLog([tags], [internal])

		Always available.

		Returns an array containing the events matching any of the tags specified (logical OR)
		request.getLog();
		request.getLog('error');
		request.getLog(['error', 'auth']);
		request.getLog(['error'], true);
		request.getLog(false);*/

        getLog(
            /** is a single tag string or array of tag strings. If no tags specified, returns all events.*/
            tags?: string,
            /**  filters the events to only those with a matching event.internal value. If true, only internal logs are included. If false, only user event are included. Defaults to all events (undefined).*/
            internal?: boolean): string[];

		/** request.tail([name])

		Available until immediately after the 'response' event is emitted.

		Adds a request tail which has to complete before the request lifecycle is complete where:

		name - an optional tail name used for logging purposes.
		Returns a tail function which must be called when the tail activity is completed.

		Tails are actions performed throughout the request lifecycle, but which may end after a response is sent back to the client. For example, a request may trigger a database update which should not delay sending back a response. However, it is still desirable to associate the activity with the request when logging it (or an error associated with it).

		When all tails completed, the server emits a 'tail' event.

		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });

		var get = function (request, reply) {

		var dbTail = request.tail('write to database');

		db.save('key', 'value', function () {

		dbTail();
		});

		return reply('Success!');
		};

		server.route({ method: 'GET', path: '/', handler: get });

		server.on('tail', function (request) {

		console.log('Request completed including db activity');
		});*/
        tail(
            /** an optional tail name used for logging purposes.*/
            name?: string): Function;
    }
	/** Response events

	The response object supports the following events:

	'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
	'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
	var Crypto = require('crypto');
	var Hapi = require('hapi');
	var server = new Hapi.Server();
	server.connection({ port: 80 });

	server.ext('onPreResponse', function (request, reply) {

	var response = request.response;
	if (response.isBoom) {
	return reply();
	}

	var hash = Crypto.createHash('sha1');
	response.on('peek', function (chunk) {

	hash.update(chunk);
	});

	response.once('finish', function () {

	console.log(hash.digest('hex'));
	});

	return reply.continue();
	});*/
    export class Response extends Events.EventEmitter {
        isBoom: boolean;
        /**  the HTTP response status code. Defaults to 200 (except for errors).*/
        statusCode: number;
        /** an object containing the response headers where each key is a header field name. Note that this is an incomplete list of headers to be included with the response. Additional headers will be added once the response is prepare for transmission.*/
        headers: IDictionary<string>;
        /** the value provided using the reply interface.*/
        source: any;
		/** a string indicating the type of source with available values:
		'plain' - a plain response such as string, number, null, or simple object (e.g. not a Stream, Buffer, or view).
		'buffer' - a Buffer.
		'view' - a view generated with reply.view().
		'file' - a file generated with reply.file() of via the directory handler.
		'stream' - a Stream.
		'promise' - a Promise object. */
        variety: string;
        /** application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].*/
        app: any;
        /** plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state. */
        plugins: any;
		/** settings - response handling flags:
		charset - the 'Content-Type' HTTP header 'charset' property. Defaults to 'utf-8'.
		encoding - the string encoding scheme used to serial data into the HTTP payload when source is a string or marshals into a string. Defaults to 'utf8'.
		passThrough - if true and source is a Stream, copies the statusCode and headers of the stream to the outbound response. Defaults to true.
		stringify - options used for source value requiring stringification. Defaults to no replacer and no space padding.
		ttl - if set, overrides the route cache expiration milliseconds value set in the route config. Defaults to no override.
		varyEtag - if true, a suffix will be automatically added to the 'ETag' header at transmission time (separated by a '-' character) when the HTTP 'Vary' header is present.*/
        settings: {
            charset: string;
            encoding: string;
            passThrough: boolean;
            stringify: any;
            ttl: number;
            varyEtag: boolean;
        }

		/**  sets the HTTP 'Content-Length' header (to avoid chunked transfer encoding) where:
		length - the header value. Must match the actual payload size.*/
        bytes(length: number): Response;
        /**  sets the 'Content-Type' HTTP header 'charset' property where: charset - the charset property value.*/
        charset(charset: string): Response;

		/**  sets the HTTP status code where:
		statusCode - the HTTP status code.*/
        code(statusCode: number): Response;
        /** sets the HTTP status code to Created (201) and the HTTP 'Location' header where: uri - an absolute or relative URI used as the 'Location' header value.*/
        created(uri: string): Response;


        /** encoding(encoding) - sets the string encoding scheme used to serial data into the HTTP payload where: encoding - the encoding property value (see node Buffer encoding).*/
        encoding(encoding: string): Response;

		/** etag(tag, options) - sets the representation entity tag where:
		tag - the entity tag string without the double-quote.
		options - optional settings where:
		weak - if true, the tag will be prefixed with the 'W/' weak signifier. Weak tags will fail to match identical tags for the purpose of determining 304 response status. Defaults to false.
		vary - if true and content encoding is set or applied to the response (e.g 'gzip' or 'deflate'), the encoding name will be automatically added to the tag at transmission time (separated by a '-' character). Ignored when weak is true. Defaults to true.*/
        etag(tag: string, options: {
            weak: boolean; vary: boolean;
        }): Response;

		/**header(name, value, options) - sets an HTTP header where:
		name - the header name.
		value - the header value.
		options - optional settings where:
		append - if true, the value is appended to any existing header value using separator. Defaults to false.
		separator - string used as separator when appending to an exiting value. Defaults to ','.
		override - if false, the header value is not set if an existing value present. Defaults to true.*/
        header(name: string, value: string, options?: {
            append: boolean;
            separator: string;
            override: boolean;
        }): Response;

		/** location(uri) - sets the HTTP 'Location' header where:
		uri - an absolute or relative URI used as the 'Location' header value.*/
        location(uri: string): Response;

		/** redirect(uri) - sets an HTTP redirection response (302) and decorates the response with additional methods listed below, where:
		uri - an absolute or relative URI used to redirect the client to another resource. */
        redirect(uri: string): Response;

		/** replacer(method) - sets the JSON.stringify() replacer argument where:
		method - the replacer function or array. Defaults to none.*/
        replacer(method: Function | Array<Function>): Response;

		/** spaces(count) - sets the JSON.stringify() space argument where:
		count - the number of spaces to indent nested object keys. Defaults to no indentation. */
        spaces(count: number): Response;
		/**state(name, value, [options]) - sets an HTTP cookie where:
		name - the cookie name.
		value - the cookie value. If no encoding is defined, must be a string.
		options - optional configuration. If the state was previously registered with the server using server.state(), the specified keys in options override those same keys in the server definition (but not others).*/
        state(name: string, value: string, options?: any): Response;

        /** sets a string suffix when the response is process via JSON.stringify().*/
        suffix(suffix: string): void;
		/** overrides the default route cache expiration rule for this response instance where:
msec - the time-to-live value in milliseconds.*/
        ttl(msec: number): void;
		/** type(mimeType) - sets the HTTP 'Content-Type' header where:
		mimeType - is the mime type. Should only be used to override the built-in default for each response type. */
        type(mimeType: string): Response;
		/** clears the HTTP cookie by setting an expired value where:
name - the cookie name.
options - optional configuration for expiring cookie. If the state was previously registered with the server using server.state(), the specified keys in options override those same keys in the server definition (but not others).*/
        unstate(name: string, options?: { [key: string]: string }): void;
		/** adds the provided header to the list of inputs affected the response generation via the HTTP 'Vary' header where:
header - the HTTP request header name.*/
        vary(header: string): void;
    }
    /** When using the redirect() method, the response object provides these additional methods */
    export class ResponseRedirect extends Response {
		/** sets the status code to 302 or 307 (based on the rewritable() setting) where:
isTemporary - if false, sets status to permanent. Defaults to true.*/
        temporary(isTemporary: boolean): void;
		/** sets the status code to 301 or 308 (based on the rewritable() setting) where:
isPermanent - if true, sets status to temporary. Defaults to false. */
        permanent(isPermanent: boolean): void;
		/** sets the status code to 301/302 for rewritable (allows changing the request method from 'POST' to 'GET') or 307/308 for non-rewritable (does not allow changing the request method from 'POST' to 'GET'). Exact code based on the temporary() or permanent() setting. Arguments:
isRewritable - if false, sets to non-rewritable. Defaults to true.
Permanent	Temporary
Rewritable	301	302(1)
Non-rewritable	308(2)	307
Notes: 1. Default value. 2. Proposed code, not supported by all clients. */
        rewritable(isRewritable: boolean): void;
    }
    /** info about a server connection */
    export interface IServerConnectionInfo {
        /**  - a unique connection identifier (using the format '{hostname}:{pid}:{now base36}').*/
        id: string;
        /**  - the connection creation timestamp.*/
        created: number;
        /**  - the connection start timestamp (0 when stopped).*/
        started: number;
        /**  the connection port based on the following rules:
        the configured port value before the server has been started.
        the actual port assigned when no port is configured or set to 0 after the server has been started.*/
        port: number;

        /** - the host name the connection was configured to. Defaults to the operating system hostname when available, otherwise 'localhost'.*/
        host: string;
        /** - the active IP address the connection was bound to after starting.Set to undefined until the server has been started or when using a non TCP port (e.g. UNIX domain socket).*/
        address: string;
        /**  - the protocol used:
        'http' - HTTP.
        'https' - HTTPS.
        'socket' - UNIX domain socket or Windows named pipe.*/
        protocol: string;
        /** a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains the uri setting if provided, otherwise constructed from the available settings. If no port is available or set to 0, the uri will not include a port component.*/
        uri: string;
    }
    /**
     *  undocumented.   The connection object constructed after calling server.connection();
     * can be accessed via server.connections; or request.connection;
     */
    export class ServerConnection extends Events.EventEmitter {
        domain: any;
        _events: { route: Function, domain: Function, _events: Function, _eventsCount: Function, _maxListeners: Function };
        _eventsCount: number;
        settings: IServerConnectionOptions;
        server: Server;
        /** ex: "tcp" */
        type: string;
        _started: boolean;
        /** dictionary of sockets */
        _connections: { [ip_port: string]: any };
        _onConnection: Function;
        registrations: any;
        _extensions: any;
        _requestCounter: { value: number; min: number; max: number };
        _load: any;
        states: {
            settings: any; cookies: any; names: any[]
        };
        auth: { connection: ServerConnection; _schemes: any; _strategies: any; settings: any; api: any; };
        _router: any;
        MSPluginsCollection: any;
        applicationCache: any;
        addEventListener: any;
        info: IServerConnectionInfo;
    }

	/** Server http://hapijs.com/api#server
	rver object is the main application container. The server manages all incoming connections along with all the facilities provided by the framework. A server can contain more than one connection (e.g. listen to port 80 and 8080).
	Server events
	The server object inherits from Events.EventEmitter and emits the following events:
	'log' - events logged with server.log() and server events generated internally by the framework.
	'start' - emitted when the server is started using server.start().
	'stop' - emitted when the server is stopped using server.stop().
	'request' - events generated by request.log(). Does not include any internally generated events.
	'request-internal' - request events generated internally by the framework (multiple events per request).
	'request-error' - emitted whenever an Internal Server Error (500) error response is sent. Single event per request.
	'response' - emitted after the response is sent back to the client (or when the client connection closed and no response sent, in which case request.response is null). Single event per request.
	'tail' - emitted when a request finished processing, including any registered tails. Single event per request.
	Note that the server object should not be used to emit application events as its internal implementation is designed to fan events out to the various plugin selections and not for application events.
	MORE EVENTS HERE: http://hapijs.com/api#server-events*/
    export class Server extends Events.EventEmitter {

        constructor(options?: IServerOptions);
		/** Provides a safe place to store server-specific run-time application data without potential conflicts with the framework internals. The data can be accessed whenever the server is accessible. Initialized with an empty object.
		var Hapi = require('hapi');
		server = new Hapi.Server();
		server.app.key = 'value';
		var handler = function (request, reply) {
		return reply(request.server.app.key);
		}; */
        app: any;
		/** An array containing the server's connections. When the server object is returned from server.select(), the connections array only includes the connections matching the selection criteria.
		var server = new Hapi.Server();
		server.connection({ port: 80, labels: 'a' });
		server.connection({ port: 8080, labels: 'b' });
		// server.connections.length === 2
		var a = server.select('a');
		// a.connections.length === 1*/
        connections: Array<ServerConnection>;
		/** When the server contains exactly one connection, info is an object containing information about the sole connection.
		* When the server contains more than one connection, each server.connections array member provides its own connection.info.
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		// server.info.port === 80
		server.connection({ port: 8080 });
		// server.info === null
		// server.connections[1].info.port === 8080
		*/
        info: IServerConnectionInfo;
		/** An object containing the process load metrics (when load.sampleInterval is enabled):
		rss - RSS memory usage.
		var Hapi = require('hapi');
		var server = new Hapi.Server({ load: { sampleInterval: 1000 } });
		console.log(server.load.rss);*/
        load: {
            /** - event loop delay milliseconds.*/
            eventLoopDelay: number;
            /**  - V8 heap usage.*/
            heapUsed: number;
        };
		/** When the server contains exactly one connection, listener is the node HTTP server object of the sole connection.
		When the server contains more than one connection, each server.connections array member provides its own connection.listener.
		var Hapi = require('hapi');
		var SocketIO = require('socket.io');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		var io = SocketIO.listen(server.listener);
		io.sockets.on('connection', function(socket) {
		socket.emit({ msg: 'welcome' });
		});*/
        listener: http.Server;

		/** server.methods
		An object providing access to the server methods where each server method name is an object property.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.method('add', function (a, b, next) {
		return next(null, a + b);
		});
		server.methods.add(1, 2, function (err, result) {
		// result === 3
		});*/
        methods: IDictionary<Function>;

		/** server.mime
		Provides access to the server MIME database used for setting content-type information. The object must not be modified directly but only through the mime server setting.
		var Hapi = require('hapi');
		var options = {
		mime: {
		override: {
		'node/module': {
		source: 'steve',
		compressible: false,
		extensions: ['node', 'module', 'npm'],
		type: 'node/module'
		}
		}
		}
		};
		var server = new Hapi.Server(options);
		// server.mime.path('code.js').type === 'application/javascript'
		// server.mime.path('file.npm').type === 'node/module'*/
        mime: any;
		/**server.plugins
		An object containing the values exposed by each plugin registered where each key is a plugin name and the values are the exposed properties by each plugin using server.expose(). Plugins may set the value of the server.plugins[name] object directly or via the server.expose() method.
		exports.register = function (server, options, next) {
		server.expose('key', 'value');
		// server.plugins.example.key === 'value'
		return next();
		};
		exports.register.attributes = {
		name: 'example'
		};*/
        plugins: IDictionary<any>;
		/** server.realm
		The realm object contains server-wide or plugin-specific state that can be shared across various methods. For example, when calling server.bind(), the active realm settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin). Realms are a limited version of a sandbox where plugins can maintain state used by the framework when adding routes, extensions, and other properties.
		modifiers - when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method and includes:
		route - routes preferences:
		prefix - the route path prefix used by any calls to server.route() from the server.
		vhost - the route virtual host settings used by any calls to server.route() from the server.
		plugin - the active plugin name (empty string if at the server root).
		plugins - plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state.
		settings - settings overrides:
		files.relativeTo
		bind
		The server.realm object should be considered read-only and must not be changed directly except for the plugins property can be directly manipulated by the plugins (each setting its own under plugins[name]).
		exports.register = function (server, options, next) {
		console.log(server.realm.modifiers.route.prefix);
		return next();
		};*/
        realm: IServerRealm;

		/** server.root
		The root server object containing all the connections and the root server methods (e.g. start(), stop(), connection()).*/
        root: Server;
		/** server.settings
		The server configuration object after defaults applied.
		var Hapi = require('hapi');
		var server = new Hapi.Server({
		app: {
		key: 'value'
		}
		});
		// server.settings.app === { key: 'value' }*/
        settings: IServerOptions;

		/** server.version
		The hapi module version number.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		// server.version === '8.0.0'*/
        version: string;

		/** server.after(method, [dependencies])
		Adds a method to be called after all the plugin dependencies have been registered and before the server starts (only called if the server is started) where:
		after - the method with signature function(plugin, next) where:
		server - server object the after() method was called on.
		next - the callback function the method must call to return control over to the application and complete the registration process. The function signature is function(err) where:
		err - internal error which is returned back via the server.start() callback.
		dependencies - a string or array of string with the plugin names to call this method after their after() methods. There is no requirement for the other plugins to be registered. Setting dependencies only arranges the after methods in the specified order.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.after(function () {
		// Perform some pre-start logic
		});
		server.start(function (err) {
		// After method already executed
		});
		server.auth.default(options)*/
        after(method: (plugin: any, next: (err: any) => void) => void, dependencies: string | string[]): void;

        auth: {
            /** server.auth.api
            An object where each key is a strategy name and the value is the exposed strategy API. Available on when the authentication scheme exposes an API by returning an api key in the object returned from its implementation function.
            When the server contains more than one connection, each server.connections array member provides its own connection.auth.api object.
            const server = new Hapi.Server();
            server.connection({ port: 80 });
            const scheme = function (server, options) {
            return {
            api: {
            settings: {
            x: 5
            }
            },
            authenticate: function (request, reply) {
            const req = request.raw.req;
            const authorization = req.headers.authorization;
            if (!authorization) {
            return reply(Boom.unauthorized(null, 'Custom'));
            }
            return reply.continue({ credentials: { user: 'john' } });
            }
            };
            };
            server.auth.scheme('custom', scheme);
            server.auth.strategy('default', 'custom');
            console.log(server.auth.api.default.settings.x);    // 5
            */
            api: {
                [index: string]: any;
            }
			/** server.auth.default(options)
			Sets a default strategy which is applied to every route where:
			options - a string with the default strategy name or an object with a specified strategy or strategies using the same format as the route auth handler options.
			The default does not apply when the route config specifies auth as false, or has an authentication strategy configured. Otherwise, the route authentication config is applied to the defaults. Note that the default only applies at time of route configuration, not at runtime. Calling default() after adding a route will have no impact on routes added prior.
			The default auth strategy configuration can be accessed via connection.auth.settings.default.
			var server = new Hapi.Server();
			server.connection({ port: 80 });
			server.auth.scheme('custom', scheme);
			server.auth.strategy('default', 'custom');
			server.auth.default('default');
			server.route({
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
			return reply(request.auth.credentials.user);
			}
			});*/
            default(options: string): void;
			/** server.auth.scheme(name, scheme)
			Registers an authentication scheme where:
			name - the scheme name.
			scheme - the method implementing the scheme with signature function(server, options) where:
			server - a reference to the server object the scheme is added to.
			options - optional scheme settings used to instantiate a strategy.*/
            scheme(name: string,
				/** When the scheme authenticate() method implementation calls reply() with an error condition, the specifics of the error affect whether additional authentication strategies will be attempted if configured for the route. If the err returned by the reply() method includes a message, no additional strategies will be attempted. If the err does not include a message but does include a scheme name (e.g. Boom.unauthorized(null, 'Custom')), additional strategies will be attempted in order of preference.
				n the scheme payload() method returns an error with a message, it means payload validation failed due to bad payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')), authentication may still be successful if the route auth.payload configuration is set to 'optional'.
				server = new Hapi.Server();
				server.connection({ port: 80 });
				scheme = function (server, options) {
				urn {
				authenticate: function (request, reply) {
				req = request.raw.req;
				var authorization = req.headers.authorization;
				if (!authorization) {
				return reply(Boom.unauthorized(null, 'Custom'));
				}
				urn reply(null, { credentials: { user: 'john' } });
				}
				};
				};
				*/
                scheme: (server: Server, options: any) => IServerAuthScheme): void;

			/** server.auth.strategy(name, scheme, [mode], [options])
			Registers an authentication strategy where:
			name - the strategy name.
			scheme - the scheme name (must be previously registered using server.auth.scheme()).
			mode - if true, the scheme is automatically assigned as a required strategy to any route without an auth config. Can only be assigned to a single server strategy. Value must be true (which is the same as 'required') or a valid authentication mode ('required', 'optional', 'try'). Defaults to false.
			options - scheme options based on the scheme requirements.
			var server = new Hapi.Server();
			server.connection({ port: 80 });
			server.auth.scheme('custom', scheme);
			server.auth.strategy('default', 'custom');
			server.route({
			method: 'GET',
			path: '/',
			config: {
			auth: 'default',
			handler: function (request, reply) {
			return reply(request.auth.credentials.user);
			}
			}
			});*/
            strategy(name: string, scheme: any, mode?: boolean | string, options?: any): void;

			/** server.auth.test(strategy, request, next)
			Tests a request against an authentication strategy where:
			strategy - the strategy name registered with server.auth.strategy().
			request - the request object.
			next - the callback function with signature function(err, credentials) where:
			err - the error if authentication failed.
			credentials - the authentication credentials object if authentication was successful.
			Note that the test() method does not take into account the route authentication configuration. It also does not perform payload authentication. It is limited to the basic strategy authentication execution. It does not include verifying scope, entity, or other route properties.
			var server = new Hapi.Server();
			server.connection({ port: 80 });
			server.auth.scheme('custom', scheme);
			server.auth.strategy('default', 'custom');
			server.route({
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
			request.server.auth.test('default', request, function (err, credentials) {
			if (err) {
			return reply({ status: false });
			}
			return reply({ status: true, user: credentials.name });
			});
			}
			});*/
            test(strategy: string, request: Request, next: (err: any, credentials: any) => void): void;
        };
		/** server.bind(context)
		Sets a global context used as the default bind object when adding a route or an extension where:
		context - the object used to bind this in handler and extension methods.
		When setting context inside a plugin, the context is applied only to methods set up by the plugin. Note that the context applies only to routes and extensions added after it has been set.
		var handler = function (request, reply) {
		return reply(this.message);
		};
		exports.register = function (server, options, next) {
		var bind = {
		message: 'hello'
		};
		server.bind(bind);
		server.route({ method: 'GET', path: '/', handler: handler });
		return next();
		};*/
        bind(context: any): void;


		/** server.cache(options)
		Provisions a cache segment within the server cache facility where:
		options - catbox policy configuration where:
		expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
		expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records expire. Uses local time. Cannot be used together with expiresIn.
		generateFunc - a function used to generate a new cache item if one is not found in the cache when calling get(). The method's signature is function(id, next) where: - id - the id string or object provided to the get() method. - next - the method called when the new item is returned with the signature function(err, value, ttl) where: - err - an error condition. - value - the new value generated. - ttl - the cache ttl value in milliseconds. Set to 0 to skip storing in the cache. Defaults to the cache global policy.
		staleIn - number of milliseconds to mark an item stored in cache as stale and attempt to regenerate it when generateFunc is provided. Must be less than expiresIn.
		staleTimeout - number of milliseconds to wait before checking if an item is stale.
		generateTimeout - number of milliseconds to wait before returning a timeout error when the generateFunc function takes too long to return a value. When the value is eventually returned, it is stored in the cache for future requests.
		cache - the cache name configured in 'server.cache`. Defaults to the default cache.
		segment - string segment name, used to isolate cached items within the cache partition. When called within a plugin, defaults to '!name' where 'name' is the plugin name. Required when called outside of a plugin.
		shared - if true, allows multiple cache provisions to share the same segment. Default to false.
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		var cache = server.cache({ segment: 'countries', expiresIn: 60 * 60 * 1000 });
		cache.set('norway', { capital: 'oslo' }, null, function (err) {
		cache.get('norway', function (err, value, cached, log) {
		// value === { capital: 'oslo' };
		});
		});*/
        cache(options: ICatBoxCacheOptions): void;

		/** server.connection([options])
		Adds an incoming server connection
		Returns a server object with the new connection selected.
		Must be called before any other server method that modifies connections is called for it to apply to the new connection (e.g. server.state()).
		Note that the options object is deeply cloned (with the exception of listener which is shallowly copied) and cannot contain any values that are unsafe to perform deep copy on.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		var web = server.connection({ port: 8000, host: 'example.com', labels: ['web'] });
		var admin = server.connection({ port: 8001, host: 'example.com', labels: ['admin'] });
		// server.connections.length === 2
		// web.connections.length === 1
		// admin.connections.length === 1 */
        connection(options: IServerConnectionOptions): Server;
		/** server.decorate(type, property, method, [options])
		Extends various framework interfaces with custom methods where:
		type - the interface being decorated. Supported types:
		'reply' - adds methods to the reply interface.
		'server' - adds methods to the Server object.
		property - the object decoration key name.
		method - the extension function.
        options - if the type is 'request', supports the following optional settings:
        'apply' - if true, the method function is invoked using the signature function(request) where request is the current request object and the returned value is assigned as the decoration.
		Note that decorations apply to the entire server and all its connections regardless of current selection.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.decorate('reply', 'success', function () {
		return this.response({ status: 'ok' });
		});
		server.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
		return reply.success();
		}
		});*/
        decorate(type: string, property: string, method: Function, options?: { apply: boolean }): void;

		/** server.dependency(dependencies, [after])
		Used within a plugin to declares a required dependency on other plugins where:
		dependencies - a single string or array of plugin name strings which must be registered in order for this plugin to operate. Plugins listed must be registered before the server is started. Does not provide version dependency which should be implemented using npm peer dependencies.
		after - an optional function called after all the specified dependencies have been registered and before the server starts. The function is only called if the server is started. If a circular dependency is detected, an exception is thrown (e.g. two plugins each has an after function to be called after the other). The function signature is function(server, next) where:
		server - the server the dependency() method was called on.
		next - the callback function the method must call to return control over to the application and complete the registration process. The function signature is function(err) where:
		err - internal error condition, which is returned back via the server.start() callback.
		exports.register = function (server, options, next) {
		server.dependency('yar', after);
		return next();
		};
		var after = function (server, next) {
		// Additional plugin registration logic
		return next();
		};*/
        dependency(dependencies: string | string[], after?: (server: Server, next: (err: any) => void) => void): void;


		/** server.expose(key, value)
		Used within a plugin to expose a property via server.plugins[name] where:
		key - the key assigned (server.plugins[name][key]).
		value - the value assigned.
		exports.register = function (server, options, next) {
		server.expose('util', function () { console.log('something'); });
		return next();
		};*/
        expose(key: string, value: any): void;

		/** server.expose(obj)
		Merges a deep copy of an object into to the existing content of server.plugins[name] where:
		obj - the object merged into the exposed properties container.
		exports.register = function (server, options, next) {
		server.expose({ util: function () { console.log('something'); } });
		return next();
		};*/
        expose(obj: any): void;

		/** server.ext(event, method, [options])
		Registers an extension function in one of the available extension points where:
		event - the event name.
		method - a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is function(request, reply) where:
		request - the request object. NOTE: Access the Response via request.response
		reply - the reply interface which is used to return control back to the framework. To continue normal execution of the request lifecycle, reply.continue() must be called. To abort processing and return a response to the client, call reply(value) where value is an error or any other valid response.
		this - the object provided via options.bind or the current active context set with server.bind().
		options - an optional object with the following:
		before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
		after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
		bind - a context object passed back to the provided method (via this) when called.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.ext('onRequest', function (request, reply) {
		// Change all requests to '/test'
		request.setUrl('/test');
		return reply.continue();
		});
		var handler = function (request, reply) {
		return reply({ status: 'ok' });
		};
		server.route({ method: 'GET', path: '/test', handler: handler });
		server.start();
		// All requests will get routed to '/test'*/
        ext(event: string, method: (request: Request, reply: IReply, bind?: any) => void, options?: { before: string | string[]; after: string | string[]; bind?: any }): void;

		/** server.handler(name, method)
		Registers a new handler type to be used in routes where:
		name - string name for the handler being registered. Cannot override the built-in handler types (directory, file, proxy, and view) or any previously registered type.
		method - the function used to generate the route handler using the signature function(route, options) where:
		route - the route public interface object.
		options - the configuration object provided in the handler config.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ host: 'localhost', port: 8000 });
		// Defines new handler for routes on this server
		server.handler('test', function (route, options) {
		return function (request, reply) {
		return reply('new handler: ' + options.msg);
		}
		});
		server.route({
		method: 'GET',
		path: '/',
		handler: { test: { msg: 'test' } }
		});
		server.start();
		The method function can have a defaults object or function property. If the property is set to an object, that object is used as the default route config for routes using this handler. If the property is set to a function, the function uses the signature function(method) and returns the route default configuration.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ host: 'localhost', port: 8000 });
		var handler = function (route, options) {
		return function (request, reply) {
		return reply('new handler: ' + options.msg);
		}
		};
		// Change the default payload processing for this handler
		handler.defaults = {
		payload: {
		output: 'stream',
		parse: false
		}
		};
		server.handler('test', handler);*/
        handler<THandlerConfig>(name: string, method: (route: IRoute, options: THandlerConfig) => ISessionHandler): void;

        /** server.initialize([callback])
        Initializes the server (starts the caches, finalizes plugin registration) but does not start listening
        on the connection ports, where:
        - `callback` - the callback method when server initialization is completed or failed with the signature
        `function(err)` where:
        - `err` - any initialization error condition.

        If no `callback` is provided, a `Promise` object is returned.

        Note that if the method fails and the callback includes an error, the server is considered to be in
        an undefined state and should be shut down. In most cases it would be impossible to fully recover as
        the various plugins, caches, and other event listeners will get confused by repeated attempts to
        start the server or make assumptions about the healthy state of the environment. It is recommended
        to assert that no error has been returned after calling `initialize()` to abort the process when the
        server fails to start properly. If you must try to resume after an error, call `server.stop()`
        first to reset the server state.
        */
        initialize(callback?: (error: any) => void): IPromise<void>;

        /** When the server contains exactly one connection, injects a request into the sole connection simulating an incoming HTTP request without making an actual socket connection.
		Injection is useful for testing purposes as well as for invoking routing logic internally without the overhead or limitations of the network stack.
		Utilizes the [shot module | https://github.com/hapijs/shot ] for performing injections, with some additional options and response properties
		* When the server contains more than one connection, each server.connections array member provides its own connection.inject().
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		var handler = function (request, reply) {
		return reply('Success!');
		};
		server.route({ method: 'GET', path: '/', handler: handler });
		server.inject('/', function (res) {
		console.log(res.result);
		});
		*/
        inject: IServerInject;

		/** server.log(tags, [data, [timestamp]])
		Logs server events that cannot be associated with a specific request. When called the server emits a 'log' event which can be used by other listeners or plugins to record the information or output to the console. The arguments are:
		tags - a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events. Any logs generated by the server internally include the 'hapi' tag along with event-specific information.
		data - an optional message string or object with the application data being logged.
		timestamp - an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.on('log', function (event, tags) {
		if (tags.error) {
		console.log(event);
		}
		});
		server.log(['test', 'error'], 'Test event');*/
        log(tags: string | string[], data?: string | any, timestamp?: number): void;
		/**server.lookup(id)
		When the server contains exactly one connection, looks up a route configuration where:
		id - the route identifier as set in the route options.
		returns the route public interface object if found, otherwise null.
		var server = new Hapi.Server();
		server.connection();
		server.route({
		method: 'GET',
		path: '/',
		config: {
		handler: function (request, reply) { return reply(); },
		id: 'root'
		}
		});
		var route = server.lookup('root');
		When the server contains more than one connection, each server.connections array member provides its own connection.lookup() method.*/
        lookup(id: string): IRoute;
		/** server.match(method, path, [host])
		When the server contains exactly one connection, looks up a route configuration where:
		method - the HTTP method (e.g. 'GET', 'POST').
		path - the requested path (must begin with '/').
		host - optional hostname (to match against routes with vhost).
		returns the route public interface object if found, otherwise null.
		var server = new Hapi.Server();
		server.connection();
		server.route({
		method: 'GET',
		path: '/',
		config: {
		handler: function (request, reply) { return reply(); },
		id: 'root'
		}
		});
		var route = server.match('get', '/');
		When the server contains more than one connection, each server.connections array member provides its own connection.match() method.*/
        match(method: string, path: string, host?: string): IRoute;




		/** server.method(name, method, [options])
		Registers a server method. Server methods are functions registered with the server and used throughout the application as a common utility. Their advantage is in the ability to configure them to use the built-in cache and share across multiple request handlers without having to create a common module.
		Methods are registered via server.method(name, method, [options])
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		// Simple arguments
		var add = function (a, b, next) {
		return next(null, a + b);
		};
		server.method('sum', add, { cache: { expiresIn: 2000 } });
		server.methods.sum(4, 5, function (err, result) {
		console.log(result);
		});
		// Object argument
		var addArray = function (array, next) {
		var sum = 0;
		array.forEach(function (item) {
		sum += item;
		});
		return next(null, sum);
		};
		server.method('sumObj', addArray, {
		cache: { expiresIn: 2000 },
		generateKey: function (array) {
		return array.join(',');
		}
		});
		server.methods.sumObj([5, 6], function (err, result) {
		console.log(result);
		});
		// Synchronous method with cache
		var addSync = function (a, b) {
		return a + b;
		};
		server.method('sumSync', addSync, { cache: { expiresIn: 2000 }, callback: false });
		server.methods.sumSync(4, 5, function (err, result) {
		console.log(result);
		}); */
        method(
            /**  a unique method name used to invoke the method via server.methods[name]. When configured with caching enabled, server.methods[name].cache.drop(arg1, arg2, ..., argn, callback) can be used to clear the cache for a given key. Supports using nested names such as utils.users.get which will automatically create the missing path under server.methods and can be accessed for the previous example via server.methods.utils.users.get.*/
            name: string,
            method: IServerMethod,
            options?: IServerMethodOptions): void;


		/**server.method(methods)
		Registers a server method function as described in server.method() using a configuration object where:
		methods - an object or an array of objects where each one contains:
		name - the method name.
		method - the method function.
		options - optional settings.
		var add = function (a, b, next) {
		next(null, a + b);
		};
		server.method({
		name: 'sum',
		method: add,
		options: {
		cache: {
		expiresIn: 2000
		}
		}
		});*/
        method(methods: {
            name: string; method: IServerMethod; options?: IServerMethodOptions
        } | Array<{
            name: string; method: IServerMethod; options?: IServerMethodOptions
        }>): void;
		/**server.path(relativeTo)
		Sets the path prefix used to locate static resources (files and view templates) when relative paths are used where:
		relativeTo - the path prefix added to any relative file path starting with '.'.
		Note that setting a path within a plugin only applies to resources accessed by plugin methods. If no path is set, the connection files.relativeTo configuration is used. The path only applies to routes added after it has been set.
		exports.register = function (server, options, next) {
		server.path(__dirname + '../static');
		server.route({ path: '/file', method: 'GET', handler: { file: './test.html' } });
		next();
		};*/
        path(relativeTo: string): void;


		/**
		* server.register(plugins, [options], callback)
		* Registers a plugin where:
		* plugins - an object or array of objects where each one is either:
		* a plugin registration function.
		* an object with the following:
		* register - the plugin registration function.
		* options - optional options passed to the registration function when called.
		* options - optional registration options (different from the options passed to the registration function):
		* select - a string or array of string labels used to pre-select connections for plugin registration.
		* routes - modifiers applied to each route added by the plugin:
		* prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
		* vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
		* callback - the callback function with signature function(err) where:
		* err - an error returned from the registration function. Note that exceptions thrown by the registration function are not handled by the framework.
		*
		* If no callback is provided, a Promise object is returned.
		*/
        register(plugins: any | any[], options: {
                select: string | string[];
                routes: {
                    prefix: string; vhost?: string | string[]
                };
            }, callback: (err: any) => void): void;
        register(plugins: any | any[], options: {
                select: string | string[];
                routes: {
                    prefix: string; vhost?: string | string[]
                };
            }): IPromise<any>;

        register(plugins: any | any[], callback: (err: any) => void): void;
        register(plugins: any | any[]): IPromise<any>;

		/**server.render(template, context, [options], callback)
		Utilizes the server views manager to render a template where:
		template - the template filename and path, relative to the views manager templates path (path or relativeTo).
		context - optional object used by the template to render context-specific result. Defaults to no context ({}).
		options - optional object used to override the views manager configuration.
		callback - the callback function with signature function (err, rendered, config) where:
		err - the rendering error if any.
		rendered - the result view string.
		config - the configuration used to render the template.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.views({
		engines: { html: require('handlebars') },
		path: __dirname + '/templates'
		});
		var context = {
		title: 'Views Example',
		message: 'Hello, World'
		};
		server.render('hello', context, function (err, rendered, config) {
		console.log(rendered);
		});*/
        render(template: string, context: any, options: any, callback: (err: any, rendered: any, config: any) => void): void;
		/** server.route(options)
		Adds a connection route where:
		options - a route configuration object or an array of configuration objects.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.route({ method: 'GET', path: '/', handler: function (request, reply) { return reply('ok'); } });
		server.route([
		{ method: 'GET', path: '/1', handler: function (request, reply) { return reply('ok'); } },
		{ method: 'GET', path: '/2', handler: function (request, reply) { return reply('ok'); } }
		]);*/
        route(options: IRouteConfiguration): void;
        route(options: IRouteConfiguration[]): void;
		/**server.select(labels)
		Selects a subset of the server's connections where:
		labels - a single string or array of strings of labels used as a logical OR statement to select all the connections with matching labels in their configuration.
		Returns a server object with connections set to the requested subset. Selecting again on a selection operates as a logic AND statement between the individual selections.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80, labels: ['a'] });
		server.connection({ port: 8080, labels: ['b'] });
		server.connection({ port: 8081, labels: ['c'] });
		server.connection({ port: 8082, labels: ['c','d'] });
		var a = server.select('a');          // The server with port 80
		var ab = server.select(['a','b']);   // A list of servers containing the server with port 80 and the server with port 8080
		var c = server.select('c');          // A list of servers containing the server with port 8081 and the server with port 8082 */
        select(labels: string | string[]): Server | Server[];
		/** server.start([callback])
		Starts the server connections by listening for incoming requests on the configured port of each listener (unless the connection was configured with autoListen set to false), where:
		callback - optional callback when server startup is completed or failed with the signature function(err) where:
		err - any startup error condition.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.start(function (err) {
		console.log('Server started at: ' + server.info.uri);
		});*/
        start(callback?: (err: any) => void): IPromise<void>;
		/** server.state(name, [options])
		HTTP state management uses client cookies to persist a state across multiple requests. Registers a cookie definitions
		State defaults can be modified via the server connections.routes.state configuration option.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		// Set cookie definition
		server.state('session', {
		ttl: 24 * 60 * 60 * 1000,     // One day
		isSecure: true,
		path: '/',
		encoding: 'base64json'
		});
		// Set state in route handler
		var handler = function (request, reply) {
		var session = request.state.session;
		if (!session) {
		session = { user: 'joe' };
		}
		session.last = Date.now();
		return reply('Success').state('session', session);
		};
		Registered cookies are automatically parsed when received. Parsing rules depends on the route state.parse configuration. If an incoming registered cookie fails parsing, it is not included in request.state, regardless of the state.failAction setting. When state.failAction is set to 'log' and an invalid cookie value is received, the server will emit a 'request-internal' event. To capture these errors subscribe to the 'request-internal' events and filter on 'error' and 'state' tags:
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.on('request-internal', function (request, event, tags) {
		if (tags.error && tags.state) {
		console.error(event);
		}
		});	*/
        state(name: string, options?: ICookieSettings): void;

		/** server.stop([options], [callback])
		Stops the server's connections by refusing to accept any new connections or requests (existing connections will continue until closed or timeout), where:
		options - optional object with:
		timeout - overrides the timeout in millisecond before forcefully terminating a connection. Defaults to 5000 (5 seconds).
		callback - optional callback method with signature function() which is called once all the connections have ended and it is safe to exit the process.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80 });
		server.stop({ timeout: 60 * 1000 }, function () {
		console.log('Server stopped');
		});*/
        stop(options?: { timeout: number }, callback?: () => void): IPromise<void>;
		/**server.table([host])
		Returns a copy of the routing table where:
		host - optional host to filter routes matching a specific virtual host. Defaults to all virtual hosts.
		The return value is an array where each item is an object containing:
		info - the connection.info the connection the table was generated for.
		labels - the connection labels.
		table - an array of routes where each route contains:
		settings - the route config with defaults applied.
		method - the HTTP method in lower case.
		path - the route path.
		Note that if the server has not been started and multiple connections use port 0, the table items will override each other and will produce an incomplete result.
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80, host: 'example.com' });
		server.route({ method: 'GET', path: '/example', handler: function (request, reply) { return reply(); } });
		var table = server.table();
		When calling connection.table() directly on each connection, the return value is the same as the array table item value of an individual connection:
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.connection({ port: 80, host: 'example.com' });
		server.route({ method: 'GET', path: '/example', handler: function (request, reply) { return reply(); } });
		var table = server.connections[0].table();
		//[
		//    {
		//        method: 'get',
		//        path: '/example',
		//        settings: { ... }
		//    }
		//]
		*/
        table(host?: any): IConnectionTable;

		/**server.views(options)
		Initializes the server views manager
		var Hapi = require('hapi');
		var server = new Hapi.Server();
		server.views({
		engines: {
		html: require('handlebars'),
		jade: require('jade')
		},
		path: '/static/templates'
		});
		When server.views() is called within a plugin, the views manager is only available to plugins methods.*/
        views(options: IServerViewsConfiguration): void;

    }
}
// Type definitions for socket.io 1.4.4
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre/>, Damian Connolly <https://github.com/divillysausages/>, Florent Poujol <https://github.com/florentpoujol/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../node/node.d.ts' />

declare module 'socket.io' {
	var server: SocketIOStatic;

	export = server;
}

interface SocketIOStatic {
	/**
	 * Default Server constructor
	 */
	(): SocketIO.Server;
	
	/**
	 * Creates a new Server
	 * @param srv The HTTP server that we're going to bind to
	 * @param opts An optional parameters object
	 */
	(srv: any, opts?: SocketIO.ServerOptions): SocketIO.Server;
	
	/**
	 * Creates a new Server
	 * @param port A port to bind to, as a number, or a string
	 * @param An optional parameters object
	 */
	(port: string|number, opts?: SocketIO.ServerOptions): SocketIO.Server;
	
	/**
	 * Creates a new Server
	 * @param A parameters object
	 */
	(opts: SocketIO.ServerOptions): SocketIO.Server;

	/**
	 * Backwards compatibility
	 * @see io().listen()
	 */
    listen: SocketIOStatic;
}

declare module SocketIO {
	
	interface Server {
		
		/**
		 * A dictionary of all the namespaces currently on this Server
		 */
		nsps: {[namespace: string]: Namespace};
		
		/**
		 * The default '/' Namespace
		 */
		sockets: Namespace;
		
		/**
		 * Sets the 'json' flag when emitting an event
		 */
		json: Server;
		
		/**
		 * Server request verification function, that checks for allowed origins
		 * @param req The http.IncomingMessage request
		 * @param fn The callback to be called. It should take one parameter, err,
		 * which will be null if there was no problem, and one parameter, success,
		 * of type boolean
		 */
		checkRequest( req:any, fn:( err: any, success: boolean ) => void ):void;
		
		/**
		 * Gets whether we're serving the client.js file or not
		 * @default true
		 */
		serveClient(): boolean;
		
		/**
		 * Sets whether we're serving the client.js file or not
		 * @param v True if we want to serve the file, false otherwise
		 * @default true
		 * @return This Server
		 */
		serveClient( v: boolean ): Server;
		
		/**
		 * Gets the client serving path
		 * @default '/socket.io'
		 */
		path(): string;
		
		/**
		 * Sets the client serving path
		 * @param v The path to serve the client file on
		 * @default '/socket.io'
		 * @return This Server
		 */
		path( v: string ): Server;
		
		/**
		 * Gets the adapter that we're going to use for handling rooms
		 * @default typeof Adapter
		 */
		adapter(): any;
		
		/**
		 * Sets the adapter (class) that we're going to use for handling rooms
		 * @param v The class for the adapter to create
		 * @default typeof Adapter
		 * @return This Server
		 */
		adapter( v: any ): Server;
		
		/**
		 * Gets the allowed origins for requests
		 * @default "*:*"
		 */
		origins(): string;
		
		/**
		 * Sets the allowed origins for requests
		 * @param v The allowed origins, in host:port form
		 * @default "*:*"
		 * return This Server
		 */
		origins( v: string ): Server;
		
		/**
		 * Attaches socket.io to a server
		 * @param srv The http.Server that we want to attach to
		 * @param opts An optional parameters object
		 * @return This Server
		 */
		attach( srv: any, opts?: ServerOptions ): Server;
		
		/**
		 * Attaches socket.io to a port
		 * @param port The port that we want to attach to
		 * @param opts An optional parameters object
		 * @return This Server
		 */
		attach( port: number, opts?: ServerOptions ): Server;
		
		/**
		 * @see attach( srv, opts )
		 */
		listen( srv: any, opts?: ServerOptions ): Server;
		
		/**
		 * @see attach( port, opts )
		 */
		listen( port: number, opts?: ServerOptions ): Server;
		
		/**
		 * Binds socket.io to an engine.io intsance
		 * @param src The Engine.io (or compatible) server to bind to
		 * @return This Server
		 */
		bind( srv: any ): Server;
		
		/**
		 * Called with each incoming connection
		 * @param socket The Engine.io Socket
		 * @return This Server
		 */
		onconnection( socket: any ): Server;
		
		/**
		 * Looks up/creates a Namespace
		 * @param nsp The name of the NameSpace to look up/create. Should start
		 * with a '/'
		 * @return The Namespace
		 */
		of( nsp: string ): Namespace;
		
		/**
		 * Closes the server connection
		 */
		close():void;

		/**
		 * The event fired when we get a new connection
		 * @param event The event being fired: 'connection'
		 * @param listener A listener that should take one parameter of type Socket
		 * @return The default '/' Namespace
		 */
		on( event: 'connection', listener: ( socket: Socket ) => void ): Namespace;
		
		/**
		 * @see on( 'connection', listener )
		 */
		on( event: 'connect', listener: ( socket: Socket ) => void ): Namespace;
		
		/**
		 * Base 'on' method to add a listener for an event
		 * @param event The event that we want to add a listener for
		 * @param listener The callback to call when we get the event. The parameters
		 * for the callback depend on the event
		 * @return The default '/' Namespace
		 */
		on( event: string, listener: Function ): Namespace;
		
		/**
		 * Targets a room when emitting to the default '/' Namespace
		 * @param room The name of the room that we're targeting 
		 * @return The default '/' Namespace
		 */
		to( room: string ): Namespace;
		
		/**
		 * @see to( room )
		 */
		in( room: string ): Namespace;
		
		/**
		 * Registers a middleware function, which is a function that gets executed
		 * for every incoming Socket, on the default '/' Namespace
		 * @param fn The function to call when we get a new incoming socket. It should
		 * take one parameter of type Socket, and one callback function to call to
		 * execute the next middleware function. The callback can take one optional
		 * parameter, err, if there was an error. Errors passed to middleware callbacks
		 * are sent as special 'error' packets to clients
		 * @return The default '/' Namespace
		 */
		use( fn: ( socket:Socket, fn: ( err?: any ) => void ) =>void ): Namespace;
		
		/**
		 * Emits an event to the default Namespace
		 * @param event The event that we want to emit
		 * @param args Any number of optional arguments to pass with the event. If the
		 * last argument is a function, it will be called as an ack. The ack should
		 * take whatever data was sent with the packet
		 * @return The default '/' Namespace
		 */
		emit( event: string, ...args: any[]): Namespace;
		
		/**
		 * Sends a 'message' event
		 * @see emit( event, ...args )
		 * @return The default '/' Namespace
		 */
		send( ...args: any[] ): Namespace;
		
		/**
		 * @see send( ...args )
		 */
		write( ...args: any[] ): Namespace;

		/**
		 * Gets a list of clients
		 * @return The default '/' Namespace
		 */
		clients( ...args: any[] ): Namespace;

		/**
		 * Sets the compress flag
		 * @return The default '/' Namespace
		 */
		compress( ...args: any[] ): Namespace;
	}
	
	/**
	 * Options to pass to our server when creating it
	 */
	interface ServerOptions {
		
		/**
		 * The path to server the client file to
		 * @default '/socket.io'
		 */
		path?: string;
		
		/**
		 * Should we serve the client file?
		 * @default true
		 */
		serveClient?: boolean;
		
		/**
		 * The adapter to use for handling rooms. NOTE: this should be a class,
		 * not an object
		 * @default typeof Adapter
		 */
		adapter?: Adapter;
		
		/**
		 * Accepted origins
		 * @default '*:*'
		 */
		origins?: string;
		
		/**
		 * How many milliseconds without a pong packed to consider the connection closed (engine.io)
		 * @default 60000
		 */
		pingTimeout?: number;
		
		/**
		 * How many milliseconds before sending a new ping packet (keep-alive) (engine.io)
		 * @default 25000
		 */
		pingInterval?: number;
		
		/**
		 * How many bytes or characters a message can be when polling, before closing the session
		 * (to avoid Dos) (engine.io)
		 * @default 10E7
		 */
		maxHttpBufferSize?: number;
		
		/**
		 * A function that receives a given handshake or upgrade request as its first parameter,
		 * and can decide whether to continue or not. The second argument is a function that needs
		 * to be called with the decided information: fn( err, success ), where success is a boolean
		 * value where false means that the request is rejected, and err is an error code (engine.io)
		 * @default null
		 */
		allowRequest?: (request:any, callback: (err: number, success: boolean) => void) => void;
		
		/**
		 * Transports to allow connections to (engine.io)
		 * @default ['polling','websocket']
		 */
		transports?: string[];
		
		/**
		 * Whether to allow transport upgrades (engine.io)
		 * @default true
		 */
		allowUpgrades?: boolean;
		
		/**
		 * parameters of the WebSocket permessage-deflate extension (see ws module).
		 * Set to false to disable (engine.io)
		 * @default true
		 */
		perMessageDeflate?: Object|boolean;
		
		/**
		 * Parameters of the http compression for the polling transports (see zlib).
		 * Set to false to disable, or set an object with parameter "threshold:number"
		 * to only compress data if the byte size is above this value (1024) (engine.io)
		 * @default true|1024
		 */
		httpCompression?: Object|boolean;
		
		/**
		 * Name of the HTTP cookie that contains the client sid to send as part of 
		 * handshake response headers. Set to false to not send one (engine.io)
		 * @default "io"
		 */
		cookie?: string|boolean;
	}

	/**
	 * The Namespace, sandboxed environments for sockets, each connection
	 * to a Namespace requires a new Socket
	 */
	interface Namespace extends NodeJS.EventEmitter {
		
		/**
		 * The name of the NameSpace
		 */
		name: string;
		
		/**
		 * The controller Server for this Namespace
		 */
		server: Server;
		
		/**
		 * A dictionary of all the Sockets connected to this Namespace, where
		 * the Socket ID is the key
		 */
		sockets: { [id: string]: Socket };
		
		/**
		 * A dictionary of all the Sockets connected to this Namespace, where
		 * the Socket ID is the key
		 */
		connected: { [id: string]: Socket };
		
		/**
		 * The Adapter that we're using to handle dealing with rooms etc
		 */
		adapter: Adapter;
		
		/**
		 * Sets the 'json' flag when emitting an event
		 */
		json: Namespace;
		
		/**
		 * Registers a middleware function, which is a function that gets executed
		 * for every incoming Socket
		 * @param fn The function to call when we get a new incoming socket. It should
		 * take one parameter of type Socket, and one callback function to call to
		 * execute the next middleware function. The callback can take one optional
		 * parameter, err, if there was an error. Errors passed to middleware callbacks
		 * are sent as special 'error' packets to clients
		 * @return This Namespace
		 */
		use( fn: ( socket:Socket, fn: ( err?: any ) => void ) =>void ): Namespace;
		
		/**
		 * Targets a room when emitting
		 * @param room The name of the room that we're targeting 
		 * @return This Namespace
		 */
		to( room: string ): Namespace;
		
		/**
		 * @see to( room )
		 */
		in( room: string ): Namespace;
		
		/**
		 * Sends a 'message' event
		 * @see emit( event, ...args )
		 * @return This Namespace
		 */
		send( ...args: any[] ): Namespace;
		
		/**
		 * @see send( ...args )
		 */
		write( ...args: any[] ): Namespace;

		/**
		 * The event fired when we get a new connection
		 * @param event The event being fired: 'connection'
		 * @param listener A listener that should take one parameter of type Socket
		 * @return This Namespace
		 */
		on( event: 'connection', listener: ( socket: Socket ) => void ): this;

		/**
		 * @see on( 'connection', listener )
		 */
		on( event: 'connect', listener: ( socket: Socket ) => void ): this;

		/**
		 * Base 'on' method to add a listener for an event
		 * @param event The event that we want to add a listener for
		 * @param listener The callback to call when we get the event. The parameters
		 * for the callback depend on the event
		 * @ This Namespace
		 */
		on( event: string, listener: Function ): this;

		/**
		 * Gets a list of clients.
		 * @return This Namespace
		 */
		clients( fn: Function ): Namespace;

		/**
		 * Sets the compress flag.
		 * @param compress If `true`, compresses the sending data
		 * @return This Namespace
		 */
		compress( compress: boolean ): Namespace;
	}

	/**
	 * The socket, which handles our connection for a namespace. NOTE: while
	 * we technically extend NodeJS.EventEmitter, we're not putting it here
	 * as we have a problem with the emit() event (as it's overridden with a
	 * different return)
	 */
	interface Socket {
		
		/**
		 * The namespace that this socket is for
		 */
		nsp: Namespace;
		
		/**
		 * The Server that our namespace is in
		 */
		server: Server;
		
		/**
		 * The Adapter that we use to handle our rooms
		 */
		adapter: Adapter;
		
		/**
		 * The unique ID for this Socket. Regenerated at every connection. This is
		 * also the name of the room that the Socket automatically joins on connection
		 */
		id: string;
		
		/**
		 * The http.IncomingMessage request sent with the connection. Useful 
		 * for recovering headers etc
		 */
		request: any;
		
		/**
		 * The Client associated with this Socket
		 */
		client: Client;
		
		/**
		 * The underlying Engine.io Socket instance
		 */
		conn: {
		
			/**
			 * The ID for this socket - matches Client.id
			 */
			id: string;
			
			/**
			 * The Engine.io Server for this socket
			 */
			server: any;
			
			/**
			 * The ready state for the client. Either 'opening', 'open', 'closing', or 'closed'
			 */
			readyState: string;
			
			/**
			 * The remote IP for this connection
			 */
			remoteAddress: string;
		};
		
		/**
		 * The list of rooms that this Socket is currently in, where
		 * the ID the the room ID
		 */
		rooms: { [id: string]: string };
		
		/**
		 * Is the Socket currently connected?
		 */
		connected: boolean;
		
		/**
		 * Is the Socket currently disconnected?
		 */
		disconnected: boolean;
		
		/**
		 * The object used when negociating the handshake
		 */
		handshake: {
			/**
			 * The headers passed along with the request. e.g. 'host', 
			 * 'connection', 'accept', 'referer', 'cookie'
			 */
			headers: any;
			
			/**
			 * The current time, as a string
			 */
			time: string;
			
			/**
			 * The remote address of the connection request
			 */
			address: string;
			
			/**
			 * Is this a cross-domain request?
			 */
			xdomain: boolean;
			
			/**
			 * Is this a secure request?
			 */
			secure: boolean;
			
			/**
			 * The timestamp for when this was issued
			 */
			issued: number;
			
			/**
			 * The request url
			 */
			url: string;
			
			/**
			 * Any query string parameters in the request url
			 */
			query: any;
		};
		
		/**
		 * Sets the 'json' flag when emitting an event
		 */
		json: Socket;
		
		/**
		 * Sets the 'volatile' flag when emitting an event. Volatile messages are
		 * messages that can be dropped because of network issues and the like. Use
		 * for high-volume/real-time messages where you don't need to receive *all*
		 * of them
		 */
		volatile: Socket;
		
		/**
		 * Sets the 'broadcast' flag when emitting an event. Broadcasting an event
		 * will send it to all the other sockets in the namespace except for yourself
		 */
		broadcast: Socket;
		
		/**
		 * Emits an event to this client. If the 'broadcast' flag was set, this will
		 * emit to all other clients, except for this one
		 * @param event The event that we want to emit
		 * @param args Any number of optional arguments to pass with the event. If the
		 * last argument is a function, it will be called as an ack. The ack should
		 * take whatever data was sent with the packet
		 * @return This Socket
		 */
		emit( event: string, ...args: any[]): Socket;
		
		/**
		 * Targets a room when broadcasting
		 * @param room The name of the room that we're targeting
		 * @return This Socket
		 */
		to( room: string ): Socket;
		
		/**
		 * @see to( room )
		 */
		in( room: string ): Socket;
		
		/**
		 * Sends a 'message' event
		 * @see emit( event, ...args )
		 */
		send( ...args: any[] ): Socket;
		
		/**
		 * @see send( ...args )
		 */
		write( ...args: any[] ): Socket;
		
		/**
		 * Joins a room. You can join multiple rooms, and by default, on connection,
		 * you join a room with the same name as your ID
		 * @param name The name of the room that we want to join
		 * @param fn An optional callback to call when we've joined the room. It should
		 * take an optional parameter, err, of a possible error
		 * @return This Socket
		 */
		join( name: string, fn?: ( err?: any ) => void ): Socket;
		
		/**
		 * Leaves a room
		 * @param name The name of the room to leave
		 * @param fn An optional callback to call when we've left the room. It should
		 * take on optional parameter, err, of a possible error
		 */
		leave( name: string, fn?: Function ): Socket;
		
		/**
		 * Leaves all the rooms that we've joined
		 */
		leaveAll(): void;
		
		/**
		 * Disconnects this Socket
		 * @param close If true, also closes the underlying connection
		 * @return This Socket
		 */
		disconnect( close?: boolean ): Socket;
		
		/**
		 * Adds a listener for a particular event. Calling multiple times will add
		 * multiple listeners
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on the 
		 * event in question
		 * @return This Socket
		 */
		on( event: string, fn: Function ): Socket;
		
		/**
		 * @see on( event, fn )
		 */
		addListener( event: string, fn: Function ): Socket;
		
		/**
		 * Adds a listener for a particular event that will be invoked
		 * a single time before being automatically removed
		 * @param event The event that we're listening for
		 * @param fn The function to call when we get the event. Parameters depend on
		 * the event in question
		 * @return This Socket
		 */
		once( event: string, fn: Function ): Socket;
		
		/**
		 * Removes a listener for a particular type of event. This will either
		 * remove a specific listener, or all listeners for this type of event
		 * @param event The event that we want to remove the listener of
		 * @param fn The function to remove, or null if we want to remove all functions
		 * @return This Socket
		 */
		removeListener( event: string, fn?: Function ): Socket;
		
		/**
		 * Removes all event listeners on this object
		 * @return This Socket
		 */
		removeAllListeners( event?: string ): Socket;
		
		/**
		 * Sets the maximum number of listeners this instance can have
		 * @param n The max number of listeners we can add to this emitter
		 * @return This Socket
		 */
		setMaxListeners( n: number ): Socket;
		
		/**
		 * Returns all the callbacks for a particular event
		 * @param event The event that we're looking for the callbacks of
		 * @return An array of callback Functions, or an empty array if we don't have any
		 */
		listeners( event: string ):Function[];

		/**
		 * Sets the compress flag
		 * @param compress If `true`, compresses the sending data
		 * @return This Socket
		 */
		compress( compress: boolean ): Socket;
	}
	
	/**
	 * The interface used when dealing with rooms etc
	 */
	interface Adapter extends NodeJS.EventEmitter {
		
		/**
		 * The namespace that this adapter is for
		 */
		nsp: Namespace;
		
		/**
		 * A dictionary of all the rooms that we have in this namespace
		 * The rooms are made of a `sockets` key which is the dictionary of sockets per ID
		 */
		rooms: {[room: string]: {sockets: {[id: string]: boolean }}};
		
		/**
		 * A dictionary of all the socket ids that we're dealing with, and all
		 * the rooms that the socket is currently in
		 */
		sids: {[id: string]: {[room: string]: boolean}};
		
		/**
		 * Adds a socket to a room. If the room doesn't exist, it's created
		 * @param id The ID of the socket to add
		 * @param room The name of the room to add the socket to
		 * @param callback An optional callback to call when the socket has been 
		 * added. It should take an optional parameter, error, if there was a problem
		 */
		add( id: string, room: string, callback?: ( err?: any ) => void ): void;
		
		/**
		 * Removes a socket from a room. If there are no more sockets in the room,
		 * the room is deleted
		 * @param id The ID of the socket that we're removing
		 * @param room The name of the room to remove the socket from
		 * @param callback An optional callback to call when the socket has been
		 * removed. It should take on optional parameter, error, if there was a problem
		 */
		del( id: string, room: string, callback?: ( err?: any ) => void ): void;
		
		/**
		 * Removes a socket from all the rooms that it's joined
		 * @param id The ID of the socket that we're removing
		 */
		delAll( id: string ):void;
		
		/**
		 * Broadcasts a packet
		 * @param packet The packet to broadcast
		 * @param opts Any options to send along:
		 * 	- rooms: An optional list of rooms to broadcast to. If empty, the packet is broadcast to all sockets
		 * 	- except: A list of Socket IDs to exclude
		 * 	- flags: Any flags that we want to send along ('json', 'volatile', 'broadcast')
		 */
		broadcast( packet: any, opts: { rooms?: string[]; except?: string[]; flags?: {[flag: string]: boolean} } ):void;
	}

	/**
	 * The client behind each socket (can have multiple sockets)
	 */
	interface Client {
		/**
		 * The Server that this client belongs to
		 */
		server: Server;
		
		/**
		 * The underlying Engine.io Socket instance
		 */
		conn: {
		
			/**
			 * The ID for this socket - matches Client.id
			 */
			id: string;
			
			/**
			 * The Engine.io Server for this socket
			 */
			server: any;
			
			/**
			 * The ready state for the client. Either 'opening', 'open', 'closing', or 'closed'
			 */
			readyState: string;
			
			/**
			 * The remote IP for this connection
			 */
			remoteAddress: string;
		};
		
		/**
		 * The ID for this client. Regenerated at every connection
		 */
		id: string;
		
		/**
		 * The http.IncomingMessage request sent with the connection. Useful 
		 * for recovering headers etc
		 */
		request: any;
		
		/**
		 * The dictionary of sockets currently connect via this client (i.e. to different
		 * namespaces) where the Socket ID is the key
		 */
		sockets: {[id: string]: Socket};
		
		/**
		 * A dictionary of all the namespaces for this client, with the Socket that
		 * deals with that namespace
		 */
		nsps: {[nsp: string]: Socket};
	}
}
// Type definitions for cli-color 0.3.2
// Project: https://github.com/medikoo/cli-color
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "cli-color" {
	module m {
		export interface Format {
			(...text: any[]): string;

			bold: Format;
			italic: Format;
			underline: Format;
			blink: Format;
			inverse: Format;
			strike: Format;

			black: Format;
			red: Format;
			green: Format;
			yellow: Format;
			blue: Format;
			magenta: Format;
			cyan: Format;
			white: Format;

			bgBlack: Format;
			bgRed: Format;
			bgGreen: Format;
			bgYellow: Format;
			bgBlue: Format;
			bgMagenta: Format;
			bgCyan: Format;
			bgWhite: Format;

			blackBright: Format;
			redBright: Format;
			greenBright: Format;
			yellowBright: Format;
			blueBright: Format;
			magentaBright: Format;
			cyanBright: Format;
			whiteBright: Format;

			bgBlackBright: Format;
			bgRedBright: Format;
			bgGreenBright: Format;
			bgYellowBright: Format;
			bgBlueBright: Format;
			bgMagentaBright: Format;
			bgCyanBright: Format;
			bgWhiteBright: Format;

			xterm(color: number): Format;
			bgXterm(color: number): Format;

			move(x: number, y: number): string;
			moveTo(x: number, y: number): string;
			bol(n?: number, erase?: boolean): string;
			up(n: number): string;
			down(n: number): string;
			left(n: number): string;
			right(n: number): string;

			beep: string;
			reset: string;

			width: number;
			height: number;
			xtermSupported: boolean;
		}
	}

	var m: m.Format;
	export = m;
}

declare module "cli-color/trim" {
	function ansiTrim(str: string): string;
	export = ansiTrim;
}

declare module "cli-color/throbber" {
	import clc = require('cli-color');

	module setupThrobber {
		export interface Throbber {
			start(): void;
			stop(): void;
			restart(): void;
		}
	}

	function setupThrobber(write: (str: string) => any, period: number, format?: clc.Format): setupThrobber.Throbber;
	export = setupThrobber;
}
/// <reference path="hapi/hapi.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="socket.io/socket.io.d.ts" />
/// <reference path="cli-color/cli-color.d.ts" />
