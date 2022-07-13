import React, {useState} from 'react';
import styled from "styled-components";
import {FaCheckCircle, FaCircle, FaChevronLeft, FaChevronRight, FaPlus} from 'react-icons/fa'

const List = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
		{ itemName: 'item 1', quantity: 1, isSelected: false },
		{ itemName: 'item 2', quantity: 3, isSelected: true },
		{ itemName: 'item 3', quantity: 2, isSelected: false },
	]);

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
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
		<div className='list-con'>
			<div className='main-container'>
				<ItemP>Click the plus sign to add an item to your list.</ItemP>
				<ItemBox>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FaPlus onClick={() => handleAddButtonClick()} className="plus"/>
				</ItemBox>
				<ListHead>Your List</ListHead>
				<div className="item-list">
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										<FaCheckCircle className="icon"/>
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FaCircle className="icon"/>
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FaChevronLeft onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FaChevronRight onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

const ItemBox = styled.div`
	display: flex;
	width: 50%;
	margin: auto;
	justify-content: center;
	padding-top: 15px;
	align-items: center;
	input {
		background-color: #e7e5e5;
		border-radius: 1rem;
		height: 50px;
		margin-top: 2px;
		margin-bottom: 10px;
	}
`;
const ItemP = styled.p`
	font-size: 20px;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;
const ListHead = styled.h2`
	font-size: 30px;
	justify-content: start;
	display: flex;
	margin-left: 50px;
`;	

export default List;