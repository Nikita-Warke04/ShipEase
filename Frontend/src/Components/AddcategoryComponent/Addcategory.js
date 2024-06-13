import './Addcategory.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../Api.url'; 
import { Link } from 'react-router-dom';



function Addcategory() {
  
  const [file , setFile] = useState();
  const [ catName , setCatName] = useState();
  
  const [output , setOutput] = useState();

  const handleChange=(event)=>{
     setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
     var formData = new FormData();
     formData.append('catnm', catName);
     formData.append('caticon',file);
     const config ={
      'content-type': 'multipart/form-Data'
     };
     axios.post(_categoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  }
  return (<>
     {/* about section */}

     <section class="about_section layout_padding">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box1">
<div class="heading_container">

<h2>Add Category <span>Here!!!</span></h2><br/>
<font style={{"color":"red"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger" style={{"backgroundColor":"#ff4800"}}>Add Category</button>&nbsp;&nbsp;
  <Link to={`/managecategory`}><button class="btn btn-danger" style={{"backgroundColor":"#ff4800"}}>Manage Category</button></Link>
</form>
</div>



            </div>
          </div>
        </div>
      </div>
    </section>

 {/* end about section */}


  </>
  );
}

export default Addcategory;
