import { CNPJ } from "./cnpj.valueObject";

export class Shopkeeper {
  constructor(
    private _id: number,
    private _walletId: number,
    private _userId: number,
    private _cnpj: CNPJ
  ) {}

  get id() {
    return this._id;
  }
  
  get walletId() {
    return this._walletId;
  }

  get userId() {
    return this._userId;
  }
}
