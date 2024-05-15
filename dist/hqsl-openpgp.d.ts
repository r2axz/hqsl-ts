/// <reference path="../src/openpgp-missing.d.ts" />
import type { UTCDateMini } from "@date-fns/utc";
import { PublicKey, PrivateKey } from "openpgp";
import { HQSL } from "./hqsl";
export type CertificationRange = {
    call: string;
    start: UTCDateMini;
    end: UTCDateMini;
    key: PublicKey;
};
export declare class HQSLOpenPGP {
    trustedKeys: PublicKey[];
    keyServers: string[];
    timeout: number;
    constructor(trustedKeys: PublicKey[], keyServers: string[], timeout: number);
    static setup(trustedKeys: Array<string | Uint8Array | PublicKey>, keyServers?: string[], timeout?: number): Promise<HQSLOpenPGP>;
    lookup(query: string): Promise<PublicKey[]>;
    verify(qsl: HQSL): Promise<HQSL>;
    getCertifications(key: PublicKey): Promise<CertificationRange[]>;
    sign(qsl: HQSL, key: PrivateKey, passphrase?: string, signingDate?: Date): Promise<HQSL>;
    publish(key: PublicKey, targetKeyServer?: string): Promise<void>;
}
//# sourceMappingURL=hqsl-openpgp.d.ts.map