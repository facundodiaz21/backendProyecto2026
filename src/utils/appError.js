export class AppError extends Error {
  constructor(message, Statuscode) {
    super(message);
    this.Statuscode = Statuscode;
  }
}
