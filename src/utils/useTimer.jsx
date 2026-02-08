import { useState } from "react"

const useTimer = (initialCount = 0, interval = 1000) => {

    const [count, setCount] = useState(initialCount)

    setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, interval);


    return count;
}

export default useTimer