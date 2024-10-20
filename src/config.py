from dataclasses import dataclass


@dataclass
class Config:
    # database
    db_url: str

    # rpc port
    rpc_port: int
