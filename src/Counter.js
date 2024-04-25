import {useState} from "react";

export default function Counter(props){
    const [value, setValue] = useState(props.val);
    
    function addValue() {
        setValue(value + 1);
    }
    
    return (
        <>
            <h1>Counter: {value}</h1>
            <button onClick={addValue}>Add</button>
        </>
    );
}