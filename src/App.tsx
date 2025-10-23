import { useState } from "react";
import ExpenseList from "./Component/Expense-tracker/ExpenseList";
import ExpenseFilter from "./Component/Expense-tracker/ExpenseFilter";
import ExpenseForm from "./Component/Expense-tracker/ExpenseForm";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    // { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    // { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    // { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    // { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleAddExpense = (expense: Omit<Expense, "id">) => {
    setExpenses((prev) => [
      ...prev,
      { ...expense, id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1 },
    ]);
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={handleAddExpense} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses((prev) => prev.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;