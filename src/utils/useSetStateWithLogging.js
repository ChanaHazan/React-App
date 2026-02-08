import { useState } from "react";

const useSetStateWithLogging =()=>{

const [log,setLog]=useState("")

console.log("the state was changing");

return {log, setLog}

};

export default useSetStateWithLogging