import { useState } from "react"

interface UseCounterProps {
    initialValue?: number;
}

const useCounter = ({ initialValue = 0 }: UseCounterProps) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount((c) => Math.max(0, c - 1));
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

export default useCounter
