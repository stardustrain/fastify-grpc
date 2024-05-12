/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.example = (function() {

    /**
     * Namespace example.
     * @exports example
     * @namespace
     */
    var example = {};

    example.Example = (function() {

        /**
         * Constructs a new Example service.
         * @memberof example
         * @classdesc Represents an Example
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Example(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Example.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Example;

        /**
         * Creates new Example service using the specified rpc implementation.
         * @function create
         * @memberof example.Example
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Example} RPC service. Useful where requests and/or responses are streamed.
         */
        Example.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link example.Example#sayHello}.
         * @memberof example.Example
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {example.ExampleReply} [response] ExampleReply
         */

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof example.Example
         * @instance
         * @param {example.IExampleRequest} request ExampleRequest message or plain object
         * @param {example.Example.SayHelloCallback} callback Node-style callback called with the error, if any, and ExampleReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Example.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.example.ExampleRequest, $root.example.ExampleReply, request, callback);
        }, "name", { value: "SayHello" });

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof example.Example
         * @instance
         * @param {example.IExampleRequest} request ExampleRequest message or plain object
         * @returns {Promise<example.ExampleReply>} Promise
         * @variation 2
         */

        return Example;
    })();

    example.ExampleRequest = (function() {

        /**
         * Properties of an ExampleRequest.
         * @memberof example
         * @interface IExampleRequest
         * @property {string|null} [name] ExampleRequest name
         */

        /**
         * Constructs a new ExampleRequest.
         * @memberof example
         * @classdesc Represents an ExampleRequest.
         * @implements IExampleRequest
         * @constructor
         * @param {example.IExampleRequest=} [properties] Properties to set
         */
        function ExampleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleRequest name.
         * @member {string} name
         * @memberof example.ExampleRequest
         * @instance
         */
        ExampleRequest.prototype.name = "";

        /**
         * Creates a new ExampleRequest instance using the specified properties.
         * @function create
         * @memberof example.ExampleRequest
         * @static
         * @param {example.IExampleRequest=} [properties] Properties to set
         * @returns {example.ExampleRequest} ExampleRequest instance
         */
        ExampleRequest.create = function create(properties) {
            return new ExampleRequest(properties);
        };

        /**
         * Encodes the specified ExampleRequest message. Does not implicitly {@link example.ExampleRequest.verify|verify} messages.
         * @function encode
         * @memberof example.ExampleRequest
         * @static
         * @param {example.IExampleRequest} message ExampleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ExampleRequest message, length delimited. Does not implicitly {@link example.ExampleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.ExampleRequest
         * @static
         * @param {example.IExampleRequest} message ExampleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof example.ExampleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.ExampleRequest} ExampleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.ExampleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.ExampleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.ExampleRequest} ExampleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleRequest message.
         * @function verify
         * @memberof example.ExampleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an ExampleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.ExampleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.ExampleRequest} ExampleRequest
         */
        ExampleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.example.ExampleRequest)
                return object;
            var message = new $root.example.ExampleRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an ExampleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.ExampleRequest
         * @static
         * @param {example.ExampleRequest} message ExampleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ExampleRequest to JSON.
         * @function toJSON
         * @memberof example.ExampleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExampleRequest
         * @function getTypeUrl
         * @memberof example.ExampleRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExampleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/example.ExampleRequest";
        };

        return ExampleRequest;
    })();

    example.ExampleReply = (function() {

        /**
         * Properties of an ExampleReply.
         * @memberof example
         * @interface IExampleReply
         * @property {string|null} [message] ExampleReply message
         * @property {string|null} [name] ExampleReply name
         */

        /**
         * Constructs a new ExampleReply.
         * @memberof example
         * @classdesc Represents an ExampleReply.
         * @implements IExampleReply
         * @constructor
         * @param {example.IExampleReply=} [properties] Properties to set
         */
        function ExampleReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleReply message.
         * @member {string} message
         * @memberof example.ExampleReply
         * @instance
         */
        ExampleReply.prototype.message = "";

        /**
         * ExampleReply name.
         * @member {string} name
         * @memberof example.ExampleReply
         * @instance
         */
        ExampleReply.prototype.name = "";

        /**
         * Creates a new ExampleReply instance using the specified properties.
         * @function create
         * @memberof example.ExampleReply
         * @static
         * @param {example.IExampleReply=} [properties] Properties to set
         * @returns {example.ExampleReply} ExampleReply instance
         */
        ExampleReply.create = function create(properties) {
            return new ExampleReply(properties);
        };

        /**
         * Encodes the specified ExampleReply message. Does not implicitly {@link example.ExampleReply.verify|verify} messages.
         * @function encode
         * @memberof example.ExampleReply
         * @static
         * @param {example.IExampleReply} message ExampleReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ExampleReply message, length delimited. Does not implicitly {@link example.ExampleReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.ExampleReply
         * @static
         * @param {example.IExampleReply} message ExampleReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleReply message from the specified reader or buffer.
         * @function decode
         * @memberof example.ExampleReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.ExampleReply} ExampleReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.ExampleReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.ExampleReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.ExampleReply} ExampleReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleReply message.
         * @function verify
         * @memberof example.ExampleReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an ExampleReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.ExampleReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.ExampleReply} ExampleReply
         */
        ExampleReply.fromObject = function fromObject(object) {
            if (object instanceof $root.example.ExampleReply)
                return object;
            var message = new $root.example.ExampleReply();
            if (object.message != null)
                message.message = String(object.message);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an ExampleReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.ExampleReply
         * @static
         * @param {example.ExampleReply} message ExampleReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.message = "";
                object.name = "";
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ExampleReply to JSON.
         * @function toJSON
         * @memberof example.ExampleReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExampleReply
         * @function getTypeUrl
         * @memberof example.ExampleReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExampleReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/example.ExampleReply";
        };

        return ExampleReply;
    })();

    return example;
})();

