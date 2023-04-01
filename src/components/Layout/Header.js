import React from "react";

import HeaderCardButton from "./HeaderCardButton";
import foodImg from '../../assets/food.jpg'
import classes from './Header.module.css';

const Header = props => {
return  <React.Fragment> 
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImg} alt='Table full of delicious food!'/> 
            </div>
        </React.Fragment>
}

export default Header