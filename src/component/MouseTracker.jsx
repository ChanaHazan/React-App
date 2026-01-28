import { useEffect, useState } from "react"

const MouseTracker = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    useEffect(() => {
        const mouseTracker = (event) => {
            setX(event.clientX)
            setY(event.clientY)
        }
        window.addEventListener("mousemove", mouseTracker);

        return () => {
            window.removeEventListener("mousemove", mouseTracker)
        };

    }, [])
    return (
        <>
        <h1>The mouse in :</h1>
        <h2>x:{x} ,y:{y}</h2>
        </>

    )
}
export default MouseTracker