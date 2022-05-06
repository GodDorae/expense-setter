import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';

function NewExpense(props) {
  const [init, setInit] = useState(true)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setInit(false);
  };

  const formCancelHandler = () => {
    setInit(true);
  };

  return (
    <div className="new-expense">
      {init ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancel={formCancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
