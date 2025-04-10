// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=ts"
// @generated from file settings/v1/setting.proto (package settings.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { DeleteSettingsRequest, DeleteSettingsResponse, GetSettingsRequest, GetSettingsResponse, SetSettingsRequest, SetSettingsResponse } from "./setting_pb.js";

/**
 * @generated from rpc settings.v1.SettingsService.Get
 */
export const get = {
  localName: "get",
  name: "Get",
  kind: MethodKind.Unary,
  I: GetSettingsRequest,
  O: GetSettingsResponse,
  service: {
    typeName: "settings.v1.SettingsService"
  }
} as const;

/**
 * @generated from rpc settings.v1.SettingsService.Set
 */
export const set = {
  localName: "set",
  name: "Set",
  kind: MethodKind.Unary,
  I: SetSettingsRequest,
  O: SetSettingsResponse,
  service: {
    typeName: "settings.v1.SettingsService"
  }
} as const;

/**
 * @generated from rpc settings.v1.SettingsService.Delete
 */
export const delete$ = {
  localName: "delete",
  name: "Delete",
  kind: MethodKind.Unary,
  I: DeleteSettingsRequest,
  O: DeleteSettingsResponse,
  service: {
    typeName: "settings.v1.SettingsService"
  }
} as const;
