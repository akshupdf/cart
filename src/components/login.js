import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login () {

    const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const usenavigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
        },[]);

  const ProceedLogin = (e) => { 
    e.preventDefault();
    
        fetch("https://lankanew.onrender.com/admin/" + username).then((res)=>{
            return res.json();
        }).then((resp) => {                       
            if (Object.keys(resp).length === 0) {
                alert('Please Enter valid username');
            } else{
                if (resp.password === password) {
                    alert('Welcome');
                    usenavigate('/product')
                }else{
                    alert('Please Enter valid credentials');
                }
            }
        }).catch((err) => {
            alert('Login Failed due to :' + err.message);
        });
    }

    return(
        <div>
            <form onSubmit={ProceedLogin}>      
                                <div className=" w-60 h-60 mx-auto  border-black border-2">
                                <h2 className="p-2">User Login</h2>     
                                        <input value={username} id="username" onChange={e => setUserName(e.target.value)} className=" border-black border-2 p-2 m-2" placeholder="Enter Username"></input>     
                                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className=" border-black border-2 p-2 m-2" placeholder="Enter password"></input>
                                        <button type="submit" className="btn btn-primary border-black border-2 p-1 m-4" >Login</button>                     
                                </div> 
                                </form>  
        </div>
    )
}

export default Login;