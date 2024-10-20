// source: v1/common/response.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var buf_validate_validate_pb = require('../../buf/validate/validate_pb.js');
goog.object.extend(proto, buf_validate_validate_pb);
goog.exportSymbol('proto.proto.v1.common.Code', null, global);
goog.exportSymbol('proto.proto.v1.common.ErrorResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.v1.common.ErrorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.v1.common.ErrorResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.v1.common.ErrorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.v1.common.ErrorResponse.displayName = 'proto.proto.v1.common.ErrorResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.v1.common.ErrorResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.v1.common.ErrorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.v1.common.ErrorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.v1.common.ErrorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.v1.common.ErrorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    violationsList: jspb.Message.toObjectList(msg.getViolationsList(),
    buf_validate_validate_pb.Violation.toObject, includeInstance),
    code: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.v1.common.ErrorResponse}
 */
proto.proto.v1.common.ErrorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.v1.common.ErrorResponse;
  return proto.proto.v1.common.ErrorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.v1.common.ErrorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.v1.common.ErrorResponse}
 */
proto.proto.v1.common.ErrorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new buf_validate_validate_pb.Violation;
      reader.readMessage(value,buf_validate_validate_pb.Violation.deserializeBinaryFromReader);
      msg.addViolations(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.v1.common.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.v1.common.ErrorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.v1.common.ErrorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.v1.common.ErrorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.v1.common.ErrorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getViolationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      buf_validate_validate_pb.Violation.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.proto.v1.common.ErrorResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.v1.common.ErrorResponse} returns this
 */
proto.proto.v1.common.ErrorResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated buf.validate.Violation violations = 2;
 * @return {!Array<!proto.buf.validate.Violation>}
 */
proto.proto.v1.common.ErrorResponse.prototype.getViolationsList = function() {
  return /** @type{!Array<!proto.buf.validate.Violation>} */ (
    jspb.Message.getRepeatedWrapperField(this, buf_validate_validate_pb.Violation, 2));
};


/**
 * @param {!Array<!proto.buf.validate.Violation>} value
 * @return {!proto.proto.v1.common.ErrorResponse} returns this
*/
proto.proto.v1.common.ErrorResponse.prototype.setViolationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.buf.validate.Violation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.buf.validate.Violation}
 */
proto.proto.v1.common.ErrorResponse.prototype.addViolations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.buf.validate.Violation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.v1.common.ErrorResponse} returns this
 */
proto.proto.v1.common.ErrorResponse.prototype.clearViolationsList = function() {
  return this.setViolationsList([]);
};


/**
 * optional Code code = 3;
 * @return {!proto.proto.v1.common.Code}
 */
proto.proto.v1.common.ErrorResponse.prototype.getCode = function() {
  return /** @type {!proto.proto.v1.common.Code} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.proto.v1.common.Code} value
 * @return {!proto.proto.v1.common.ErrorResponse} returns this
 */
proto.proto.v1.common.ErrorResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.proto.v1.common.Code = {
  CODE_INVALID: 0,
  CODE_OK: 1,
  CODE_ERROR: 20
};

goog.object.extend(exports, proto.proto.v1.common);
