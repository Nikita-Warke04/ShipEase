import './App.css';
import React from 'react';
import {Route , Routes} from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent/About';
import Contact from './Components/ContactComponent/Contact';
import Service from './Components/ServiceComponent/Service';
import Register from './Components/RegisterComponent/Register';
import Login from './Components/LoginComponent/Login';
import Logout from './Components/LogoutComponent/Logout';
import Footer from './Components/FooterComponent/Footer';
import Adminhome from './Components/AdminhomeComponent/Adminhome';
import CPAdmin from './Components/CPAdminComponent/CPAdmin';
import EPAdmin from './Components/EPAdminComponent/EPAdmin';
import Manageusers from './Components/ManageusersComponent/Manageusers';
import Addcategory from './Components/AddcategoryComponent/Addcategory';
import Addsubcategory from './Components/AddsubcategoryComponent/Addsubcategory';
import Userhome from './Components/UserhomeComponent/Userhome';
import Viewshipment from './Components/ViewshipmentComponent/Viewshipment';
import Viewsubcategory from './Components/ViewsubcategoryComponent/Viewsubcategory';
import CPUser from './Components/CPUserComponent/CPUser';
import EPUser from './Components/EPUserComponent/EPUser';
import Addshipment from './Components/AddshipmentComponent/Addshipment';
import VSUser from './Components/VSUserComponent/VSUser';
import ViewBid from './Components/ViewBidComponent/ViewBid';
import Managecategory from './Components/ManagecategoryComponent/Managecategory';
import Managesubcategory from './Components/ManagesubcategoryComponent/Managesubcategory';
import Manageshipment from './Components/ManageshipmentComponent/Manageshipment';
import Viewbidlist from './Components/ViewbidlistComponent/Viewbidlist';

function App() {
  return (
    <>

  {/*hero area starts*/}
  <div class="hero_area">

<Header/>

</div>
{/*hero area ends*/}
<Routes>
        <Route path='' element={<Home/> }></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout/>}> </Route>
        <Route path='/admin' element={<Adminhome/>}></Route>
        <Route path='/cpadmin' element={<CPAdmin/>}></Route>
        <Route path='/epadmin' element={<EPAdmin/>}></Route>
        <Route path='/manageusers' element={<Manageusers/>}></Route>
        <Route path='/addcategory' element={<Addcategory/>}></Route>
        <Route path='/managecategory' element={<Managecategory/>}></Route>
        <Route path='/addsubcategory' element={<Addsubcategory/>}></Route>
        <Route path='/managesubcategory' element={<Managesubcategory/>}></Route>
        <Route path='/addshipment' element={<Addshipment/>}></Route>
        <Route path='/manageshipment' element={<Manageshipment/>}></Route>
        <Route path='/user' element={<Userhome/>}></Route>
        <Route path='/viewshipment' element={<Viewshipment/>}></Route>
        <Route path='/cpuser' element={<CPUser/>}></Route>
        <Route path='/epuser' element={<EPUser/>}></Route>
        <Route path='/viewsubcategory/:catnm' element={<Viewsubcategory />}></Route>
        <Route path='/vsuser/:subcatnm' element={<VSUser/>}></Route>
        <Route path='/viewbid/:_id' element={<ViewBid/>}></Route>
        <Route path='/viewbidlist' element={<Viewbidlist/>}></Route>

        
</Routes>
  
 
<Footer/>  
</>
  );
}

export default App;
