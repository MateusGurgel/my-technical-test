import {createHash, pbkdf2Sync, randomBytes} from "node:crypto";
import {timingSafeEqual} from "node:crypto";

export interface ParsedEncryptedData {
    data: string;
    salt: string;
    iterations: number;
}

export namespace Cryptography {
    export function compareString(a: string, b: string): boolean {
        const bufferA = Buffer.from(a);
        const bufferB = Buffer.from(b);

    if (bufferA.length !== bufferB.length) {
        return false;
    }

    return timingSafeEqual(bufferA, bufferB);
    }

    export function encrypt(data: string, pepper: string, iterations: number = 10000, salt?: string): string {
        if (!salt) salt = generateSalt();
        const result = pbkdf2Sync(pepper + data, salt, iterations, 64, 'sha512').toString('hex');
        return `sha512$${iterations}$${salt}$${result}`;
    }

    export function generateSalt(): string {
        return randomBytes(16).toString('hex');
    }

    export function hashString(data: string, algorithm: string = 'sha265'): string {
        return createHash(algorithm).update(data).digest('hex');
    }

    export function parseEncryptedData(data: string): ParsedEncryptedData {
        const splitPass = data.split('$');
        if (splitPass.length !== 4)
            throw new Error('Invalid encrypted data',);
        return {
            iterations: parseInt(splitPass[1]),
            salt: splitPass[2],
            data: splitPass[3],
        };
    }

    export function randomString(length: number, chars: string): string {
        if (!chars)
            throw new Error("Argument 'chars' should not be empty",);

        const charsLength = chars.length;
        if (charsLength > 256)
            throw new Error(
                "Argument 'chars' should not have more than 256 characters" +
                ', otherwise unpredictability will be broken',
            );

        const bytes = randomBytes(length);
        const result = new Array(length);
        let cursor = 0;

        for (let i = 0; i < length; i++) {
            cursor += bytes[i];
            result[i] = chars[cursor % charsLength];
        }

        return result.join('');
    }
}