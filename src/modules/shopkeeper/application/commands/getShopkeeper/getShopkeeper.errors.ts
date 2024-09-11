export class InvalidShopkeeperIdError extends Error {
  constructor(id: number) {
    super("Invalid shopkeeper " + id);
  }
}