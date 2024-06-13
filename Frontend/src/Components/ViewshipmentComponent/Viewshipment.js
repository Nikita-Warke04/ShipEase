import './Viewshipment.css';
import { useEffect , useState } from 'react';
import { _userapiurl , _categoryapiurl } from '../../Api.url';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Viewshipment() {
 
   const [cList , setCategoryDetails]= useState([]);
   
  useEffect(()=>{
    axios.get(_categoryapiurl+"fetch").then((response)=>{
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
        <div class="detail-box1">
          <div class="heading_container">
            <h2>
              View Category<span> &gt;&gt; </span>
            </h2><br/>
          </div>
          <center>
          <div id="category_main">
             {
              cList.map((row)=>(
                <Link to={`/viewsubcategory/${row.catnm}`} style={{"color":"black"}} id="bhead" >
                <div class="category_part">
                <img src={`assets/uploads/caticons/${row.caticonnm}`} height="100" width="170"/>
                <br/>
                <b >{row.catnm}</b>
                </div>
                </Link>    
              ))
             }
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

export default Viewshipment;
