export interface ICreateExpense {
    expenseType: EExpenseTypes;
    value: number;
    expenseDate: Date;
    paymentMethod: EPaymentMethods;
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