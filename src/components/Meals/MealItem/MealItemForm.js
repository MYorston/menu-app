import { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props =>{
    const [isValid, setIsValid] = useState(true);

    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setIsValid(false);
            return;
        }

        props.addItemToCart(enteredAmountNumber);

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                label='Amount' 
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id, 
                    type:'number', 
                    min: '1', 
                    max:'5', 
                    step:'1', 
                    defaultValue:'1'}}/>
            <button >+ Add</button>
            {!isValid && <div>Please enter a value amount.</div>}
        </form>
    )
};

export default MealItemForm;