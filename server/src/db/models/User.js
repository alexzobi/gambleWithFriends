// @flow

import uuid from 'uuid';

export default class User {
  constructor() {
    this._data = {
      id: uuid(),
      email: '',
      userName: '',
      firstName: '',
      lastName: '',
      bio: '',
      avatar: '',
      wallet: '',
      password: '',
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

  get email() {
    return this._data.email;
  }

  set email(value) {
    this._data.email = value;
    this._data.updatedAt = new Date();
  }

  get userName() {
    return this._data.userName;
  }

  set userName(value) {
    this._data.userName = value;
    this._data.updatedAt = new Date();
  }

  get firstName() {
    return this._data.firstName;
  }

  set firstName(value) {
    this._data.firstName = value;
    this._data.updatedAt = new Date();
  }

  get lastName() {
    return this._data.lastName;
  }

  set lastName(value) {
    this._data.lastName = value;
    this._data.updatedAt = new Date();
  }

  get avatar () {
    return this._data.avatar;
  }

  set avatar (value) {
    this._data.avatar = value || null;
    this._data.updatedAt = new Date();
  }

  get bio () {
    return this._data.bio;
  }

  set bio (value) {
    this._data.bio = value || null;
    this._data.updatedAt = new Date();
  }

  get wallet () {
    return this._data.wallet;
  }

  set wallet (value) {
    this._data.wallet = value || null;
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
      email: this.email,
      userName: this.userName,
      password: this.password,
      bio: this.bio,
      avatar: this.avatar,
      wallet: this.wallet,
      firstName: this.firstName,
      lastName: this.lastName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
