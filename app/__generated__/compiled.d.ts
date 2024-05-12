import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace example. */
export namespace example {

    /** Represents an Example */
    class Example extends $protobuf.rpc.Service {

        /**
         * Constructs a new Example service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Example service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Example;

        /**
         * Calls SayHello.
         * @param request ExampleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ExampleReply
         */
        public sayHello(request: example.IExampleRequest, callback: example.Example.SayHelloCallback): void;

        /**
         * Calls SayHello.
         * @param request ExampleRequest message or plain object
         * @returns Promise
         */
        public sayHello(request: example.IExampleRequest): Promise<example.ExampleReply>;
    }

    namespace Example {

        /**
         * Callback as used by {@link example.Example#sayHello}.
         * @param error Error, if any
         * @param [response] ExampleReply
         */
        type SayHelloCallback = (error: (Error|null), response?: example.ExampleReply) => void;
    }

    /** Properties of an ExampleRequest. */
    interface IExampleRequest {

        /** ExampleRequest name */
        name?: (string|null);
    }

    /** Represents an ExampleRequest. */
    class ExampleRequest implements IExampleRequest {

        /**
         * Constructs a new ExampleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.IExampleRequest);

        /** ExampleRequest name. */
        public name: string;

        /**
         * Creates a new ExampleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleRequest instance
         */
        public static create(properties?: example.IExampleRequest): example.ExampleRequest;

        /**
         * Encodes the specified ExampleRequest message. Does not implicitly {@link example.ExampleRequest.verify|verify} messages.
         * @param message ExampleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.IExampleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleRequest message, length delimited. Does not implicitly {@link example.ExampleRequest.verify|verify} messages.
         * @param message ExampleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.IExampleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.ExampleRequest;

        /**
         * Decodes an ExampleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.ExampleRequest;

        /**
         * Verifies an ExampleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleRequest
         */
        public static fromObject(object: { [k: string]: any }): example.ExampleRequest;

        /**
         * Creates a plain object from an ExampleRequest message. Also converts values to other types if specified.
         * @param message ExampleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.ExampleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExampleRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExampleReply. */
    interface IExampleReply {

        /** ExampleReply message */
        message?: (string|null);

        /** ExampleReply name */
        name?: (string|null);
    }

    /** Represents an ExampleReply. */
    class ExampleReply implements IExampleReply {

        /**
         * Constructs a new ExampleReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: example.IExampleReply);

        /** ExampleReply message. */
        public message: string;

        /** ExampleReply name. */
        public name: string;

        /**
         * Creates a new ExampleReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExampleReply instance
         */
        public static create(properties?: example.IExampleReply): example.ExampleReply;

        /**
         * Encodes the specified ExampleReply message. Does not implicitly {@link example.ExampleReply.verify|verify} messages.
         * @param message ExampleReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: example.IExampleReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExampleReply message, length delimited. Does not implicitly {@link example.ExampleReply.verify|verify} messages.
         * @param message ExampleReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: example.IExampleReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExampleReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExampleReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): example.ExampleReply;

        /**
         * Decodes an ExampleReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExampleReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): example.ExampleReply;

        /**
         * Verifies an ExampleReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExampleReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExampleReply
         */
        public static fromObject(object: { [k: string]: any }): example.ExampleReply;

        /**
         * Creates a plain object from an ExampleReply message. Also converts values to other types if specified.
         * @param message ExampleReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: example.ExampleReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExampleReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExampleReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace hello. */
export namespace hello {

    /** Represents a Hello */
    class Hello extends $protobuf.rpc.Service {

        /**
         * Constructs a new Hello service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Hello service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Hello;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHello(request: hello.IHelloRequest, callback: hello.Hello.SayHelloCallback): void;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public sayHello(request: hello.IHelloRequest): Promise<hello.HelloReply>;
    }

    namespace Hello {

        /**
         * Callback as used by {@link hello.Hello#sayHello}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloCallback = (error: (Error|null), response?: hello.HelloReply) => void;
    }

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {

        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hello.IHelloRequest);

        /** HelloRequest name. */
        public name: string;

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequest instance
         */
        public static create(properties?: hello.IHelloRequest): hello.HelloRequest;

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hello.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hello.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hello.HelloRequest;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hello.HelloRequest;

        /**
         * Verifies a HelloRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequest
         */
        public static fromObject(object: { [k: string]: any }): hello.HelloRequest;

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @param message HelloRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hello.HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {

        /** HelloReply message */
        message?: (string|null);
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {

        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: hello.IHelloReply);

        /** HelloReply message. */
        public message: string;

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReply instance
         */
        public static create(properties?: hello.IHelloReply): hello.HelloReply;

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link hello.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hello.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link hello.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hello.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hello.HelloReply;

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hello.HelloReply;

        /**
         * Verifies a HelloReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReply
         */
        public static fromObject(object: { [k: string]: any }): hello.HelloReply;

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @param message HelloReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hello.HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
