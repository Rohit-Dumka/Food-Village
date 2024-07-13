import { useEffect, useState } from "react";

const User = (props) =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{

        const timer = setInterval(()=>{
        }, 1000)

        return ()=>{
            clearInterval(timer);
        }
    },[])

    return(
        <div className="user-container">
            <div>
                <button onClick={()=>setCount(prev=>prev-1)}><h1> - </h1></button>
                {count}
                <button onClick={()=>setCount(prev=>prev+1)}><h1> + </h1></button>
            </div>
            <h2>{props.name}</h2>
            <h3>Nainital</h3>
            <p>Rohit Dumka</p>
        </div>
    )
}

export default User;