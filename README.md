# gRPC - Fastify

## Overview

- gRPC는 원격 자원을 요청하기 위한 통신 프로토콜
- 통신을 하기 위해 protobuffer라는 규격을 이용함
- protobuffer는 IDL이자 기본 메시지 교환 형식임

## Protobuf

- `.proto` 형태로 선언함
- `protoc`를 통해 각 언어에 맞는 형태로 컴파일할 수 있음
- 여기서는 `protobufjs-cli` 라이브러리를 사용함
  - 먼저 js 파일을 컴파일해야 해당 파일을 기준으로 d.ts 파일을 만들 수 있음

## gRPC

- 컴파일된 proto 파일을 이용해 원격 자원을 요청하거나, 요청에 대한 자원을 반환할 수 있음
- 컴파일된 값으로 server를 직접 구동할 수도 있고, fastify plugin을 이용해 구동할수 있음
- 여기서는 `@grpc.ts/fastify-server` 라이브러리를 상용함

## Troubleshooting
- `@grpc.ts/fastify-server` register시 `protoPath`의 경로는 절대경로여야 함. 상대경로로 주입시 파일을 제대로 resolve하지 못함.
- `packageName`을 설정했다면 `addUnaryHandler`의 마지막 파라미터로 `packageName`을 주입해야 함.
