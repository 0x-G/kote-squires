// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Squire extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("faith", Value.fromBigInt(BigInt.zero()));
    this.set("luck", Value.fromBigInt(BigInt.zero()));
    this.set("strength", Value.fromBigInt(BigInt.zero()));
    this.set("type", Value.fromBigInt(BigInt.zero()));
    this.set("wisdom", Value.fromBigInt(BigInt.zero()));
    this.set("genesis", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("questing", Value.fromBoolean(false));
    this.set("test", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Squire entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Squire must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Squire", id.toString(), this);
    }
  }

  static load(id: string): Squire | null {
    return changetype<Squire | null>(store.get("Squire", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get faith(): BigInt {
    let value = this.get("faith");
    return value!.toBigInt();
  }

  set faith(value: BigInt) {
    this.set("faith", Value.fromBigInt(value));
  }

  get luck(): BigInt {
    let value = this.get("luck");
    return value!.toBigInt();
  }

  set luck(value: BigInt) {
    this.set("luck", Value.fromBigInt(value));
  }

  get strength(): BigInt {
    let value = this.get("strength");
    return value!.toBigInt();
  }

  set strength(value: BigInt) {
    this.set("strength", Value.fromBigInt(value));
  }

  get type(): BigInt {
    let value = this.get("type");
    return value!.toBigInt();
  }

  set type(value: BigInt) {
    this.set("type", Value.fromBigInt(value));
  }

  get wisdom(): BigInt {
    let value = this.get("wisdom");
    return value!.toBigInt();
  }

  set wisdom(value: BigInt) {
    this.set("wisdom", Value.fromBigInt(value));
  }

  get genesis(): BigInt {
    let value = this.get("genesis");
    return value!.toBigInt();
  }

  set genesis(value: BigInt) {
    this.set("genesis", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get questing(): boolean {
    let value = this.get("questing");
    return value!.toBoolean();
  }

  set questing(value: boolean) {
    this.set("questing", Value.fromBoolean(value));
  }

  get test(): string {
    let value = this.get("test");
    return value!.toString();
  }

  set test(value: string) {
    this.set("test", Value.fromString(value));
  }
}
