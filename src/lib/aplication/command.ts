export interface Command<I,O> {
    handler(input: I): Promise<O> | O;
}