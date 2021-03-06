import { Users } from "@prisma/client";

export interface ICreateExpense {
    expenseType: EExpenseTypes;
    name: string;
    value: number;
    expenseDate: Date;
    paymentMethod: EPaymentMethods;
    user: Users;
    isRecurrent: boolean
}

enum EExpenseTypes {
    RENT = 'RENT',
    BILLS = 'BILLS',
    HOUSE = 'HOUSE',
    TAKEAWAY = 'TAKEAWAY',
    MARKET = 'MARKET',
    MISC = 'MISC',
    LEISURE = 'LEISURE',
    CATS = 'CATS'
}

enum EPaymentMethods {
    CREDIT = 'CREDIT',
    DEBIT = 'DEBIT'
}