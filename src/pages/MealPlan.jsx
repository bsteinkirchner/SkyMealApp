import React from 'react';
import CalendarNav from "../components/MealCalendar/CalendarNav";
import CalendarBody from '../components/MealCalendar/CalendarBody';
import CalendarCurrentTime from '../components/MealCalendar/CalendarCurrentTime';
import styled from 'styled-components';

function MealPlan() {
  return (
    <div>
      <MealHead>Weekly Meal Plan</MealHead>
      <DateHead>Today's date is: <CalendarCurrentTime/></DateHead>
      <CalendarNav />
      <CalendarBody />
    </div>
  )
}

const MealHead = styled.h1`
  font-size: 50px;
  padding-top: 100px;
`
const DateHead = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export default MealPlan;