import { useState } from "react"



const HocComponent=(Original)=>{
   
    function Newcomp(){
        const [count, setCount] = useState(0)
        
        const handler = () => {
            setCount(count + 1)
        }
        return<Original data={count} change={handler}/>
    }
    return Newcomp

}
export default HocComponent