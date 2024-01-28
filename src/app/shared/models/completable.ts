export interface Completable<T extends unknown = void> {
   onCompleted(args: T): void;
}
