import './Viewsubcategory.css';
import { useEffect , useState } from 'react';
import { _userapiurl , _categoryapiurl , _subcategoryapiurl } from '../../Api.url';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';



function Viewsubcategory() {
 
   const params = useParams();
   const [scList , setSubCategoryDetails]= useState([]);
   
  useEffect(()=>{
    axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
     setSubCategoryDetails(response.data);
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
              View SubCategory<span> &gt;&gt; {params.catnm}</span>
            </h2><br/>
          </div>
          <center>
          <div id="category_main">
             {
              scList.map((row)=>(
                <Link to={`/vsuser/${row.subcatnm}`} style={{"color":"black"}} id="bhead" >
                <div class="category_part">
                <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150"/>
                <br/>
                <b>{row.subcatnm}</b>
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

export default Viewsubcategory;
