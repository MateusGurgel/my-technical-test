export class InvalidCPFError extends Error {
    constructor() {
        super('Invalid CPF');
        this.name = 'InvalidCPFError';
    }
}