import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb'; // proto import: "google/protobuf/descriptor.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Constraint extends jspb.Message {
  getId(): string;
  setId(value: string): Constraint;
  hasId(): boolean;
  clearId(): Constraint;

  getMessage(): string;
  setMessage(value: string): Constraint;
  hasMessage(): boolean;
  clearMessage(): Constraint;

  getExpression(): string;
  setExpression(value: string): Constraint;
  hasExpression(): boolean;
  clearExpression(): Constraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constraint.AsObject;
  static toObject(includeInstance: boolean, msg: Constraint): Constraint.AsObject;
  static serializeBinaryToWriter(message: Constraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constraint;
  static deserializeBinaryFromReader(message: Constraint, reader: jspb.BinaryReader): Constraint;
}

export namespace Constraint {
  export type AsObject = {
    id?: string,
    message?: string,
    expression?: string,
  }
}

export class MessageConstraints extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): MessageConstraints;
  hasDisabled(): boolean;
  clearDisabled(): MessageConstraints;

  getCelList(): Array<Constraint>;
  setCelList(value: Array<Constraint>): MessageConstraints;
  clearCelList(): MessageConstraints;
  addCel(value?: Constraint, index?: number): Constraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: MessageConstraints): MessageConstraints.AsObject;
  static serializeBinaryToWriter(message: MessageConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageConstraints;
  static deserializeBinaryFromReader(message: MessageConstraints, reader: jspb.BinaryReader): MessageConstraints;
}

export namespace MessageConstraints {
  export type AsObject = {
    disabled?: boolean,
    celList: Array<Constraint.AsObject>,
  }
}

export class OneofConstraints extends jspb.Message {
  getRequired(): boolean;
  setRequired(value: boolean): OneofConstraints;
  hasRequired(): boolean;
  clearRequired(): OneofConstraints;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: OneofConstraints): OneofConstraints.AsObject;
  static serializeBinaryToWriter(message: OneofConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofConstraints;
  static deserializeBinaryFromReader(message: OneofConstraints, reader: jspb.BinaryReader): OneofConstraints;
}

export namespace OneofConstraints {
  export type AsObject = {
    required?: boolean,
  }
}

export class FieldConstraints extends jspb.Message {
  getCelList(): Array<Constraint>;
  setCelList(value: Array<Constraint>): FieldConstraints;
  clearCelList(): FieldConstraints;
  addCel(value?: Constraint, index?: number): Constraint;

  getRequired(): boolean;
  setRequired(value: boolean): FieldConstraints;
  hasRequired(): boolean;
  clearRequired(): FieldConstraints;

  getIgnore(): Ignore;
  setIgnore(value: Ignore): FieldConstraints;
  hasIgnore(): boolean;
  clearIgnore(): FieldConstraints;

  getFloat(): FloatRules | undefined;
  setFloat(value?: FloatRules): FieldConstraints;
  hasFloat(): boolean;
  clearFloat(): FieldConstraints;

  getDouble(): DoubleRules | undefined;
  setDouble(value?: DoubleRules): FieldConstraints;
  hasDouble(): boolean;
  clearDouble(): FieldConstraints;

  getInt32(): Int32Rules | undefined;
  setInt32(value?: Int32Rules): FieldConstraints;
  hasInt32(): boolean;
  clearInt32(): FieldConstraints;

  getInt64(): Int64Rules | undefined;
  setInt64(value?: Int64Rules): FieldConstraints;
  hasInt64(): boolean;
  clearInt64(): FieldConstraints;

  getUint32(): UInt32Rules | undefined;
  setUint32(value?: UInt32Rules): FieldConstraints;
  hasUint32(): boolean;
  clearUint32(): FieldConstraints;

  getUint64(): UInt64Rules | undefined;
  setUint64(value?: UInt64Rules): FieldConstraints;
  hasUint64(): boolean;
  clearUint64(): FieldConstraints;

  getSint32(): SInt32Rules | undefined;
  setSint32(value?: SInt32Rules): FieldConstraints;
  hasSint32(): boolean;
  clearSint32(): FieldConstraints;

  getSint64(): SInt64Rules | undefined;
  setSint64(value?: SInt64Rules): FieldConstraints;
  hasSint64(): boolean;
  clearSint64(): FieldConstraints;

  getFixed32(): Fixed32Rules | undefined;
  setFixed32(value?: Fixed32Rules): FieldConstraints;
  hasFixed32(): boolean;
  clearFixed32(): FieldConstraints;

  getFixed64(): Fixed64Rules | undefined;
  setFixed64(value?: Fixed64Rules): FieldConstraints;
  hasFixed64(): boolean;
  clearFixed64(): FieldConstraints;

  getSfixed32(): SFixed32Rules | undefined;
  setSfixed32(value?: SFixed32Rules): FieldConstraints;
  hasSfixed32(): boolean;
  clearSfixed32(): FieldConstraints;

  getSfixed64(): SFixed64Rules | undefined;
  setSfixed64(value?: SFixed64Rules): FieldConstraints;
  hasSfixed64(): boolean;
  clearSfixed64(): FieldConstraints;

  getBool(): BoolRules | undefined;
  setBool(value?: BoolRules): FieldConstraints;
  hasBool(): boolean;
  clearBool(): FieldConstraints;

  getString(): StringRules | undefined;
  setString(value?: StringRules): FieldConstraints;
  hasString(): boolean;
  clearString(): FieldConstraints;

  getBytes(): BytesRules | undefined;
  setBytes(value?: BytesRules): FieldConstraints;
  hasBytes(): boolean;
  clearBytes(): FieldConstraints;

  getEnum(): EnumRules | undefined;
  setEnum(value?: EnumRules): FieldConstraints;
  hasEnum(): boolean;
  clearEnum(): FieldConstraints;

  getRepeated(): RepeatedRules | undefined;
  setRepeated(value?: RepeatedRules): FieldConstraints;
  hasRepeated(): boolean;
  clearRepeated(): FieldConstraints;

