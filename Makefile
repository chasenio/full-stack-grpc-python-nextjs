ROOT_DIR = $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

MIRROR=https://mirrors.aliyun.com/pypi/simple --trusted-host mirrors.aliyun.com
PROTOBUF=proto
PROTOVALIDATE_REPO=https://github.com/bufbuild/protovalidate.git
PROTOVALIDATE_PATH=proto/protovalidate
PB2_ROOT=${ROOT_DIR}/src/rpc/pb2

.PHONY: Install Requirements
install:
	pip install -r requirements.txt -i ${MIRROR}

#
# 在 Python 中 proto 生成不会自动修正生成的 module import, 需要手动修正
#
.PHONY: Fix module import
pb2:
	@echo "Fixing module import..."
	sed -i -e 's/from buf./from ...buf./g' ${PB2_ROOT}/v1/*/*_pb2*
	rm -rf ${PB2_ROOT}/v1/*/*_pb2*-e # Remove the suffix '-e' file
	@echo "Done fixing module import."

.PHONY: Build Buf Generate
buf:
	cd ${PROTOBUF} && buf dep update
	buf generate
	@echo "Done building Buf."

#
#  为了拿到 validate.proto 的 typings 文件，直接从 GitHub clone 下来, 然后复制到 proto 目录下
#  To obtain the typings file for validate.proto, simply clone it from GitHub and then copy it to the proto directory.
#
.PHONY: protovalidate install
protovalidate:
	git submodule add -f https://github.com/bufbuild/protovalidate.git ${PROTOVALIDATE_PATH}
	mkdir -p ${PROTOBUF}/buf
	cp -rf ${PROTOVALIDATE_PATH}/proto/protovalidate/buf/* ${PROTOBUF}/buf # Move the proto files to the proto directory
	rm -r ${PROTOVALIDATE_PATH}
