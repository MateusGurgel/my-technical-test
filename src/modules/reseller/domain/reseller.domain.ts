import { CPF } from "./cpf.valueObject";

export class Reseller {
  constructor(
    private _id: number,
    private _walletId: number,
    private _userId: number,
    private _cpf: CPF
  ) {}

  get id() {
    return this._id;
  }
}
