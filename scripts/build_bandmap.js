#!/usr/bin/env node

/*

Construct and save the json object containing the map of band midpoints in MHz
to map frequencies to band names.

*/

import * as fs from "fs";

/**
 * Average of two values and round to 6 points after the decimal.
 * @param {number} a
 * @param {number} b
 * @returns number
 */
function average(a, b) {
    return Number(((a + b) / 2).toFixed(6));
}

const bandmap = {
    "2190m": average(0.1357, 0.1378),
    "630m": average(0.472, 0.479),
    "560m": average(0.501, 0.504),
    "160m": average(1.8, 2),
    "80m": average(3.5, 4.0),
    "60m": average(5.06, 5.45),
    "40m": average(7.0, 7.3),
    "30m": average(10.1, 10.15),
    "20m": average(14.0, 14.35),
    "17m": average(18.068, 18.168),
    "15m": average(21, 21.45),
    "12m": average(24.89, 24.99),
    "10m": average(28, 29.7),
    "8m": average(40, 45),
    "6m": average(50, 54),
    "5m": average(54.000001, 69.9),
    "4m": average(70, 71),
    "2m": average(144, 148),
    "1.25m": average(222, 225),
    "70cm": average(420, 450),
    "33cm": average(902, 928),
    "23cm": average(1240, 1300),
    "13cm": average(2300, 2450),
    "9cm": average(3300, 3500),
    "6cm": average(5650, 5925),
    "3cm": average(10000, 10500),
    "1.25cm": average(24000, 24250),
    "6mm": average(47000, 47200),
    "4mm": average(75500, 81000),
    "2.5mm": average(119980, 123000),
    "2mm": average(134000, 149000),
    "1mm": average(241000, 250000),
    submm: average(300000, 7500000),
};

fs.writeFileSync("./src/util/bandmap.ts", `export const bandmap = ${JSON.stringify(bandmap)};`);
