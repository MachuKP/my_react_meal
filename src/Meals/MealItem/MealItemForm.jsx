import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountValid] = useState(true);
  const currentAmount = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterAmount = currentAmount.current.value;
    //change string to number
    const enteredAmountNumber = +enterAmount;

    if (
      enterAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountValid(false);
    }
    props.clickAdd(enteredAmountNumber);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={currentAmount}
          label="amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
