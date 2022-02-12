import { useEffect,useState } from "react";
const LearnUseEffect = ()=> {
    let [no,setNo] = useState(0);
    useEffect(()=>{
        alert("Component Loaded");
        let componentRemoved=()=>{
            alert("The component is removed");
        };
        return componentRemoved;
    },[]);
    useEffect(()=>{
        console.log(`The value of no is changed and new value = ${no}`);
    },[no]);
    return(
        <div>
            useEffect hook Example.<br/>
            No. value = <strong>{no}</strong>
            <input type="number" value={no} onInput={(event)=>{
                setNo(event.target.value);
            }}/>
        </div>
    );
}
export default LearnUseEffect;