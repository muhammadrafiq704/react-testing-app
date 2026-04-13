import useCounter from "./hooks/useCounter";

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter({ initialValue: 10 });

    return (
        <div data-testid="counter">
            <h1 data-testid="counter-value">Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
