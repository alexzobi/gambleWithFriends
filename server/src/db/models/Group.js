// @flow

import uuid from 'uuid';

export default class Group {
  constructor() {
    this._data = {
      id: uuid(),
      name: '',
      bankValue: 0,
      initialMemberValue: 0,
      description: '',
      currencyName: '',
      administrator: '',
      voteRequirement: 2,
      allowNegativeBalance: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  set id(id) {
    this._data.id = id;
  }

  get id() {
    return this._data.id;
  }

  get name() {
    return this._data.name;
  }

  set name(value) {
    this._data.name = value;
    this._data.updatedAt = new Date();
  }

  get bankValue() {
    return this._data.bankValue;
  }

  set bankValue(value) {
    this._data.bankValue = value;
    this._data.updatedAt = new Date();
  }

  get initialMemberValue() {
    return this._data.initialMemberValue;
  }

  set initialMemberValue(value) {
    this._data.initialMemberValue = value;
    this._data.updatedAt = new Date();
  }

  get description() {
    return this._data.description;
  }

  set description(value) {
    this._data.description = value;
    this._data.updatedAt = new Date();
  }

  get currencyName () {
    return this._data.currencyName;
  }

  set currencyName (value) {
    this._data.currencyName = value || null;
    this._data.updatedAt = new Date();
  }

  get administrator () {
    return this._data.administrator;
  }

  set administrator (value) {
    this._data.administrator = value || null;
    this._data.updatedAt = new Date();
  }

  get voteRequirement () {
    return this._data.voteRequirement;
  }

  set voteRequirement (value) {
    this._data.voteRequirement = value || null;
    this._data.updatedAt = new Date();
  }

  get allowNegativeBalance () {
    return this._data.allowNegativeBalance;
  }

  set allowNegativeBalance (value) {
    this._data.allowNegativeBalance = value || null;
    this._data.updatedAt = new Date();
  }

  get createdAt () {
    return new Date(this._data.createdAt);
  }

  get updatedAt () {
    return new Date(this._data.updatedAt);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      bankValue: this.bankValue,
      initialMemberValue: this.firstName,
      description: this.description,
      currencyName: this.currencyName,
      administrator: this.administrator,
      voteRequirement: this.voteRequirement,
      allowNegativeBalance: this.allowNegativeBalance,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
