const calculation =  (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => value + sum, 0)
}

export default calculation;