export function Uint8ArrayToHex(uint8) {
    return Array.from(uint8)
        .map((i) => i.toString(16).padStart(2, "0"))
        .join("");
}
export async function fetchWithTimeout(resource, options = {}) {
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
//# sourceMappingURL=misc.js.map