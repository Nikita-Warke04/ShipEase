import './Manageshipment.css';
import { useEffect , useState } from 'react';
import { _userapiurl ,_categoryapiurl, _shipmentapiurl} from '../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Manageshipment() {
  
 const navigate = useNavigate();
 const [sDetails, setShipmentDetails] = useState([]);

 useEffect(()=>{
  axios.get(_shipmentapiurl+"fetch").then((response)=>{
      setShipmentDetails(response.data);
  }).catch((error)=>{
    console.log(error);
  })
 })

 const changeStatus=(_id)=>{
   let deleteDetails = {"data":{"_id":_id}};
   axios.delete(_shipmentapiurl+"delete",deleteDetails).then((response)=>{
      navigate("/manageshipment");
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
            Manage Shipment Details
            </h2><br/><br/>
          </div>

<center>              
<table border="2px" width="1100px">

<tr style={{"textAlign":"center"}}>
<th>Shipment ID</th>
<th>Title</th>
<th>Category Name</th>
<th>Subcategory Name</th>
<th>Description</th>
<th>Base Cost</th>
<th>Shipment Icon</th>
<th>Action</th> 
</tr>
{
  sDetails.map((row)=>(
    <tr style={{"textAlign":"center"}}>
      <td>{row._id}</td>
      <td>{row.title}</td>
       <td>{row.catnm}</td>
       <td>{row.subcatnm}</td>
       <td>{row.description}</td>
       <td>{row.basecost}</td>
      <td><img src={`../assets/uploads/shipmenticons/${row.shipmenticonnm}`} height="80" width="150"/></td>
      <td><button type="button" class="btn btn-danger" onClick={()=>{ changeStatus(row._id,'delete') }}>Delete</button></td>
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

export default Manageshipment;

