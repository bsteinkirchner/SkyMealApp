import React from 'react';
import CalendarNav from "../components/MealCalendar/CalendarNav";
import CalendarBody from '../components/MealCalendar/CalendarBody';
function MealPlan() {
  return (
    <div>
      <CalendarNav />
      <CalendarBody />
    </div>
  )
}
export default MealPlan;