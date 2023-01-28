import React from 'react'
import classes from './Checkout.module.css'

const isEmtpy = (input) => input.trim().length === 0;
const isNotFiveChars = (input) => input.trim().length !== 5;

const Checkout = (props) => {
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        
        const nameValidity = !isEmtpy(nameInputRef);
        const streetValidity = !isEmtpy(streetInputRef);
        const cityValidity = !isEmtpy(cityInputRef);
        const postalCodeValidity = isNotFiveChars(postalCodeInputRef);

        setFormValidity({
            name: nameValidity,
            street: streetValidity,
            city: cityValidity,
            postalCode: postalCodeValidity
        })
    }

  return (
    <from className={classes.form} onSumbit={confirmHandler}>
        <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}></input>
            {!formValidity.name && <p>Please Enter Your Name</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}></input>
            {!formValidity.street && <p>Please Enter Street</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}></input>
            {!formValidity.city && <p>Please Enter City</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
            <label htmlFor='postalcode'>Postal Code</label>
            <input type='text' id='postalcode' ref={postalCodeInputRef}></input>
            {!formValidity.postalcode && <p>Please Enter Postal Code</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit' className={classes.submit}>Confirm</button>
        </div>
    </from>
  )
}

export default Checkout