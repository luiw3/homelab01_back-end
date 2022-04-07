import { Users } from "@prisma/client";

export interface ICreateGoal {
    goal: string;
    amountNeeded: number;
    totalSaved: number;
    targetDate: Date;
    user: Users;
    parent: ICreateGoal
    children: ICreateGoal
}
