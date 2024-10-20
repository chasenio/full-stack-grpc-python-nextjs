import * as grpcWeb from 'grpc-web';

import * as v1_echo_service_pb from '../../v1/echo/service_pb'; // proto import: "v1/echo/service.proto"


export class EchoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  echo(
    request: v1_echo_service_pb.EchoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_echo_service_pb.EchoResponse) => void
  ): grpcWeb.ClientReadableStream<v1_echo_service_pb.EchoResponse>;

}

export class EchoServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  echo(
    request: v1_echo_service_pb.EchoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_echo_service_pb.EchoResponse>;

}

