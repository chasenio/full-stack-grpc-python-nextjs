## Full Stack With Python & Next.js & gRPC

Using gRPC-web as the communication method between front-end and back-end, this project provides two solutions:

**1. gRPC-Web Solution**


> [!IMPORTANT]
> grpc-web is a client side library. XHLHttpRequest is not supported by Next.js server side rendering.

```               
    ┌──────────────┐     ┌────────────────┐     ┌───────────────┐  
    │   Browser    ├────►│   gRPC Proxy   ├────►│  gRPC Server  │  
    └──────────────┘     └────────────────┘     └───────────────┘                                                            
```

**2. Server Side Solution**

If you want to use Server Side Rendering, you need to make gRPC requests directly from the Next.js server to the RPC server. 

```                                                    
    ┌──────────────┐     ┌────────────────┐     ┌───────────────┐   
    │   Browser    ├────►│ Next.js Server ├────►│  gRPC Server  │   
    └──────────────┘     └────────────────┘     └───────────────┘                                                                 
```

The two approaches above can be used in combination, depending on the actual situation.

## Dependencies

Command line tools:
- [buf][1]

## Development

**install requirement**
```shell
make install
```

**generate protobuf**

```shell
make buf
```
if you want to know more about details for buf build , see [Makefile](Makefile#L24-L30)

## Support

If you like this project, please consider supporting me for coffee ☕️

[![Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20-coffee-%2322BC18.svg)](https://www.buymeacoffee.com/chasengao) [![get youtself link](https://img.shields.io/badge/get%20youtself%20link-buymeacoffee-orange.svg)](https://www.buymeacoffee.com/invite/chasengao)

[1]: https://buf.build/docs/installation/