  getMap(): MapRules | undefined;
  setMap(value?: MapRules): FieldConstraints;
  hasMap(): boolean;
  clearMap(): FieldConstraints;

  getAny(): AnyRules | undefined;
  setAny(value?: AnyRules): FieldConstraints;
  hasAny(): boolean;
  clearAny(): FieldConstraints;

  getDuration(): DurationRules | undefined;
  setDuration(value?: DurationRules): FieldConstraints;
  hasDuration(): boolean;
  clearDuration(): FieldConstraints;

  getTimestamp(): TimestampRules | undefined;
  setTimestamp(value?: TimestampRules): FieldConstraints;
  hasTimestamp(): boolean;
  clearTimestamp(): FieldConstraints;

  getSkipped(): boolean;
  setSkipped(value: boolean): FieldConstraints;
  hasSkipped(): boolean;
  clearSkipped(): FieldConstraints;

  getIgnoreEmpty(): boolean;
  setIgnoreEmpty(value: boolean): FieldConstraints;
  hasIgnoreEmpty(): boolean;
  clearIgnoreEmpty(): FieldConstraints;

  getTypeCase(): FieldConstraints.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: FieldConstraints): FieldConstraints.AsObject;
  static serializeBinaryToWriter(message: FieldConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldConstraints;
  static deserializeBinaryFromReader(message: FieldConstraints, reader: jspb.BinaryReader): FieldConstraints;
}

export namespace FieldConstraints {
  export type AsObject = {
    celList: Array<Constraint.AsObject>,
    required?: boolean,
    ignore?: Ignore,
    pb_float?: FloatRules.AsObject,
    pb_double?: DoubleRules.AsObject,
    int32?: Int32Rules.AsObject,
    int64?: Int64Rules.AsObject,
    uint32?: UInt32Rules.AsObject,
    uint64?: UInt64Rules.AsObject,
    sint32?: SInt32Rules.AsObject,
    sint64?: SInt64Rules.AsObject,
    fixed32?: Fixed32Rules.AsObject,
    fixed64?: Fixed64Rules.AsObject,
    sfixed32?: SFixed32Rules.AsObject,
    sfixed64?: SFixed64Rules.AsObject,
    bool?: BoolRules.AsObject,
    string?: StringRules.AsObject,
    bytes?: BytesRules.AsObject,
    pb_enum?: EnumRules.AsObject,
    repeated?: RepeatedRules.AsObject,
    map?: MapRules.AsObject,
    any?: AnyRules.AsObject,
    duration?: DurationRules.AsObject,
    timestamp?: TimestampRules.AsObject,
    skipped?: boolean,
    ignoreEmpty?: boolean,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    FLOAT = 1,
    DOUBLE = 2,
    INT32 = 3,
    INT64 = 4,
    UINT32 = 5,
    UINT64 = 6,
    SINT32 = 7,
    SINT64 = 8,
    FIXED32 = 9,
    FIXED64 = 10,
    SFIXED32 = 11,
    SFIXED64 = 12,
    BOOL = 13,
    STRING = 14,
    BYTES = 15,
    ENUM = 16,
    REPEATED = 18,
    MAP = 19,
    ANY = 20,
    DURATION = 21,
    TIMESTAMP = 22,
  }
}

export class PredefinedConstraints extends jspb.Message {
  getCelList(): Array<Constraint>;
  setCelList(value: Array<Constraint>): PredefinedConstraints;
  clearCelList(): PredefinedConstraints;
  addCel(value?: Constraint, index?: number): Constraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredefinedConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: PredefinedConstraints): PredefinedConstraints.AsObject;
  static serializeBinaryToWriter(message: PredefinedConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredefinedConstraints;
  static deserializeBinaryFromReader(message: PredefinedConstraints, reader: jspb.BinaryReader): PredefinedConstraints;
}

export namespace PredefinedConstraints {
  export type AsObject = {
    celList: Array<Constraint.AsObject>,
  }
}

export class FloatRules extends jspb.Message {
  getConst(): number;
  setConst(value: number): FloatRules;
  hasConst(): boolean;
  clearConst(): FloatRules;

  getLt(): number;
  setLt(value: number): FloatRules;

  getLte(): number;
  setLte(value: number): FloatRules;

  getGt(): number;
  setGt(value: number): FloatRules;

  getGte(): number;
  setGte(value: number): FloatRules;

  getInList(): Array<number>;
  setInList(value: Array<number>): FloatRules;
  clearInList(): FloatRules;
  addIn(value: number, index?: number): FloatRules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): FloatRules;
  clearNotInList(): FloatRules;
  addNotIn(value: number, index?: number): FloatRules;

  getFinite(): boolean;
  setFinite(value: boolean): FloatRules;
  hasFinite(): boolean;
  clearFinite(): FloatRules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): FloatRules;
  clearExampleList(): FloatRules;
  addExample(value: number, index?: number): FloatRules;

  getLessThanCase(): FloatRules.LessThanCase;

  getGreaterThanCase(): FloatRules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatRules.AsObject;
  static toObject(includeInstance: boolean, msg: FloatRules): FloatRules.AsObject;
  static serializeBinaryToWriter(message: FloatRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatRules;
  static deserializeBinaryFromReader(message: FloatRules, reader: jspb.BinaryReader): FloatRules;
}

export namespace FloatRules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    finite?: boolean,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class DoubleRules extends jspb.Message {
  getConst(): number;
  setConst(value: number): DoubleRules;
  hasConst(): boolean;
  clearConst(): DoubleRules;

  getLt(): number;
  setLt(value: number): DoubleRules;

  getLte(): number;
  setLte(value: number): DoubleRules;

  getGt(): number;
  setGt(value: number): DoubleRules;

  getGte(): number;
  setGte(value: number): DoubleRules;

