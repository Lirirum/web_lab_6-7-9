    import React, { useState } from 'react';
    import { TransitionGroup, CSSTransition } from 'react-transition-group';
    import './styles/animatedList.css'; 

    const AnimatedList = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className="animated-list-container">
        <button onClick={addItem}>Add Item</button>

        <TransitionGroup className="item-list">
            {items.map((item, index) => (
            <CSSTransition key={index} classNames="fade" timeout={300}>
                <div className="item">
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
                </div>
            </CSSTransition>
            ))}
        </TransitionGroup>
        </div>
    );
    };

    export default AnimatedList;