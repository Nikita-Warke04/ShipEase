import './Managecategory.css';
import { useEffect , useState } from 'react';
import { _userapiurl ,_categoryapiurl} from '../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Managecategory() {
  
  const navigate = useNavigate();
  const [ cDetails , setCategoryDetails] = useState([]);
  
  useEffect(()=>{
   axios.get(_categoryapiurl+"fetch").then((response)=>{
    setCategoryDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   })
  })


  const changeStatus=(_id)=>{    
      let deleteDetails={"data":{"_id":_id}};      
      axios.delete(_categoryapiurl+"delete",deleteDetails).then((response)=>{
        navigate("/managecategory")  
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
            View and Manage Category Details
            </h2><br/><br/>
          </div>

<center>              
<table border="2px" width="1100px">

<tr style={{"textAlign":"center"}}>
<th  >CategoryID</th>
<th>CategoryName</th>
<th>CategoryIcon</th>
<th>Action</th> 
</tr>
{
  cDetails.map((row)=>(
    <tr style={{"textAlign":"center"}}>
      <td>{row._id}</td>
      <td>{row.catnm}</td>
      <td><img src={`../assets/uploads/caticons/${row.caticonnm}`} height="80" width="150"/></td>
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

export default Managecategory;

