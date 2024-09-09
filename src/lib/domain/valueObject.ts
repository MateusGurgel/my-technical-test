export abstract class ValueObject<T>{
    protected readonly props: T;

    protected constructor(props: T) {
        this.props = props;
    }

    get values() {
        return this.props;
    }

    public equals(other?: ValueObject<T>): boolean {
        if (!other) return false;
        return this.props === other.props;
    }
}