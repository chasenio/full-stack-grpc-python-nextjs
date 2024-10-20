import * as jspb from 'google-protobuf'

import * as buf_validate_validate_pb from '../../buf/validate/validate_pb'; // proto import: "buf/validate/validate.proto"


export class ErrorResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ErrorResponse;

  getViolationsList(): Array<buf_validate_validate_pb.Violation>;
  setViolationsList(value: Array<buf_validate_validate_pb.Violation>): ErrorResponse;
  clearViolationsList(): ErrorResponse;
  addViolations(value?: buf_validate_validate_pb.Violation, index?: number): buf_validate_validate_pb.Violation;

  getCode(): Code;
  setCode(value: Code): ErrorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorResponse): ErrorResponse.AsObject;
  static serializeBinaryToWriter(message: ErrorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorResponse;
  static deserializeBinaryFromReader(message: ErrorResponse, reader: jspb.BinaryReader): ErrorResponse;
}

export namespace ErrorResponse {
  export type AsObject = {
    message: string,
    violationsList: Array<buf_validate_validate_pb.Violation.AsObject>,
    code: Code,
  }
}

export enum Code { 
  CODE_INVALID = 0,
  CODE_OK = 1,
  CODE_ERROR = 20,
}