  getInList(): Array<number>;
  setInList(value: Array<number>): DoubleRules;
  clearInList(): DoubleRules;
  addIn(value: number, index?: number): DoubleRules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): DoubleRules;
  clearNotInList(): DoubleRules;
  addNotIn(value: number, index?: number): DoubleRules;

  getFinite(): boolean;
  setFinite(value: boolean): DoubleRules;
  hasFinite(): boolean;
  clearFinite(): DoubleRules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): DoubleRules;
  clearExampleList(): DoubleRules;
  addExample(value: number, index?: number): DoubleRules;

  getLessThanCase(): DoubleRules.LessThanCase;

  getGreaterThanCase(): DoubleRules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleRules.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleRules): DoubleRules.AsObject;
  static serializeBinaryToWriter(message: DoubleRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleRules;
  static deserializeBinaryFromReader(message: DoubleRules, reader: jspb.BinaryReader): DoubleRules;
}

export namespace DoubleRules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    finite?: boolean,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class Int32Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): Int32Rules;
  hasConst(): boolean;
  clearConst(): Int32Rules;

  getLt(): number;
  setLt(value: number): Int32Rules;

  getLte(): number;
  setLte(value: number): Int32Rules;

  getGt(): number;
  setGt(value: number): Int32Rules;

  getGte(): number;
  setGte(value: number): Int32Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): Int32Rules;
  clearInList(): Int32Rules;
  addIn(value: number, index?: number): Int32Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): Int32Rules;
  clearNotInList(): Int32Rules;
  addNotIn(value: number, index?: number): Int32Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): Int32Rules;
  clearExampleList(): Int32Rules;
  addExample(value: number, index?: number): Int32Rules;

  getLessThanCase(): Int32Rules.LessThanCase;

  getGreaterThanCase(): Int32Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Rules.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Rules): Int32Rules.AsObject;
  static serializeBinaryToWriter(message: Int32Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Rules;
  static deserializeBinaryFromReader(message: Int32Rules, reader: jspb.BinaryReader): Int32Rules;
}

export namespace Int32Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class Int64Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): Int64Rules;
  hasConst(): boolean;
  clearConst(): Int64Rules;

  getLt(): number;
  setLt(value: number): Int64Rules;

  getLte(): number;
  setLte(value: number): Int64Rules;

  getGt(): number;
  setGt(value: number): Int64Rules;

  getGte(): number;
  setGte(value: number): Int64Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): Int64Rules;
  clearInList(): Int64Rules;
  addIn(value: number, index?: number): Int64Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): Int64Rules;
  clearNotInList(): Int64Rules;
  addNotIn(value: number, index?: number): Int64Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): Int64Rules;
  clearExampleList(): Int64Rules;
  addExample(value: number, index?: number): Int64Rules;

  getLessThanCase(): Int64Rules.LessThanCase;

  getGreaterThanCase(): Int64Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64Rules.AsObject;
  static toObject(includeInstance: boolean, msg: Int64Rules): Int64Rules.AsObject;
  static serializeBinaryToWriter(message: Int64Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Rules;
  static deserializeBinaryFromReader(message: Int64Rules, reader: jspb.BinaryReader): Int64Rules;
}

export namespace Int64Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class UInt32Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): UInt32Rules;
  hasConst(): boolean;
  clearConst(): UInt32Rules;

  getLt(): number;
  setLt(value: number): UInt32Rules;

  getLte(): number;
  setLte(value: number): UInt32Rules;

  getGt(): number;
  setGt(value: number): UInt32Rules;

  getGte(): number;
  setGte(value: number): UInt32Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): UInt32Rules;
  clearInList(): UInt32Rules;
  addIn(value: number, index?: number): UInt32Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): UInt32Rules;
  clearNotInList(): UInt32Rules;
  addNotIn(value: number, index?: number): UInt32Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): UInt32Rules;
  clearExampleList(): UInt32Rules;
  addExample(value: number, index?: number): UInt32Rules;

  getLessThanCase(): UInt32Rules.LessThanCase;

  getGreaterThanCase(): UInt32Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UInt32Rules.AsObject;
  static toObject(includeInstance: boolean, msg: UInt32Rules): UInt32Rules.AsObject;
  static serializeBinaryToWriter(message: UInt32Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UInt32Rules;
  static deserializeBinaryFromReader(message: UInt32Rules, reader: jspb.BinaryReader): UInt32Rules;
}

export namespace UInt32Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class UInt64Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): UInt64Rules;
  hasConst(): boolean;
  clearConst(): UInt64Rules;

  getLt(): number;
  setLt(value: number): UInt64Rules;

  getLte(): number;
  setLte(value: number): UInt64Rules;

  getGt(): number;
  setGt(value: number): UInt64Rules;

  getGte(): number;
  setGte(value: number): UInt64Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): UInt64Rules;
  clearInList(): UInt64Rules;
  addIn(value: number, index?: number): UInt64Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): UInt64Rules;
  clearNotInList(): UInt64Rules;
  addNotIn(value: number, index?: number): UInt64Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): UInt64Rules;
  clearExampleList(): UInt64Rules;
  addExample(value: number, index?: number): UInt64Rules;

  getLessThanCase(): UInt64Rules.LessThanCase;

  getGreaterThanCase(): UInt64Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UInt64Rules.AsObject;
  static toObject(includeInstance: boolean, msg: UInt64Rules): UInt64Rules.AsObject;
  static serializeBinaryToWriter(message: UInt64Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UInt64Rules;
  static deserializeBinaryFromReader(message: UInt64Rules, reader: jspb.BinaryReader): UInt64Rules;
}

export namespace UInt64Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class SInt32Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): SInt32Rules;
  hasConst(): boolean;
  clearConst(): SInt32Rules;

  getLt(): number;
  setLt(value: number): SInt32Rules;

  getLte(): number;
  setLte(value: number): SInt32Rules;

  getGt(): number;
  setGt(value: number): SInt32Rules;

  getGte(): number;
  setGte(value: number): SInt32Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): SInt32Rules;
  clearInList(): SInt32Rules;
  addIn(value: number, index?: number): SInt32Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): SInt32Rules;
  clearNotInList(): SInt32Rules;
  addNotIn(value: number, index?: number): SInt32Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): SInt32Rules;
  clearExampleList(): SInt32Rules;
  addExample(value: number, index?: number): SInt32Rules;

  getLessThanCase(): SInt32Rules.LessThanCase;

  getGreaterThanCase(): SInt32Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SInt32Rules.AsObject;
  static toObject(includeInstance: boolean, msg: SInt32Rules): SInt32Rules.AsObject;
  static serializeBinaryToWriter(message: SInt32Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SInt32Rules;
  static deserializeBinaryFromReader(message: SInt32Rules, reader: jspb.BinaryReader): SInt32Rules;
}

