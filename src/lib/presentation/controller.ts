export interface HttpRequest<TBody> {
    body: Partial<TBody>;
}

export class HttpError extends Error {
    constructor(public statusCode: number, public message: string) {
        super(message);
    }
}

export interface HttpResponse<TBody> {
    statusCode: number;
    body: TBody;
    contentType?: 'json' | 'text';
}

export interface Controller<TBody, TResponse> {
    handle(httpRequest: HttpRequest<TBody>): Promise<HttpResponse<TResponse>>;
}