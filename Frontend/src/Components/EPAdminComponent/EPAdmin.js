import './EPAdmin.css';
import { useEffect , useState } from 'react';
import { _userapiurl } from '../../Api.url';
import axios from 'axios';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';



function EPAdmin() {
 
  const navigate = useNavigate();
  const [name , setName] = useState("");
   const [email , setEmail] = useState("");
   const [ mobile , setMobile ] = useState("");
   const [ address , setAddress ] = useState();
   const [ city , setCity ] = useState();
   const [ gender , setGender ] = useState();  
   const [output , setOutput] = useState();

   const pattern = new RegExp(/^\d{1,10}$/);

  useEffect(()=>{
    axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
     setName(response.data[0].name);
     setEmail(response.data[0].email);
     setMobile(response.data[0].mobile);
     setAddress(response.data[0].address);
     setCity(response.data[0].city);  
     setGender(response.data[0].gender)
    }).catch((error)=>{
     console.log(error);
    });
   },[]);

   const handleSubmit=()=>{
    let updateDetails={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};      
    axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
      navigate("/epadmin")  
    }).catch((error)=>{
      console.log(error);    
    });
   };
  return (<>
     {/* about section */}

     <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 custom-color">
          <div class="detail-box">
              <br/>
              <div class="heading_container">
              <h2 style={{"fontWeight":"bold"}}>Edit Profile<span> Here!!</span></h2><br/>
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
    {!validator.isEmail(email)?<span style={{"color":"red","fontSize":"12px"}}>Invalid email</span>:""}
  </div>

  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={ e => setMobile(e.target.value) } />
    <span style={{"color":"red","fontSize":"12px"}}>your Number is </span>{!pattern.test(mobile)?<span style={{"color":"red","fontSize":"12px"}}>Invalid</span>:"+91" + mobile}
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
    Male&nbsp;<input type="radio"  name="gender" value="male" checked={gender==="male"} onChange={ e => setGender(e.target.value) } />
    &nbsp;&nbsp;
    Female&nbsp;<input type="radio"  name="gender" value="female"  checked={gender==="female"} onChange={ e => setGender(e.target.value) }/>
  </div>
  <button onClick={handleSubmit} type="button" class="btn btn-primary" style={{"backgroundColor":"#ff4800"}}>Submit</button>
</form>
<br/>
          </div>
        </div>
      </div>
    </div>
    
  </section>

 {/* end about section */}


  </>
  );
}

export default EPAdmin;
