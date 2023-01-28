import {Fragment} from 'react'
import AvailableMeals from './AvailableMeals.jsx'
import MealsSummary from './MealsSummary.jsx'

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default Meals;