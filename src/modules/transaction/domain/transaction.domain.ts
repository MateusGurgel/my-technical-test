export class Transaction {
  constructor(
    private _id: number,
    private _reciverId: number,
    private _senderId: number,
    private _value: number,
    private _type: string,
  ) {}
  
  get id(): number {
    return this._id;
  }
}
