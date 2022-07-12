import React from 'react';
import CalendarNav from "../components/MealCalendar/CalendarNav";
import WeekCalendar from '../components/MealCalendar/WeekCalendar';
import styled from "styled-components"
;

function MealPlan() {
  return (
    <div>
      <CalendarNav />
      <WeekCalendar/>
    </div>
  )
}
export default MealPlan;