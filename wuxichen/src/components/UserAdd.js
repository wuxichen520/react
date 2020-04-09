import React,{useRef} from 'react';
/**
 *只要一个组件是通过路由route渲染出来的那么久可以获取一些属性
 location
 history
 match
 * @param {*} props 
 */
export default function(props){
    let usernameRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        let username = usernameRef.current.value;
        let userStr = localStorage.getItem("users");
        let users = userStr? JSON.parse(userStr) :[];
        users.push({id:Date.now()+"",username});
        localStorage.setItem("users",JSON.stringify(users))
        props.history.push("/user/list")
    }
    return (
        <form onSubmit={handleSubmit}>
            用户名: <input type="text" className="form-control" ref={usernameRef}/>
            <button type="submit">提交</button>
        </form>
    )
}