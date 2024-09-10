export class WalletNotFound extends Error{
    constructor(walletId: number){
        super(`The wallet ${walletId} was not found`);
    }
}