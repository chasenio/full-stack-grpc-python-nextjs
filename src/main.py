import click
from typing import Optional

from config import Config

@click.command()
@click.option('--config', '-c', type=str, help='config file path')
def main(config: Optional[str] = None, ):
    cfg: Config



if __name__ == '__main__':
    main()
