export class InvalidCNPJError extends Error {
    constructor() {
        super('Invalid CNPJ');
        this.name = 'InvalidCNPJError';
    }
}