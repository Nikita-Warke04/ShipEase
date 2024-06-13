import './Register.css';
import {useState} from 'react'; 
import axios from 'axios'; 
import { _userapiurl } from '../../Api.url';
import validator from 'validator';

function Register() {
   const [name , setName] = useState("");
   const [email , setEmail] = useState("");
   const [ password , setPassword ] = useState("");
   const [ mobile , setMobile ] = useState("");
   const [ address , setAddress ] = useState();
   const [ city , setCity ] = useState();
   const [ gender , setGender ] = useState();  
   const [output , setOutput] = useState();

   const pattern = new RegExp(/^\d{1,10}$/);
  
   const handleSubmit=()=>{
    
   var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};

   axios.post(_userapiurl+"save",userDetails).then((response)=>{
    setOutput("User Registered successfully.....");
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
    setGender("");
   }).catch((error)=>{
  if(!name)
  setOutput("Name is required");
  else if(!email)
  setOutput("Email is required");
  else if(!password)
  setOutput("Password is required");
  else if(!mobile)
  setOutput("Mobile is required");
  else if(!address)
  setOutput("Address is required");
  else if(!city)
  setOutput("City is required");

   });
    // console.log(userDetails);
  
  };


  return (<>
 <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 custom-color">
          <div class="detail-box">
              <br/>
              <div class="heading_container">
              <h2 style={{"fontWeight":"bold"}}>Register <span> Here!!</span></h2><br/>
              <font color="red">{output}</font>
              <br/></div>
   <form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={ e => setName(e.target.value) } />
    {(name.length<3) ? <span style={{"color":"red","fontSize":"12px"}}>Name must be greater than 2 characters</span>:""}
  </div>

  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
    {!validator.isEmail(email)?<span style={{"color":"red","fontSize":"12px"}}>Ex=demo@gmail.com</span>:""}
  </div>

  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={ e => setPassword(e.target.value) } />
    {!validator.isStrongPassword(password,{minLength:5})?<span style={{"color":"red","fontSize":"12px"}}>Password must be minimum 5 characters </span>:""}
  </div>

  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={ e => setMobile(e.target.value) } />
    <span style={{"color":"red","fontSize":"12px"}}>your Number is </span>{!pattern.test(mobile)?<span style={{"color":"red","fontSize":"12px"}}></span>:"+91" + mobile}
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea value={address} style={{"border":"2px solid rgb(162, 151, 151)"}} onChange={ e => setAddress(e.target.value) } rows="5" class="form-control"></textarea>
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" style={{"border":"2px solid rgb(162, 151, 151)"}}value={city} onChange={ e => setCity(e.target.value) } >
      <option>Select City</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>
      <option>Gwalior</option>
   </select>
  </div>
  <div class="form-group">
    <label for="gender">Gender :</label>
    &nbsp;&nbsp;
    Male&nbsp;<input type="radio"  name="gender" value="male" onChange={ e => setGender(e.target.value) }/>
    &nbsp;&nbsp;
    Female&nbsp;<input type="radio"  name="gender" value="female" onChange={ e => setGender(e.target.value) }/>
  </div>
  <button onClick={handleSubmit} type="button" class="btn btn-primary" style={{"backgroundColor":"#ff4800"}}>Submit</button>
</form>
<br/>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  </>);
}

export default Register;
