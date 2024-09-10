export class Wallet {
  constructor(private _id: number, private _balance: number) {}
  
  get id(): number {
    return this._id;
  }
}