export namespace SInt32Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class SInt64Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): SInt64Rules;
  hasConst(): boolean;
  clearConst(): SInt64Rules;

  getLt(): number;
  setLt(value: number): SInt64Rules;

  getLte(): number;
  setLte(value: number): SInt64Rules;

  getGt(): number;
  setGt(value: number): SInt64Rules;

  getGte(): number;
  setGte(value: number): SInt64Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): SInt64Rules;
  clearInList(): SInt64Rules;
  addIn(value: number, index?: number): SInt64Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): SInt64Rules;
  clearNotInList(): SInt64Rules;
  addNotIn(value: number, index?: number): SInt64Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): SInt64Rules;
  clearExampleList(): SInt64Rules;
  addExample(value: number, index?: number): SInt64Rules;

  getLessThanCase(): SInt64Rules.LessThanCase;

  getGreaterThanCase(): SInt64Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SInt64Rules.AsObject;
  static toObject(includeInstance: boolean, msg: SInt64Rules): SInt64Rules.AsObject;
  static serializeBinaryToWriter(message: SInt64Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SInt64Rules;
  static deserializeBinaryFromReader(message: SInt64Rules, reader: jspb.BinaryReader): SInt64Rules;
}

export namespace SInt64Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class Fixed32Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): Fixed32Rules;
  hasConst(): boolean;
  clearConst(): Fixed32Rules;

  getLt(): number;
  setLt(value: number): Fixed32Rules;

  getLte(): number;
  setLte(value: number): Fixed32Rules;

  getGt(): number;
  setGt(value: number): Fixed32Rules;

  getGte(): number;
  setGte(value: number): Fixed32Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): Fixed32Rules;
  clearInList(): Fixed32Rules;
  addIn(value: number, index?: number): Fixed32Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): Fixed32Rules;
  clearNotInList(): Fixed32Rules;
  addNotIn(value: number, index?: number): Fixed32Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): Fixed32Rules;
  clearExampleList(): Fixed32Rules;
  addExample(value: number, index?: number): Fixed32Rules;

  getLessThanCase(): Fixed32Rules.LessThanCase;

  getGreaterThanCase(): Fixed32Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fixed32Rules.AsObject;
  static toObject(includeInstance: boolean, msg: Fixed32Rules): Fixed32Rules.AsObject;
  static serializeBinaryToWriter(message: Fixed32Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fixed32Rules;
  static deserializeBinaryFromReader(message: Fixed32Rules, reader: jspb.BinaryReader): Fixed32Rules;
}

export namespace Fixed32Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class Fixed64Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): Fixed64Rules;
  hasConst(): boolean;
  clearConst(): Fixed64Rules;

  getLt(): number;
  setLt(value: number): Fixed64Rules;

  getLte(): number;
  setLte(value: number): Fixed64Rules;

  getGt(): number;
  setGt(value: number): Fixed64Rules;

  getGte(): number;
  setGte(value: number): Fixed64Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): Fixed64Rules;
  clearInList(): Fixed64Rules;
  addIn(value: number, index?: number): Fixed64Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): Fixed64Rules;
  clearNotInList(): Fixed64Rules;
  addNotIn(value: number, index?: number): Fixed64Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): Fixed64Rules;
  clearExampleList(): Fixed64Rules;
  addExample(value: number, index?: number): Fixed64Rules;

  getLessThanCase(): Fixed64Rules.LessThanCase;

  getGreaterThanCase(): Fixed64Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fixed64Rules.AsObject;
  static toObject(includeInstance: boolean, msg: Fixed64Rules): Fixed64Rules.AsObject;
  static serializeBinaryToWriter(message: Fixed64Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fixed64Rules;
  static deserializeBinaryFromReader(message: Fixed64Rules, reader: jspb.BinaryReader): Fixed64Rules;
}

export namespace Fixed64Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class SFixed32Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): SFixed32Rules;
  hasConst(): boolean;
  clearConst(): SFixed32Rules;

  getLt(): number;
  setLt(value: number): SFixed32Rules;

  getLte(): number;
  setLte(value: number): SFixed32Rules;

  getGt(): number;
  setGt(value: number): SFixed32Rules;

  getGte(): number;
  setGte(value: number): SFixed32Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): SFixed32Rules;
  clearInList(): SFixed32Rules;
  addIn(value: number, index?: number): SFixed32Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): SFixed32Rules;
  clearNotInList(): SFixed32Rules;
  addNotIn(value: number, index?: number): SFixed32Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): SFixed32Rules;
  clearExampleList(): SFixed32Rules;
  addExample(value: number, index?: number): SFixed32Rules;

  getLessThanCase(): SFixed32Rules.LessThanCase;

  getGreaterThanCase(): SFixed32Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFixed32Rules.AsObject;
  static toObject(includeInstance: boolean, msg: SFixed32Rules): SFixed32Rules.AsObject;
  static serializeBinaryToWriter(message: SFixed32Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFixed32Rules;
  static deserializeBinaryFromReader(message: SFixed32Rules, reader: jspb.BinaryReader): SFixed32Rules;
}

export namespace SFixed32Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class SFixed64Rules extends jspb.Message {
  getConst(): number;
  setConst(value: number): SFixed64Rules;
  hasConst(): boolean;
  clearConst(): SFixed64Rules;

  getLt(): number;
  setLt(value: number): SFixed64Rules;

  getLte(): number;
  setLte(value: number): SFixed64Rules;

  getGt(): number;
  setGt(value: number): SFixed64Rules;

  getGte(): number;
  setGte(value: number): SFixed64Rules;

