import React,{useRef} from 'react';
export default function(props){


    let usernameRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        let username = usernameRef.current.value;
        let userStr = localStorage.getItem("users");
     
        props.history.push("/user/list")
    }
    return (
        <form onSubmit={handleSubmit}>
            用户名: <input type="text" className="form-control" ref={usernameRef}/>
            <button type="submit">提交</button>
        </form>
    )
}