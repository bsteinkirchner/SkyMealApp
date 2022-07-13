import React, {useState} from 'react';
import styled from "styled-components";

function CalendarBody() {
  const [menu, setMenu] = useState('');
  const handleMenuChange = event => {
      setMenu(event.target.value);
      console.log(event.target.value);
  }
  return (
    <Week>
        <Day>
            <h2>Breakfast:</h2>
            <textarea
                id="menu"
                name="menu"
                value={menu}
                onChange={handleMenuChange}
                />
            <br/>
            <h2>Lunch:</h2>
            <textarea
                id="menu"
                name="menu"
                value={menu}
                onChange={handleMenuChange}
                />
            <br/>
            <h2>Dinner:</h2>
            <textarea
                id="menu"
                name="menu"
                value={menu}
                onChange={handleMenuChange}
                />
        </Day>
        <Day>
            <h2>Breakfast:</h2>
            <br/>
            <h2>Lunch:</h2>
            <br/>
            <h2>Dinner:</h2>
        </Day>
        <Day>
            <h2>Breakfast:</h2>
            <br/>
            <h2>Lunch:</h2>
            <br/>
            <h2>Dinner:</h2>
        </Day>
        <Day>
            <h2>Breakfast:</h2>
            <br/>
            <h2>Lunch:</h2>
            <br/>
            <h2>Dinner:</h2>
        </Day>
        <Day>
            <h2>Breakfast:</h2>
            <br/>
            <h2>Lunch:</h2>
            <br/>
            <h2>Dinner:</h2>
        </Day>
        <Day>
            <h2>Breakfast:</h2>
            <textarea/>
            <br/>
            <h2>Lunch:</h2>
            <br/>
            <h2>Dinner:</h2>
        </Day>
        <Day>
            <h2>Breakfast:</h2>
            <br/>
            <h2>Lunch:</h2>
            <br/>
            <h2>Dinner:</h2>
        </Day>
    </Week>
  )
}

const Week = styled.div`
    display: flex;
    flex-direction: row;
`;
const Day = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin: auto;
    height: 50vh;
    width: 50vh;
    border: 1px solid black;
`
export default CalendarBody;