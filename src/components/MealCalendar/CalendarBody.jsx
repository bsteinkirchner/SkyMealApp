import React, {useState} from 'react';
import styled from "styled-components";

function CalendarBody() {
  const [menu, setMenu] = useState('');
  const handleMenuChange = event => {
      setMenu(event.target.value);
      console.log(event.target.value);
  }
  return (
    <Wrapper>
        <Week>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
            <Day>
                <h2>Breakfast:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Lunch:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
                <br/>
                <h2>Dinner:</h2>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                    />
            </Day>
        </Week>
        <Foot>
            <Snacks>
                <h1>Snacks:</h1>
                <MenuFill
                    id="menu"
                    name="menu"
                    value={menu}
                    onChange={handleMenuChange}
                />
            </Snacks>
        </Foot>
    </Wrapper>
  )
}

const Week = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-right: 1000px;
`;
const Day = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    height: 60vh;
    width: 14.2857143%;
    border: 1px solid black;
`;
const MenuFill =styled.textarea`
    height: 70%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: none;
    background-color: #f8f8f8;
`;
const Foot = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 50px;
`;
const Snacks = styled.div`
    display: flex;
    flex-direction: row;

    h1{
        padding-right: 120px;
    }
`;
const Wrapper = styled.div`

`;
export default CalendarBody;