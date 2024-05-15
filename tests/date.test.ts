import { fromHamDate, toHamDate, displayHamDate } from "../src/util/date";

test("Date formatter is reversible.", () => {
    const date = "202301012359";

    expect(toHamDate(fromHamDate(date))).toBe(date);
    expect(displayHamDate(fromHamDate(date))).toBe("2023-01-01 23:59");
});
