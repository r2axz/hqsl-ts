import basex from "base-x";

export const alphabetRe = /[0-9A-Z]+/g;

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const encoder = basex(alphabet);
