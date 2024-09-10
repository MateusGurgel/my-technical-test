export class InvalidUserIdError extends Error {
  constructor(id: number) {
    super("Invalid user " + id);
  }
}