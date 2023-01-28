import {Fragment} from 'react'

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton.jsx';
import mealImage from '../assets/meals.jpg'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>My React App</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="dinner table" />
        </div>
    </Fragment>
  )
}

export default Header