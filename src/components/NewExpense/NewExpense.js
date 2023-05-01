import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleShowEditingBtn = () => {
    setIsEditing(true);
  };

  const handleCancelEditBtn = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button type="button" onClick={handleShowEditingBtn}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleCancelEditBtn}
        />
      )}
    </div>
  );
}

export default NewExpense;
