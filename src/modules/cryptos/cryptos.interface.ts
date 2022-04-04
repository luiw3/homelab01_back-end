import { Users } from "@prisma/client";

export interface ICreateCrypto {
    token: string;
    amount: number;
    purchasingDate: Date;
    fiatValue: number;
    user: Users;
}
