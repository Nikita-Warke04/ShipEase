import './Viewbidlist.css';
import { useEffect , useState } from 'react';
import { _userapiurl ,_categoryapiurl , _shipmentapiurl ,_bidapiurl} from '../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams , Link } from 'react-router-dom';



function Viewbidlist() {
  
  const navigate = useNavigate();
  const [ cDetails , setCategoryDetails] = useState([]);
  
  useEffect(()=>{
   axios.get(_bidapiurl+"fetch").then((response)=>{
    setCategoryDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   })
  })


 

  return (<>
     {/* about section */}

<section class="about_section layout_padding">
  <div class="container  ">
    <div class="row">
      <div class="col-md-12">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
            View All BID
            </h2><br/><br/>
          </div>

<center>              
<table border="2px" width="1100px">

<tr style={{"textAlign":"center"}}>
<th>ID</th>
<th>Product Id</th>
<th>User Id</th>
<th>Bid Cost</th> 
</tr>
{
  cDetails.map((row)=>(
    <tr style={{"textAlign":"center"}}>
      <td>{row._id}</td>
      <td>{row.pid}</td>
      <td>{row.uid}</td>
      <td>{row.bidcost}</td>
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

export default Viewbidlist;

