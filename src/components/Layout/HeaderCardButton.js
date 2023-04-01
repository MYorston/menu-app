import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted]= useState(false)
    const ctx = useContext(CartContext);

    const { items } = ctx;
    const itemCount = items.reduce( (totalCount, item) => {
        return totalCount + item.amount
    }, 0);

    

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {itemCount}
        </span>
    </button>
};

export default HeaderCardButton;