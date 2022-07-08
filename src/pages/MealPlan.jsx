import { useState } from "react";
import Calendar from "../components/MealCalendar/Calendar";
import Details from "../components/MealCalendar/Details";

function MealPlan() {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className="calendar">
      <h1>Weekly Meal Calendar</h1>
      <Calendar showDetailsHandle={showDetailsHandle} />
      <br />
      {showDetails && <Details data={data} />}
    </div>
  );
}

export default MealPlan;