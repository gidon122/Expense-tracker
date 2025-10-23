// Using the automatic JSX runtime; no default React import needed

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
    if (!expenses || expenses.length === 0) return null;

    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => onDelete(expense.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${total.toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenseList;