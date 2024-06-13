import './Addsubcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl , _subcategoryapiurl } from '../../Api.url';
import { Link } from 'react-router-dom';



function Addsubcategory() {
 
  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [subCatName , setSubCatName] = useState();
  const [output , setOutput] = useState();
  const [ cList , setCategoryDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_categoryapiurl+"fetch").then((response)=>{
     setCategoryDetails(response.data);    
    }).catch((err)=>{
     console.log(err);
    });   
  });


  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_subcategoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
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

<h2>Add SubCategory <span>Here!!!</span></h2><br/>
<font style={{"color":"red"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
     <option>Select Category</option>
     {
      cList.map((row)=>(
        <option>{row.catnm}</option>
      ))
     }
    </select>
    </div><br/>
  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">SubCategory Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger" style={{"backgroundColor":"#ff4800"}}>Add SubCategory</button>&nbsp;&nbsp;
  <Link to={`/managesubcategory`}><button class="btn btn-danger" style={{"backgroundColor":"#ff4800"}}>Manage Subcategory</button></Link>
 
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

export default Addsubcategory;
