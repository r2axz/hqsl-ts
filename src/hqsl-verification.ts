import type { PublicKey } from "openpgp";

/**
 * Verification verdict
 */
export enum HQSLState {
    /** The HQSL is not signed at all, though it may be valid otherwise. */
    NotSigned = 0,
    /** The HQSL is completely valid, everything checks out. */
    Valid = 1,
    /** The HQSL was signed, but OpenPGP.js could not parse the signature, 
     * it did not validate, or it otherwise does not conform to HQSL standard. */
    Invalid = 2,
    /** Could not acquire the signer public key from key servers. 
     * This may be because they were unreachable or timed out. */
    KeyNotFound = 3,
    /** There's a valid signature by an available signer key, but that signer key has no
     * certification by any of the trusted keys for the time range given in the QSO. */
    KeyNotCertified = 4,
}

/**
 * Verification result object.
 *
 * May contain the signer and certifier keys, if this makes sense for the verdict.
 */
export type HQSLVerification = {
    verdict: HQSLState,
    signerKey?: PublicKey,
    certifierKey?: PublicKey,
}
