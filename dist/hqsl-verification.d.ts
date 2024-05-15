import type { PublicKey } from "openpgp";
export declare enum HQSLState {
    NotSigned = 0,
    Valid = 1,
    Invalid = 2,
    KeyNotFound = 3,
    KeyNotCertified = 4
}
export type HQSLVerification = {
    verdict: HQSLState;
    signerKey?: PublicKey;
    certifierKey?: PublicKey;
};
//# sourceMappingURL=hqsl-verification.d.ts.map