$root.hello = (function() {

    /**
     * Namespace hello.
     * @exports hello
     * @namespace
     */
    var hello = {};

    hello.Hello = (function() {

        /**
         * Constructs a new Hello service.
         * @memberof hello
         * @classdesc Represents a Hello
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Hello(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Hello.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Hello;

        /**
         * Creates new Hello service using the specified rpc implementation.
         * @function create
         * @memberof hello.Hello
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Hello} RPC service. Useful where requests and/or responses are streamed.
         */
        Hello.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link hello.Hello#sayHello}.
         * @memberof hello.Hello
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hello.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof hello.Hello
         * @instance
         * @param {hello.IHelloRequest} request HelloRequest message or plain object
         * @param {hello.Hello.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Hello.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.hello.HelloRequest, $root.hello.HelloReply, request, callback);
        }, "name", { value: "SayHello" });

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof hello.Hello
         * @instance
         * @param {hello.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<hello.HelloReply>} Promise
         * @variation 2
         */

        return Hello;
    })();

    hello.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @memberof hello
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof hello
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {hello.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof hello.HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.IHelloRequest=} [properties] Properties to set
         * @returns {hello.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link hello.HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof hello.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello.HelloRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof hello.HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello.HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello.HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.hello.HelloRequest)
                return object;
            var message = new $root.hello.HelloRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello.HelloRequest
         * @static
         * @param {hello.HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof hello.HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloRequest
         * @function getTypeUrl
         * @memberof hello.HelloRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hello.HelloRequest";
        };

        return HelloRequest;
    })();

    hello.HelloReply = (function() {

        /**
         * Properties of a HelloReply.
         * @memberof hello
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         */

        /**
         * Constructs a new HelloReply.
         * @memberof hello
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {hello.IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReply message.
         * @member {string} message
         * @memberof hello.HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof hello.HelloReply
         * @static
         * @param {hello.IHelloReply=} [properties] Properties to set
         * @returns {hello.HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link hello.HelloReply.verify|verify} messages.
         * @function encode
         * @memberof hello.HelloReply
         * @static
         * @param {hello.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link hello.HelloReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello.HelloReply
         * @static
         * @param {hello.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof hello.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello.HelloReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReply message.
         * @function verify
         * @memberof hello.HelloReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello.HelloReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello.HelloReply} HelloReply
         */
        HelloReply.fromObject = function fromObject(object) {
            if (object instanceof $root.hello.HelloReply)
                return object;
            var message = new $root.hello.HelloReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello.HelloReply
         * @static
         * @param {hello.HelloReply} message HelloReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this HelloReply to JSON.
         * @function toJSON
         * @memberof hello.HelloReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloReply
         * @function getTypeUrl
         * @memberof hello.HelloReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hello.HelloReply";
        };

        return HelloReply;
    })();

    return hello;
})();

module.exports = $root;
