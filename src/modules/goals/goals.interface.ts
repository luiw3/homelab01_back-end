import { Users } from "@prisma/client";

export interface ICreateGoal {
    goal: string;
    amountNeeded: number;
    totalSaved: number;
    user: Users;
}
