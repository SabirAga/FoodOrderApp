import { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const {items} = cartCtx
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(()=>{
    if(items.length ===0){
      return;
    }
    setBtnIsHighlighted(true)

    setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);
  }, [items])
  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
