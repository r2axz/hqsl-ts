/**
 * An utility function to directly convert an array or buffer of ints to a hex string.
 *
 * @param uint8
 * @returns
 */
export function Uint8ArrayToHex(
    uint8: Iterable<number> | ArrayLike<number>
): string {
    return Array.from(uint8)
        .map((i) => i.toString(16).padStart(2, "0"))
        .join("");
}

// Very minimal fetch-with-timeout implementation.
// I'm setting the default timeout to 1000.

/**
 * Options for fetch with timeout with the added timeout.
 */
export type RequestInitWithTimeout = RequestInit & {
    /** Timeout in microseconds */
    timeout?: number;
};

/**
 * A version of fetch with a timeout option
 */
export async function fetchWithTimeout(
    resource: string | URL | Request,
    options: RequestInitWithTimeout = {}
) {
    const { timeout = 1000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
    });
    clearTimeout(id);

    return response;
}
