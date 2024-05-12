import Fastify from 'fastify'
import FastifyGrpcServer from '@grpc.ts/fastify-server';
import type { example } from '../__generated__/compiled';
import { resolve } from 'node:path';

const app = Fastify({
  logger: true
})

const start = async () => {
  try {
    await app.register(FastifyGrpcServer, {
      url: 'localhost:3010',
      serverName: "jampot",
      package: [{
        packageName: "example",
        protoPath: resolve("./app/proto/example.proto"),
      }],
    })

    await app.listen({
      port: 3000,
      host: '127.0.0.1'
    })


    app
      .grpcServer
      .getServer("jampot")
      .addUnaryHandler<example.IExampleRequest>("Example", "SayHello", (req, metadata): example.IExampleReply => {
        console.log(req)
        console.log(metadata)
        return {
          message: "Hello ",
          name: req.name
        }
      }, {
        package: "example",
      })

    // HttpGracefulShutdown(app);
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
};

start()
