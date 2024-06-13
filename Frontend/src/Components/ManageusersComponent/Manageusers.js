import './Manageusers.css';
import { useEffect , useState } from 'react';
import { _userapiurl } from '../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from "react-csv";


function Manageusers() {
  
  const navigate = useNavigate();
  const [ userDetails , setUserDetails] = useState([]);
  
  useEffect(()=>{
   axios.get(_userapiurl+"fetch?role=user").then((response)=>{
    setUserDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   })
  })


  const changeStatus=(_id,status)=>{
    if(status=="verify")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};      
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        navigate("/manageusers")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
    else if(status=="block")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};      
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        navigate("/manageusers")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
    else
    {
      let deleteDetails={"data":{"_id":_id}};      
      axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
        navigate("/manageusers")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
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
            View and Manage users Details
            </h2><br/>
          </div>

          {/* Export Button Start */}
          <CSVLink className="downloadbtn" filename="my-file.csv" data={userDetails}>
          Export to CSV
          </CSVLink>
          <br/> <br/>
         {/* Export Button End */}

<center>              
<table class="table table-bordered " >

<tr>
<th>RegID</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th> 
<th>Status</th>
<th>Action</th> 
</tr>

{
  userDetails.map((row)=>(
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td>
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>
      <td>
      { row.status==1 && <font color="green"><b>Verified</b></font> }
      { row.status==0 && <font color="orange"><b>Not Verified</b></font> }  
      </td>
      <td>
      { row.status==1 && <font id="changestatus" onClick={()=>{ changeStatus(row._id,'block') }} color="#023e8a"><b>Change Status</b></font> }
      { row.status==0 && <font id="changestatus" onClick={()=>{ changeStatus(row._id,'verify') }} color="#023e8a"><b>Change Status</b></font> }
      <br/>
      <font id="changestatus" onClick={()=>{ changeStatus(row._id,'delete') }} color="red"><b>Delete</b></font>
      </td>
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

export default Manageusers;

