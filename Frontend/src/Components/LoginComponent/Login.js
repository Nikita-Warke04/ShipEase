import './Login.css';
import { useState} from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import {useNavigate} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [email , setEmail] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput] = useState();
  const[checkEmail , setCheckEmail] = useState();
  const[checkPassword , setcheckPassword] = useState();


  const handleSubmit=()=>{
    if(email==undefined) 
    {
      setCheckEmail("Please enter email details");
    }
    else if(password==undefined)
    {
      setcheckPassword("Please enter password details");
    }
    else{

    
    var userDetails={"email":email,"password":password};
  
    axios.post(_userapiurl+"login",userDetails).then((response)=>{
    //console.log(response.data);
    var users = response.data.userDetails;
      localStorage.setItem("_id",users._id);
      localStorage.setItem("name",users.name); 
      localStorage.setItem("email",users.email); 
      localStorage.setItem("mobile",users.mobile); 
      localStorage.setItem("adddress",users.address); 
      localStorage.setItem("city",users.city); 
      localStorage.setItem("gender",users.gender); 
      localStorage.setItem("info",users.info);  
      localStorage.setItem("role",users.role);
      localStorage.setItem("token",response.data.token); 

      users.role == "admin" ? navigate("/admin") : navigate("/user");      
    }).catch((error)=>{
        setOutput("Invalid User or Verify your account");
        setEmail("");
        setPassword("");
       });
      }
};
  return (<>
 
  <div class="global-container" id="login_bg">  
    <div class="card login-form">  
    <div class="card-body">  
    
        <h2 class="card-title text-center"> Login <span style={{"color":"#ff4800"}}>Here</span></h2>  
        <font color="red">{output}</font>
        <div class="card-text">  
            <form>  
            <div class="form-group" id="avatar">  
                   <img src="assets/images/free-avatar.webp" height="90px" />
                </div> 
                <div class="form-group">  
                    <label for="email"> Enter Email address:</label>  
                    <input type="email" class="form-control form-control-sm" value={email} onChange={e => setEmail(e.target.value)} />  
                    <font color="red">{checkEmail}</font>             
                </div>  
                <div class="form-group">  
                    <label for="pwd">Enter Password:</label>  
                    <a  style={{"float":"right","fontSize":"12px"}}> Forgot password? </a>  
                    <input type="password" class="form-control form-control-sm" value={password} onChange={ e => setPassword(e.target.value)}/>  
                    <font color="red">{checkPassword}</font>
                </div>  
                <br/>
                <button type="button"  onClick={handleSubmit} class="btn btn-primary btn-block"style={{"backgroundColor":"#ff4800"}}> Sign in </button>  
                  
                <br/>
            </form>  
        </div>  
    </div>  
</div>  
</div>  
 
  </>
  );
}

export default Login;
