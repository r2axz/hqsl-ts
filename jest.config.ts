import type { Config } from "jest";

const config: Config = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    roots: ["<rootDir>/tests"],
    setupFiles: ["<rootDir>/setupJest.ts"]
};

export default config;
