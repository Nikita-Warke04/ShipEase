import './ViewBid.css';
import { useEffect , useState } from 'react';
import { _userapiurl , _categoryapiurl, _shipmentapiurl, _bidapiurl } from '../../Api.url';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';



function ViewBid() {
 
  const params = useParams();
  const [ output , setOutput ] = useState(true);
  const [ status , setStatus ] = useState(true);
  const [ sList , setShipmentDetails ] = useState([]);
  const [ ncost , setNewCost ] = useState();
  const [ basecost , setBaseCost ] = useState();
   
  useEffect(()=>{
    
    axios.get(_shipmentapiurl+"fetch?_id="+params._id).then((response)=>{
     setShipmentDetails(response.data[0]);
     if(Date.now()-response.data[0].info>172800000)
      setStatus(false);    
    }).catch((err)=>{
     console.log(err);
    });
    
    axios.get(_bidapiurl+"fetch?pid="+params._id).then((response)=>{
      var min_basecost=response.data[0].bidcost;
      for(let row of response.data) 
      {
       if(min_basecost>row.bidcost)
        min_basecost=row.bidcost; 
      }
      setBaseCost(min_basecost);
     }).catch((err)=>{
      setBaseCost(sList.basecost);
     });

  },[]);


   const handleSubmit=(e)=>{
    e.preventDefault();
    var bidDetails={"pid":sList._id,"uid":localStorage.getItem("email"),"bidcost":parseInt(ncost)};
   axios.post(_bidapiurl+"save",bidDetails).then((response)=>{
      setOutput("Bid implemented successfully....");
      setNewCost("");
    }).catch((error)=>{
      setOutput("Unable to bid , please try again....");
      setNewCost("");
    });
  };
  return (<>
     {/* about section */}

<section class="about_section layout_padding">
  <div class="container  ">
    <div class="row">
      <div class="col-md-12">
        <div class="detail-box1">

          <div class="heading_container">
            
            {status==false &&
            <>
            <h2>Bid Completed</h2>
            <Link to={`/viewbidlist`}><button class="btn btn-danger" style={{"backgroundColor":"#ff4800"}}>View Bidlist</button></Link>


            </>}
              {status==true && 
              <>
              <font color="blue">{output}</font>
              <h1 id="b2">Bid to Get Shipment </h1><br/>
              <h3 id="b1">Shipment Id : {sList._id}</h3>
              <br/>
              <h3 id="b1">Estimated cost for Shipment : &#8377;{sList.basecost}</h3>
              <br/>
              <h3 id="b1">Current cost for shipment : &#8377;{basecost }</h3>
              <br/>
              <form>
              <h3 id="b1">Your cost for shipment : <input type='text' value={ncost} onChange={ e => setNewCost(e.target.value) }  /></h3>
              <br/>
              <button onClick={handleSubmit} >Save Quates</button>
              </form>
              </>}
             
            <br/>
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

export default ViewBid;
