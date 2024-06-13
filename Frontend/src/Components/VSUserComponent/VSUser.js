import './VSUser.css';
import { useEffect , useState } from 'react';
import { _userapiurl , _categoryapiurl , _subcategoryapiurl ,_shipmentapiurl} from '../../Api.url';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';



function VSUser() {
 
   const params = useParams();
   const [sList , setShipmentDetails]= useState([]);
   
   useEffect(()=>{
    axios.get(_shipmentapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{
     setShipmentDetails(response.data);    
    }).catch((err)=>{
     console.log(err);
    });   
  });
  return (<>
     {/* about section */}

<section class="about_section layout_padding">
  <div class="container  ">
    <div class="row">
      <div class="col-md-12">
        <div class="detail-box1">
          <div class="heading_container">
            <h2>
              View Shipment<span> &gt;&gt; {params.subcatnm}</span>
            </h2><br/>
          </div>
          <center>
              {
                sList.map((row)=>(
              <>    
              <table border="2px" height="150px" width="600px">
                <tr>
                  <td width="35%" rowspan="3">
                    <center>
                    <img src={`../assets/uploads/shipmenticons/${row.shipmenticonnm}`} height="140" width="170"/>
                    </center>
                  </td>
                  <td> <b> Title : {row.title}</b></td>
                </tr>
                <tr>
                  <td><b> Description : {row.description}</b></td>
                </tr>  
                <tr>
                  <td>
                    <b> Price : {row.basecost}</b>
                    <br/> <br/>
                    <Link to={`/viewbid/${row._id}`} style={{"color":"#ff4800"}} id="bhead1" ><b>View Bid</b></Link>
                   </td>
                   </tr>
                   </table>
              <br/><br/>
              </>
              ))
            }      


          <div id="category_main">
             {/*
              scList.map((row)=>(
                <Link to={`/vsuser/${row.subcatnm}`} >
                <div class="category_part">
                <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150"/>
                <br/>
                <b>{row.subcatnm}</b>
                </div>
                </Link>  
              ))
            */}
          </div>
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

export default VSUser;
