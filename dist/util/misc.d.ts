export declare function Uint8ArrayToHex(uint8: Iterable<number> | ArrayLike<number>): string;
export type RequestInitWithTimeout = RequestInit & {
    timeout?: number;
};
export declare function fetchWithTimeout(resource: string | URL | Request, options?: RequestInitWithTimeout): Promise<Response>;
//# sourceMappingURL=misc.d.ts.map