  getInList(): Array<number>;
  setInList(value: Array<number>): SFixed64Rules;
  clearInList(): SFixed64Rules;
  addIn(value: number, index?: number): SFixed64Rules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): SFixed64Rules;
  clearNotInList(): SFixed64Rules;
  addNotIn(value: number, index?: number): SFixed64Rules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): SFixed64Rules;
  clearExampleList(): SFixed64Rules;
  addExample(value: number, index?: number): SFixed64Rules;

  getLessThanCase(): SFixed64Rules.LessThanCase;

  getGreaterThanCase(): SFixed64Rules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFixed64Rules.AsObject;
  static toObject(includeInstance: boolean, msg: SFixed64Rules): SFixed64Rules.AsObject;
  static serializeBinaryToWriter(message: SFixed64Rules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFixed64Rules;
  static deserializeBinaryFromReader(message: SFixed64Rules, reader: jspb.BinaryReader): SFixed64Rules;
}

export namespace SFixed64Rules {
  export type AsObject = {
    pb_const?: number,
    lt: number,
    lte: number,
    gt: number,
    gte: number,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 2,
    LTE = 3,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 4,
    GTE = 5,
  }
}

export class BoolRules extends jspb.Message {
  getConst(): boolean;
  setConst(value: boolean): BoolRules;
  hasConst(): boolean;
  clearConst(): BoolRules;

  getExampleList(): Array<boolean>;
  setExampleList(value: Array<boolean>): BoolRules;
  clearExampleList(): BoolRules;
  addExample(value: boolean, index?: number): BoolRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolRules.AsObject;
  static toObject(includeInstance: boolean, msg: BoolRules): BoolRules.AsObject;
  static serializeBinaryToWriter(message: BoolRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolRules;
  static deserializeBinaryFromReader(message: BoolRules, reader: jspb.BinaryReader): BoolRules;
}

export namespace BoolRules {
  export type AsObject = {
    pb_const?: boolean,
    exampleList: Array<boolean>,
  }
}

export class StringRules extends jspb.Message {
  getConst(): string;
  setConst(value: string): StringRules;
  hasConst(): boolean;
  clearConst(): StringRules;

  getLen(): number;
  setLen(value: number): StringRules;
  hasLen(): boolean;
  clearLen(): StringRules;

  getMinLen(): number;
  setMinLen(value: number): StringRules;
  hasMinLen(): boolean;
  clearMinLen(): StringRules;

  getMaxLen(): number;
  setMaxLen(value: number): StringRules;
  hasMaxLen(): boolean;
  clearMaxLen(): StringRules;

  getLenBytes(): number;
  setLenBytes(value: number): StringRules;
  hasLenBytes(): boolean;
  clearLenBytes(): StringRules;

  getMinBytes(): number;
  setMinBytes(value: number): StringRules;
  hasMinBytes(): boolean;
  clearMinBytes(): StringRules;

  getMaxBytes(): number;
  setMaxBytes(value: number): StringRules;
  hasMaxBytes(): boolean;
  clearMaxBytes(): StringRules;

  getPattern(): string;
  setPattern(value: string): StringRules;
  hasPattern(): boolean;
  clearPattern(): StringRules;

  getPrefix(): string;
  setPrefix(value: string): StringRules;
  hasPrefix(): boolean;
  clearPrefix(): StringRules;

  getSuffix(): string;
  setSuffix(value: string): StringRules;
  hasSuffix(): boolean;
  clearSuffix(): StringRules;

  getContains(): string;
  setContains(value: string): StringRules;
  hasContains(): boolean;
  clearContains(): StringRules;

  getNotContains(): string;
  setNotContains(value: string): StringRules;
  hasNotContains(): boolean;
  clearNotContains(): StringRules;

  getInList(): Array<string>;
  setInList(value: Array<string>): StringRules;
  clearInList(): StringRules;
  addIn(value: string, index?: number): StringRules;

  getNotInList(): Array<string>;
  setNotInList(value: Array<string>): StringRules;
  clearNotInList(): StringRules;
  addNotIn(value: string, index?: number): StringRules;

  getEmail(): boolean;
  setEmail(value: boolean): StringRules;

  getHostname(): boolean;
  setHostname(value: boolean): StringRules;

  getIp(): boolean;
  setIp(value: boolean): StringRules;

  getIpv4(): boolean;
  setIpv4(value: boolean): StringRules;

  getIpv6(): boolean;
  setIpv6(value: boolean): StringRules;

  getUri(): boolean;
  setUri(value: boolean): StringRules;

  getUriRef(): boolean;
  setUriRef(value: boolean): StringRules;

  getAddress(): boolean;
  setAddress(value: boolean): StringRules;

  getUuid(): boolean;
  setUuid(value: boolean): StringRules;

  getTuuid(): boolean;
  setTuuid(value: boolean): StringRules;

  getIpWithPrefixlen(): boolean;
  setIpWithPrefixlen(value: boolean): StringRules;

  getIpv4WithPrefixlen(): boolean;
  setIpv4WithPrefixlen(value: boolean): StringRules;

  getIpv6WithPrefixlen(): boolean;
  setIpv6WithPrefixlen(value: boolean): StringRules;

  getIpPrefix(): boolean;
  setIpPrefix(value: boolean): StringRules;

  getIpv4Prefix(): boolean;
  setIpv4Prefix(value: boolean): StringRules;

  getIpv6Prefix(): boolean;
  setIpv6Prefix(value: boolean): StringRules;

  getHostAndPort(): boolean;
  setHostAndPort(value: boolean): StringRules;

  getWellKnownRegex(): KnownRegex;
  setWellKnownRegex(value: KnownRegex): StringRules;

  getStrict(): boolean;
  setStrict(value: boolean): StringRules;
  hasStrict(): boolean;
  clearStrict(): StringRules;

  getExampleList(): Array<string>;
  setExampleList(value: Array<string>): StringRules;
  clearExampleList(): StringRules;
  addExample(value: string, index?: number): StringRules;

