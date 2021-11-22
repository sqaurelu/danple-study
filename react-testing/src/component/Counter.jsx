import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1>Counter</h1>
            <p data-testid="count">{count}</p>
            <button
                type="button"
                onClick={handleIncrease}
                data-testid="increase"
            >
                +
            </button>
            <button
                type="button"
                onClick={handleDecrease}
                data-testid="decrease"
            >
                -
            </button>
        </div>
    );
}

export default Counter;
