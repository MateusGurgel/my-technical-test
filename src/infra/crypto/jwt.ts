import jwt, {DecodeOptions, SignOptions} from 'jsonwebtoken';

// TODO: Dependency Injection - Lembrar

export namespace JWT {
    export function decode<T>(token: string, secret: string, options: DecodeOptions = {}): T {
        if (options.json === undefined) options.json = true;
        return jwt.verify(token, secret, options) as T;
    }

    export function sign<T extends object>(payload: T, secret: string, options: SignOptions = {}): string {
        options.expiresIn = options?.expiresIn ?? 3600;
        return jwt.sign(payload, secret, options);
    }
}