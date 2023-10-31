import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [inputValid, setInputValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enterePostalCdoe = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enterePostalCodeIsValid = isFiveChar(enterePostalCdoe);

    setInputValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enterePostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enterePostalCodeIsValid;
    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enterePostalCdoe,
        city: enteredCity,
    })
  };

  const enteredNameClasses = `${classes.control} ${
    inputValid.name ? "" : classes.invalid
  }`;
  const enteredStreetClasses = `${classes.control} ${
    inputValid.street ? "" : classes.invalid
  }`;
  const enteredCityClasses = `${classes.control} ${
    inputValid.city ? "" : classes.invalid
  }`;
  const enteredPostalCodeClasses = `${classes.control} ${
    inputValid.postalCode ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={enteredNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!inputValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={enteredStreetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!inputValid.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={enteredPostalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!inputValid.postalCode && (
          <p>Please enter a postal code (5 characters!)</p>
        )}
      </div>
      <div className={enteredCityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!inputValid.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
