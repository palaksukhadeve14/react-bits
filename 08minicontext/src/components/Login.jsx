import React,{useContext,useState} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const {setuser}=useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setuser({username,password});
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" onChange={(e)=>{
                setusername(e.target.value)
            }} placeholder="username"></input>
            {" "}
            <input type="password" onChange={(e)=>{
                setpassword(e.target.value)
            }} placeholder="password"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;