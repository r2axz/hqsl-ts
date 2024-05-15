/* Methods we use which are missing from openpgp.d.ts as of 5.11.1. */

import "openpgp";

declare module "openpgp" {
    export class User {
        constructor(
            userPacket: UserIDPacket | UserAttributePacket,
            mainKey: Key
        );
        public verifyCertificate(
            certificate: SignaturePacket,
            verificationKeys: Array<PublicKey>,
            date?: Date,
            config?: PartialConfig
        ): Promise<true | null>;
        public verify(date?: Date, config?: PartialConfig): Promise<true>;
    }
}