  getWellKnownCase(): StringRules.WellKnownCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringRules.AsObject;
  static toObject(includeInstance: boolean, msg: StringRules): StringRules.AsObject;
  static serializeBinaryToWriter(message: StringRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringRules;
  static deserializeBinaryFromReader(message: StringRules, reader: jspb.BinaryReader): StringRules;
}

export namespace StringRules {
  export type AsObject = {
    pb_const?: string,
    len?: number,
    minLen?: number,
    maxLen?: number,
    lenBytes?: number,
    minBytes?: number,
    maxBytes?: number,
    pattern?: string,
    prefix?: string,
    suffix?: string,
    contains?: string,
    notContains?: string,
    inList: Array<string>,
    notInList: Array<string>,
    email: boolean,
    hostname: boolean,
    ip: boolean,
    ipv4: boolean,
    ipv6: boolean,
    uri: boolean,
    uriRef: boolean,
    address: boolean,
    uuid: boolean,
    tuuid: boolean,
    ipWithPrefixlen: boolean,
    ipv4WithPrefixlen: boolean,
    ipv6WithPrefixlen: boolean,
    ipPrefix: boolean,
    ipv4Prefix: boolean,
    ipv6Prefix: boolean,
    hostAndPort: boolean,
    wellKnownRegex: KnownRegex,
    strict?: boolean,
    exampleList: Array<string>,
  }

  export enum WellKnownCase { 
    WELL_KNOWN_NOT_SET = 0,
    EMAIL = 12,
    HOSTNAME = 13,
    IP = 14,
    IPV4 = 15,
    IPV6 = 16,
    URI = 17,
    URI_REF = 18,
    ADDRESS = 21,
    UUID = 22,
    TUUID = 33,
    IP_WITH_PREFIXLEN = 26,
    IPV4_WITH_PREFIXLEN = 27,
    IPV6_WITH_PREFIXLEN = 28,
    IP_PREFIX = 29,
    IPV4_PREFIX = 30,
    IPV6_PREFIX = 31,
    HOST_AND_PORT = 32,
    WELL_KNOWN_REGEX = 24,
  }
}

export class BytesRules extends jspb.Message {
  getConst(): Uint8Array | string;
  getConst_asU8(): Uint8Array;
  getConst_asB64(): string;
  setConst(value: Uint8Array | string): BytesRules;
  hasConst(): boolean;
  clearConst(): BytesRules;

  getLen(): number;
  setLen(value: number): BytesRules;
  hasLen(): boolean;
  clearLen(): BytesRules;

  getMinLen(): number;
  setMinLen(value: number): BytesRules;
  hasMinLen(): boolean;
  clearMinLen(): BytesRules;

  getMaxLen(): number;
  setMaxLen(value: number): BytesRules;
  hasMaxLen(): boolean;
  clearMaxLen(): BytesRules;

  getPattern(): string;
  setPattern(value: string): BytesRules;
  hasPattern(): boolean;
  clearPattern(): BytesRules;

  getPrefix(): Uint8Array | string;
  getPrefix_asU8(): Uint8Array;
  getPrefix_asB64(): string;
  setPrefix(value: Uint8Array | string): BytesRules;
  hasPrefix(): boolean;
  clearPrefix(): BytesRules;

  getSuffix(): Uint8Array | string;
  getSuffix_asU8(): Uint8Array;
  getSuffix_asB64(): string;
  setSuffix(value: Uint8Array | string): BytesRules;
  hasSuffix(): boolean;
  clearSuffix(): BytesRules;

  getContains(): Uint8Array | string;
  getContains_asU8(): Uint8Array;
  getContains_asB64(): string;
  setContains(value: Uint8Array | string): BytesRules;
  hasContains(): boolean;
  clearContains(): BytesRules;

  getInList(): Array<Uint8Array | string>;
  setInList(value: Array<Uint8Array | string>): BytesRules;
  clearInList(): BytesRules;
  addIn(value: Uint8Array | string, index?: number): BytesRules;

  getNotInList(): Array<Uint8Array | string>;
  setNotInList(value: Array<Uint8Array | string>): BytesRules;
  clearNotInList(): BytesRules;
  addNotIn(value: Uint8Array | string, index?: number): BytesRules;

  getIp(): boolean;
  setIp(value: boolean): BytesRules;

  getIpv4(): boolean;
  setIpv4(value: boolean): BytesRules;

  getIpv6(): boolean;
  setIpv6(value: boolean): BytesRules;

  getExampleList(): Array<Uint8Array | string>;
  setExampleList(value: Array<Uint8Array | string>): BytesRules;
  clearExampleList(): BytesRules;
  addExample(value: Uint8Array | string, index?: number): BytesRules;

  getWellKnownCase(): BytesRules.WellKnownCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytesRules.AsObject;
  static toObject(includeInstance: boolean, msg: BytesRules): BytesRules.AsObject;
  static serializeBinaryToWriter(message: BytesRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytesRules;
  static deserializeBinaryFromReader(message: BytesRules, reader: jspb.BinaryReader): BytesRules;
}

export namespace BytesRules {
  export type AsObject = {
    pb_const?: Uint8Array | string,
    len?: number,
    minLen?: number,
    maxLen?: number,
    pattern?: string,
    prefix?: Uint8Array | string,
    suffix?: Uint8Array | string,
    contains?: Uint8Array | string,
    inList: Array<Uint8Array | string>,
    notInList: Array<Uint8Array | string>,
    ip: boolean,
    ipv4: boolean,
    ipv6: boolean,
    exampleList: Array<Uint8Array | string>,
  }

  export enum WellKnownCase { 
    WELL_KNOWN_NOT_SET = 0,
    IP = 10,
    IPV4 = 11,
    IPV6 = 12,
  }
}

export class EnumRules extends jspb.Message {
  getConst(): number;
  setConst(value: number): EnumRules;
  hasConst(): boolean;
  clearConst(): EnumRules;

  getDefinedOnly(): boolean;
  setDefinedOnly(value: boolean): EnumRules;
  hasDefinedOnly(): boolean;
  clearDefinedOnly(): EnumRules;

  getInList(): Array<number>;
  setInList(value: Array<number>): EnumRules;
  clearInList(): EnumRules;
  addIn(value: number, index?: number): EnumRules;

