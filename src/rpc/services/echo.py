import logging


from grpc import StatusCode
from grpc_interceptor.exceptions import GrpcException
from grpc import RpcContext
from grpc import ServicerContext

from rpc.pb2.v1.echo.service_pb2_grpc import EchoServiceServicer
from rpc.pb2.v1.echo.service_pb2 import EchoResponse
from rpc.pb2.v1.echo.service_pb2 import EchoRequest

_logger = logging.getLogger(__name__)


class EchoRpcService(EchoServiceServicer):

    def Echo(self, request: EchoRequest, context: ServicerContext):
        _logger.info(f"Received message: {request.name}")

        metadata = context.invocation_metadata()
        _logger.info(f"metadata: {metadata}")
        # a = 1
        # if a == 1:
        #     raise GrpcException("12jhgcur3", status_code=StatusCode.INVALID_ARGUMENT)
        return EchoResponse(message=f"echo: {request.name}")
