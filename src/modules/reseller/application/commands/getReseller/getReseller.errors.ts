export class InvalidResellerIdError extends Error {
  constructor(id: number) {
    super("Invalid reseller " + id);
  }
}