  getNotInList(): Array<number>;
  setNotInList(value: Array<number>): EnumRules;
  clearNotInList(): EnumRules;
  addNotIn(value: number, index?: number): EnumRules;

  getExampleList(): Array<number>;
  setExampleList(value: Array<number>): EnumRules;
  clearExampleList(): EnumRules;
  addExample(value: number, index?: number): EnumRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumRules.AsObject;
  static toObject(includeInstance: boolean, msg: EnumRules): EnumRules.AsObject;
  static serializeBinaryToWriter(message: EnumRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumRules;
  static deserializeBinaryFromReader(message: EnumRules, reader: jspb.BinaryReader): EnumRules;
}

export namespace EnumRules {
  export type AsObject = {
    pb_const?: number,
    definedOnly?: boolean,
    inList: Array<number>,
    notInList: Array<number>,
    exampleList: Array<number>,
  }
}

export class RepeatedRules extends jspb.Message {
  getMinItems(): number;
  setMinItems(value: number): RepeatedRules;
  hasMinItems(): boolean;
  clearMinItems(): RepeatedRules;

  getMaxItems(): number;
  setMaxItems(value: number): RepeatedRules;
  hasMaxItems(): boolean;
  clearMaxItems(): RepeatedRules;

  getUnique(): boolean;
  setUnique(value: boolean): RepeatedRules;
  hasUnique(): boolean;
  clearUnique(): RepeatedRules;

  getItems(): FieldConstraints | undefined;
  setItems(value?: FieldConstraints): RepeatedRules;
  hasItems(): boolean;
  clearItems(): RepeatedRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepeatedRules.AsObject;
  static toObject(includeInstance: boolean, msg: RepeatedRules): RepeatedRules.AsObject;
  static serializeBinaryToWriter(message: RepeatedRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepeatedRules;
  static deserializeBinaryFromReader(message: RepeatedRules, reader: jspb.BinaryReader): RepeatedRules;
}

export namespace RepeatedRules {
  export type AsObject = {
    minItems?: number,
    maxItems?: number,
    unique?: boolean,
    items?: FieldConstraints.AsObject,
  }
}

export class MapRules extends jspb.Message {
  getMinPairs(): number;
  setMinPairs(value: number): MapRules;
  hasMinPairs(): boolean;
  clearMinPairs(): MapRules;

  getMaxPairs(): number;
  setMaxPairs(value: number): MapRules;
  hasMaxPairs(): boolean;
  clearMaxPairs(): MapRules;

  getKeys(): FieldConstraints | undefined;
  setKeys(value?: FieldConstraints): MapRules;
  hasKeys(): boolean;
  clearKeys(): MapRules;

  getValues(): FieldConstraints | undefined;
  setValues(value?: FieldConstraints): MapRules;
  hasValues(): boolean;
  clearValues(): MapRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapRules.AsObject;
  static toObject(includeInstance: boolean, msg: MapRules): MapRules.AsObject;
  static serializeBinaryToWriter(message: MapRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapRules;
  static deserializeBinaryFromReader(message: MapRules, reader: jspb.BinaryReader): MapRules;
}

export namespace MapRules {
  export type AsObject = {
    minPairs?: number,
    maxPairs?: number,
    keys?: FieldConstraints.AsObject,
    values?: FieldConstraints.AsObject,
  }
}

export class AnyRules extends jspb.Message {
  getInList(): Array<string>;
  setInList(value: Array<string>): AnyRules;
  clearInList(): AnyRules;
  addIn(value: string, index?: number): AnyRules;

  getNotInList(): Array<string>;
  setNotInList(value: Array<string>): AnyRules;
  clearNotInList(): AnyRules;
  addNotIn(value: string, index?: number): AnyRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyRules.AsObject;
  static toObject(includeInstance: boolean, msg: AnyRules): AnyRules.AsObject;
  static serializeBinaryToWriter(message: AnyRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyRules;
  static deserializeBinaryFromReader(message: AnyRules, reader: jspb.BinaryReader): AnyRules;
}

export namespace AnyRules {
  export type AsObject = {
    inList: Array<string>,
    notInList: Array<string>,
  }
}

export class DurationRules extends jspb.Message {
  getConst(): google_protobuf_duration_pb.Duration | undefined;
  setConst(value?: google_protobuf_duration_pb.Duration): DurationRules;
  hasConst(): boolean;
  clearConst(): DurationRules;

  getLt(): google_protobuf_duration_pb.Duration | undefined;
  setLt(value?: google_protobuf_duration_pb.Duration): DurationRules;
  hasLt(): boolean;
  clearLt(): DurationRules;

  getLte(): google_protobuf_duration_pb.Duration | undefined;
  setLte(value?: google_protobuf_duration_pb.Duration): DurationRules;
  hasLte(): boolean;
  clearLte(): DurationRules;

  getGt(): google_protobuf_duration_pb.Duration | undefined;
  setGt(value?: google_protobuf_duration_pb.Duration): DurationRules;
  hasGt(): boolean;
  clearGt(): DurationRules;

  getGte(): google_protobuf_duration_pb.Duration | undefined;
  setGte(value?: google_protobuf_duration_pb.Duration): DurationRules;
  hasGte(): boolean;
  clearGte(): DurationRules;

  getInList(): Array<google_protobuf_duration_pb.Duration>;
  setInList(value: Array<google_protobuf_duration_pb.Duration>): DurationRules;
  clearInList(): DurationRules;
  addIn(value?: google_protobuf_duration_pb.Duration, index?: number): google_protobuf_duration_pb.Duration;

  getNotInList(): Array<google_protobuf_duration_pb.Duration>;
  setNotInList(value: Array<google_protobuf_duration_pb.Duration>): DurationRules;
  clearNotInList(): DurationRules;
  addNotIn(value?: google_protobuf_duration_pb.Duration, index?: number): google_protobuf_duration_pb.Duration;

