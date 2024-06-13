import './CPAdmin.css';
import { useState} from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import {useNavigate} from 'react-router-dom';



function CPAdmin() {
  const navigate = useNavigate();
  const [opassword , setOldPassword] = useState();
  const [npassword , setNewPassword] = useState();
  const [cnpassword , setConfirmNewPassword] = useState();
  const [output , setOutput] = useState();

  const handleSubmit=()=>{
    axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
         if(npassword==cnpassword)
         {
            let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};      
            axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
            alert("Password Changed, Please Login again...");
            navigate("/logout");  
            }).catch((error)=>{
            console.log(error);    
            });
         }
         else
         {
            setOutput("New and Confirm New password mismatch");
            setNewPassword("");
            setConfirmNewPassword("");
         }
    }).catch((error)=>{
        setOutput("Invalid old password");
        setOldPassword("");
    });
  }
  return (<>
     {/* about section */}
     <div class="global-container">
    <div class="row">
       
        <div class="col-md-6">
            <div class="card login-form">
                <div class="card-body">
                    <h2 class="card-title text-center">Change <span style={{"color":"#ff4800"}}>password</span></h2>
                    <font color="red">{output}</font>
                    <div class="card-text">
                        <form>
                        <div class="form-group" id="avatar">  
                        <img src="assets/images/password-icon.png" height="80px" class="avatar-image"/>
                         </div>
                            <div class="form-group">
                                <label for="opwd">Current Password:</label>
                                <input type="password" class="form-control form-control-sm" value={opassword} onChange={ e => setOldPassword(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="npwd">New Password:</label>
                                <input type="password" class="form-control form-control-sm" value={npassword} onChange={ e => setNewPassword(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="cnpwd">Confirm New Password:</label>
                                <input type="password" class="form-control form-control-sm" value={cnpassword} onChange={ e => setConfirmNewPassword(e.target.value)} />
                            </div>
                            <button type="button" onClick={handleSubmit} style={{"backgroundColor":"#ff4800"}} class="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="col-md-6">
            <div class=" login-image" id="log_img">
                <img src="assets/images/shipiconjpg.jpg" class="img-fluid" alt="Reset Password Image"/>
            </div>
        </div>
    </div>
    </div>

</>
  );
}

export default CPAdmin;
