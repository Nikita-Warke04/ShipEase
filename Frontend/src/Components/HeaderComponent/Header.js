import './Header.css';
import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
import Auth from '../AuthComponent/Auth';


function Header() {

  const [HeaderContent , setHeaderContent] = useState();
  useEffect(()=>{
   if(localStorage.getItem("role")=="admin")
   {
    setHeaderContent(<>
 
      {/* header section strats */}
      <header class="header_section">
     <div class="header_top">
       <div class="container-fluid ">
         <div class="contact_nav">
           
             <span></span>
           
           <a href="">
             <span>
               Welcome Admin: {localStorage.getItem("email")}
             </span>
           </a>
             <span></span>
         </div>
       </div>
     </div>
     <div class="header_bottom">
       <div class="container-fluid">
         <nav class="navbar navbar-expand-lg custom_nav-container ">
         <a class="navbar-brand">
           <div class="d-flex align-items-center">
           <img src="assets/images/shipiconjpg.jpg" height="40px" />
           <span><h1 class="ml-1 mb-0">ShipEase</h1></span>
           </div>
         </a>

           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class=""> </span>
           </button>

           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav  ">
               <li class="nav-item active">
               <Link to="/admin" > <a class="nav-link">Admin Home<span class="sr-only">(current)</span></a></Link>
               </li>
               <li class="nav-item">
               <Link to="/addcategory" ><a class="nav-link" >Add Category</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/addsubcategory" ><a class="nav-link" >Add SubCategory</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/addshipment" ><a class="nav-link" >Add Shipment</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/manageusers" ><a class="nav-link" >Manage Users</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/cpadmin" ><a class="nav-link" >Change password </a></Link>
               </li>
               <li class="nav-item">
               <Link to="/epadmin"><a class="nav-link" >Edit Profile</a></Link>
               </li>
              
               <li class="nav-item">
               <Link to="/logout" ><a class="nav-link" > <i class="fa fa-user" aria-hidden="true"></i> Logout</a></Link>
               </li>
               
             </ul>
           </div>
         </nav>
       </div>
     </div>
   </header>
   {/* end header section */}


 </>);
   }
   else if(localStorage.getItem("role")=="user")
   {
    setHeaderContent(<>
 
      {/* header section starts */}
      <header class="header_section">
     <div class="header_top">
       <div class="container-fluid ">
         <div class="contact_nav">
           <a href="">
             <span></span>
           </a>
           <a href="">
             <span>
               Welcome User: {localStorage.getItem("email")}
             </span>
           </a>
           <a href="">
             <span></span>
           </a>
         </div>
       </div>
     </div>
     <div class="header_bottom">
       <div class="container-fluid">
         <nav class="navbar navbar-expand-lg custom_nav-container ">
           <a class="navbar-brand">
           <div class="d-flex align-items-center">
           <img src="assets/images/shipiconjpg.jpg" height="40px" />
           <span><h1 class="ml-1 mb-0">ShipEase</h1></span>
           </div>
         </a>


           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class=""> </span>
           </button>

           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav  ">
               <li class="nav-item active">
               <Link to="/user" > <a class="nav-link">User Home<span class="sr-only">(current)</span></a></Link>
               </li>
               <li class="nav-item">
               <Link to="/viewshipment" ><a class="nav-link" >View Shipment</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/cpuser" ><a class="nav-link" >Change Password</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/epuser"><a class="nav-link" >Edit Profile</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/logout" ><a class="nav-link" > <i class="fa fa-user" aria-hidden="true"></i> Logout</a></Link>
               </li>
               
             </ul>
           </div>
         </nav>
       </div>
     </div>
   </header>
   {/* end header section */}


 </>);
   }
   else
   {
    setHeaderContent(<>
 
      {/* header section strats */}
      <header class="header_section">
     <div class="header_top">
       <div class="container-fluid ">
         <div class="contact_nav">
           <a href="">
             <i class="fa fa-phone" aria-hidden="true"></i>
             <span>
               Call : XXX XXX XXXX
             </span>
           </a>
           <a href="">
             <i class="fa fa-envelope" aria-hidden="true"></i>
             <span>
               Email : demo@example.com
             </span>
           </a>
           <a href="">
             <i class="fa fa-map-marker" aria-hidden="true"></i>
             <span>
               Location
             </span>
           </a>
         </div>
       </div>
     </div>
     <div class="header_bottom">
       <div class="container-fluid">
         <nav class="navbar navbar-expand-lg custom_nav-container ">
         <a class="navbar-brand">
           <div class="d-flex align-items-center">
           <img src="assets/images/shipiconjpg.jpg" height="40px" />
           <span><h1 class="ml-1 mb-0">ShipEase</h1></span>
           </div>
         </a>

           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class=""> </span>
           </button>

           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav  ">
               <li class="nav-item active">
               <Link to="/" > <a class="nav-link">Home<span class="sr-only">(current)</span></a></Link>
               </li>
               <li class="nav-item">
               <Link to="/About" ><a class="nav-link" >About</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/Service"><a class="nav-link" >Service</a></Link>
               </li>
               <li class="nav-item">
               <Link to="/Contact" ><a class="nav-link" >Contact </a></Link>
               </li>
               <li class="nav-item">
               <Link to="/Register"><a class="nav-link" >Register </a></Link>
               </li>
               <li class="nav-item">
               <Link to="/Login" ><a class="nav-link" > <i class="fa fa-user" aria-hidden="true"></i> Login</a></Link>
               </li>
               
             </ul>
           </div>
         </nav>
       </div>
     </div>
   </header>
   {/* end header section */}


 </>);
   }
  });
  return (
    <>
    <Auth/>
    {HeaderContent}
    </>
  );
}

export default Header;