  getExampleList(): Array<google_protobuf_duration_pb.Duration>;
  setExampleList(value: Array<google_protobuf_duration_pb.Duration>): DurationRules;
  clearExampleList(): DurationRules;
  addExample(value?: google_protobuf_duration_pb.Duration, index?: number): google_protobuf_duration_pb.Duration;

  getLessThanCase(): DurationRules.LessThanCase;

  getGreaterThanCase(): DurationRules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DurationRules.AsObject;
  static toObject(includeInstance: boolean, msg: DurationRules): DurationRules.AsObject;
  static serializeBinaryToWriter(message: DurationRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DurationRules;
  static deserializeBinaryFromReader(message: DurationRules, reader: jspb.BinaryReader): DurationRules;
}

export namespace DurationRules {
  export type AsObject = {
    pb_const?: google_protobuf_duration_pb.Duration.AsObject,
    lt?: google_protobuf_duration_pb.Duration.AsObject,
    lte?: google_protobuf_duration_pb.Duration.AsObject,
    gt?: google_protobuf_duration_pb.Duration.AsObject,
    gte?: google_protobuf_duration_pb.Duration.AsObject,
    inList: Array<google_protobuf_duration_pb.Duration.AsObject>,
    notInList: Array<google_protobuf_duration_pb.Duration.AsObject>,
    exampleList: Array<google_protobuf_duration_pb.Duration.AsObject>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 3,
    LTE = 4,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 5,
    GTE = 6,
  }
}

export class TimestampRules extends jspb.Message {
  getConst(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConst(value?: google_protobuf_timestamp_pb.Timestamp): TimestampRules;
  hasConst(): boolean;
  clearConst(): TimestampRules;

  getLt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLt(value?: google_protobuf_timestamp_pb.Timestamp): TimestampRules;
  hasLt(): boolean;
  clearLt(): TimestampRules;

  getLte(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLte(value?: google_protobuf_timestamp_pb.Timestamp): TimestampRules;
  hasLte(): boolean;
  clearLte(): TimestampRules;

  getLtNow(): boolean;
  setLtNow(value: boolean): TimestampRules;

  getGt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGt(value?: google_protobuf_timestamp_pb.Timestamp): TimestampRules;
  hasGt(): boolean;
  clearGt(): TimestampRules;

  getGte(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGte(value?: google_protobuf_timestamp_pb.Timestamp): TimestampRules;
  hasGte(): boolean;
  clearGte(): TimestampRules;

  getGtNow(): boolean;
  setGtNow(value: boolean): TimestampRules;

  getWithin(): google_protobuf_duration_pb.Duration | undefined;
  setWithin(value?: google_protobuf_duration_pb.Duration): TimestampRules;
  hasWithin(): boolean;
  clearWithin(): TimestampRules;

  getExampleList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setExampleList(value: Array<google_protobuf_timestamp_pb.Timestamp>): TimestampRules;
  clearExampleList(): TimestampRules;
  addExample(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  getLessThanCase(): TimestampRules.LessThanCase;

  getGreaterThanCase(): TimestampRules.GreaterThanCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampRules.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampRules): TimestampRules.AsObject;
  static serializeBinaryToWriter(message: TimestampRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampRules;
  static deserializeBinaryFromReader(message: TimestampRules, reader: jspb.BinaryReader): TimestampRules;
}

export namespace TimestampRules {
  export type AsObject = {
    pb_const?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ltNow: boolean,
    gt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gtNow: boolean,
    within?: google_protobuf_duration_pb.Duration.AsObject,
    exampleList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
  }

  export enum LessThanCase { 
    LESS_THAN_NOT_SET = 0,
    LT = 3,
    LTE = 4,
    LT_NOW = 7,
  }

  export enum GreaterThanCase { 
    GREATER_THAN_NOT_SET = 0,
    GT = 5,
    GTE = 6,
    GT_NOW = 8,
  }
}

export class Violations extends jspb.Message {
  getViolationsList(): Array<Violation>;
  setViolationsList(value: Array<Violation>): Violations;
  clearViolationsList(): Violations;
  addViolations(value?: Violation, index?: number): Violation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Violations.AsObject;
  static toObject(includeInstance: boolean, msg: Violations): Violations.AsObject;
  static serializeBinaryToWriter(message: Violations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Violations;
  static deserializeBinaryFromReader(message: Violations, reader: jspb.BinaryReader): Violations;
}

export namespace Violations {
  export type AsObject = {
    violationsList: Array<Violation.AsObject>,
  }
}

export class Violation extends jspb.Message {
  getFieldPath(): string;
  setFieldPath(value: string): Violation;
  hasFieldPath(): boolean;
  clearFieldPath(): Violation;

  getConstraintId(): string;
  setConstraintId(value: string): Violation;
  hasConstraintId(): boolean;
  clearConstraintId(): Violation;

  getMessage(): string;
  setMessage(value: string): Violation;
  hasMessage(): boolean;
  clearMessage(): Violation;

  getForKey(): boolean;
  setForKey(value: boolean): Violation;
  hasForKey(): boolean;
  clearForKey(): Violation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Violation.AsObject;
  static toObject(includeInstance: boolean, msg: Violation): Violation.AsObject;
  static serializeBinaryToWriter(message: Violation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Violation;
  static deserializeBinaryFromReader(message: Violation, reader: jspb.BinaryReader): Violation;
}

export namespace Violation {
  export type AsObject = {
    fieldPath?: string,
    constraintId?: string,
    message?: string,
    forKey?: boolean,
  }
}

export enum Ignore { 
  IGNORE_UNSPECIFIED = 0,
  IGNORE_IF_UNPOPULATED = 1,
  IGNORE_IF_DEFAULT_VALUE = 2,
  IGNORE_ALWAYS = 3,
  IGNORE_EMPTY = 1,
  IGNORE_DEFAULT = 2,
}
export enum KnownRegex { 
  KNOWN_REGEX_UNSPECIFIED = 0,
  KNOWN_REGEX_HTTP_HEADER_NAME = 1,
  KNOWN_REGEX_HTTP_HEADER_VALUE = 2,
}
