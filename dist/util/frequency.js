import { bandmap } from "./bandmap";
export function freqBand(f) {
    let distance = Infinity;
    let knownBand = "??";
    for (const [band, midpoint] of Object.entries(bandmap)) {
        const newDistance = Math.abs(f - midpoint);
        if (newDistance < distance) {
            distance = newDistance;
            knownBand = band;
        }
    }
    return knownBand;
}
export function bandFreq(s) {
    return bandmap[s.toLowerCase()] || null;
}
export function normalizeFreq(n) {
    if (isNaN(n)) {
        throw new RangeError("Bogus frequency");
    }
    const textual = n.toString();
    const numWhole = Math.trunc(n);
    let [whole, fractional] = textual.split(".");
    if (fractional === undefined) {
        fractional = "";
    }
    if (numWhole > 1) {
        fractional = fractional.slice(0, 3);
    }
    if (fractional) {
        fractional = fractional.replace(/(0\s*$)/g, "");
    }
    if (whole == "0") {
        whole = "";
    }
    let result = `${whole}.${fractional}`;
    result = result.replace(/(\.\s*$)/g, "");
    return result;
}
//# sourceMappingURL=frequency.js.map