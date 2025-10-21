const xlsx = require("xlsx");
const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, category, amount, date } = req.body;
        if (!category || !amount || !date) {
            return res.status(400).json({ message: "All fields are required!" });
        }
        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });
        await newExpense.save();
        return res.status(200).json(newExpense);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error!" });
    }
}
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.json(expense);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error!" });
    }
}
exports.deleteExpense = async (req, res) => {
}
exports.downloadExpenseExcel = async (req, res) => {
}