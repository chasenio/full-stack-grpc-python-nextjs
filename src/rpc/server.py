import logging
import asyncio
import grpc
import grpc.aio

from .pb2.v1 import echo
from .services.echo import EchoRpcService

_logger = logging.getLogger(__name__)


class RpcServer:
    aio_server: grpc.aio.Server

    def __init__(self, port: int):
        self.port = port

        self.aio_server: grpc.aio.Server = grpc.aio.server(interceptors=[

        ])

        self.should_exit = False
        self.force_exit = False

        self.init_services()

    def init_services(self):
        echo.service_pb2_grpc.add_EchoServiceServicer_to_server(EchoRpcService(), self.aio_server)

    async def start(self):
        if not self.aio_server.add_insecure_port(f"[::]:{self.port}"):
            _logger.error("failed to bind port")
            raise Exception(f"failed to bind port {self.port=}")

        _logger.info("start rpc server...")
        await self.aio_server.start()

    async def stop(self, grace: int = 5):
        _logger.info(f"stop rpc server...{grace=}")

        await self.aio_server.stop(grace)
        _logger.info("wait for termination...")
        await self.aio_server.wait_for_termination()

    async def check_loop(self):
        should_exit = self.force_exit or self.should_exit
        while not should_exit:
            await asyncio.sleep(0.3)
            should_exit = self.force_exit or self.should_exit
        await self.stop(5)
