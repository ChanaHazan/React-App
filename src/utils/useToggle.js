import { useState } from "react"

const useToggle=()=>{

const [state,setState]=useState(true)

console.log("the state was changing");

return{state,setState}
}

export default useToggle