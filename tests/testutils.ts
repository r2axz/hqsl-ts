import * as fs from "fs";

export function slurpFileBuffer(fn: string) {
    return fs.readFileSync(`${__dirname}/fixtures/${fn}`);
}

export function slurpFileString(fn: string) {
    return slurpFileBuffer(fn).toString().trim();
}

export function cardFromFile(fn: string) {
    return slurpFileString(fn).split("https://hqsl.net/h#")[1];
}

/**
 * Manually extract the signed portion:
 * @param card Card string
 * @returns another string.
 */
export function getSignedPart(card: string) {
    return card.split(",").slice(0, 9).join(",");
}
