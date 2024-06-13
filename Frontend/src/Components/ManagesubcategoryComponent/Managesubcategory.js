import './Managesubcategory.css';
import { useEffect , useState } from 'react';
import { _userapiurl ,_categoryapiurl , _subcategoryapiurl} from '../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Managesubcategory() {
  
  const navigate = useNavigate();
  const [ scDetails , setSubCategoryDetails] = useState([]);
  
  useEffect(()=>{
   axios.get(_subcategoryapiurl+"fetch").then((response)=>{
    setSubCategoryDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   })
  })


  const changeStatus=(_id)=>{    
    let deleteDetails={"data":{"_id":_id}};      
    axios.delete(_subcategoryapiurl+"delete",deleteDetails).then((response)=>{
      navigate("/managesubcategory")  
    }).catch((error)=>{
      console.log(error);    
    });
  
} 

  return (<>
     {/* about section */}

<section class="about_section layout_padding">
  <div class="container  ">
    <div class="row">
      <div class="col-md-12">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
            View and Manage SubCategory Details
            </h2><br/><br/>
          </div>

<center>              
<table border="2px" width="1100px">

<tr style={{"textAlign":"center"}}>
<th>SubcategoryID</th>
<th>Category name</th>
<th>Subcategory Name</th>
<th>Subcategory Icon</th>
<th>Action</th> 
</tr>
{
  scDetails.map((row)=>(
    <tr style={{"textAlign":"center"}}>
      <td>{row._id}</td>
      <td>{row.catnm}</td>
      <td>{row.subcatnm}</td>
      <td><img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="80" width="150"/></td>
      <td><button type="button" onClick={()=>{ changeStatus(row._id,'delete') }} class="btn btn-danger" >Delete</button></td>
      
    </tr>  
  ))
}
</table>              
</center>

        </div>
      </div>
    </div>
  </div>
</section>

 {/* end about section */}


  </>
  );
}

export default Managesubcategory;

