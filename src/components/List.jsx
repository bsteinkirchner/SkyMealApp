import React, {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCheckCircle, faCircle} from '@fortawesome/free-solid-svg-icons';

const List = () => {
    const [items, setItems] = useState([
        {itemName: 'item 1', quantity: 1, isSelected:false},
        {itemName: 'item 2', quantity: 3, isSelected:true},
        {itemName: 'item 3', quantity: 2, isSelected:false}
    ]);

    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(6);

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false
        };
        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
        calculateTotal();
    };

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        calculateTotal();
    };

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity--;
        setItems(newItems);
        calculateTotal();
    };

    const toggleComplete = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    };

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        setTotalItemCount(totalItemCount);
    };

    return (
        <Background>
			<Container>
                <Header>Grocery List</Header>
				<ItemBox>
					<Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...'/>
					<FontAwesomeIcon icon={faPlus} size="md" onClick={() => handleAddButtonClick()} />
				</ItemBox>
				<ItemList>
					{items.map((item, index) => (
						<ItemContainer>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} size="lg"/>
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} size="lg"/>
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faMinus} size="md" onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faPlus} size="md" onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</ItemContainer>
					))}
				</ItemList>
				<div className='total'>Total: {totalItemCount}</div>
			</Container>
		</Background>
	);
};

const Background = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    text-align:center;
    padding: 10px 10px 30px 10px;
`;

const Container = styled.div`
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    width: 100%;
    height: min-content;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemBox = styled.div`
    padding: 1px 10px 30px 10px;
    border-radius: 2rem;
`;

const Input = styled.input`
    border-radius: 2rem;
    padding: 3px 15px 3px 15px;
    margin: 5px;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: row;
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
    flex-direction: column;
    text-align: center;
`
export default List;
