import './Footer.css';
import { useEffect , useState } from 'react';


function Footer() {

const [FooterContent , setFooterContent] = useState();

useEffect(()=>{
  if(localStorage.getItem("token")!=undefined)
  {
     setFooterContent(<>
     
    
      {/* footer section */}
      <section class="footer_section" style={{"backgroundColor":"#04233b"}}>
        <div class="container" >
          <p  style={{"color":"white"}}>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a >Shipping Store</a>
          </p>
        </div>
      </section>
      {/* footer section */}
      </>)
  }
  else
  {
    setFooterContent(<>{/* info section */}

    <section class="info_section layout_padding2">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 info_col">
            <div class="info_contact">
              <h4>
                Address
              </h4>
              <div class="contact_link_box">
                <a href="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Location
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call : XXX XXX XXXX
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    demo@example.com
                  </span>
                </a>
              </div>
            </div>
            <div class="info_social">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col">
            <div class="info_detail">
              <h4>
                Info
              </h4>
              <p>
                necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 mx-auto info_col">
            <div class="info_link_box">
              <h4>
                Links
              </h4>
              <div class="info_links">
                <a class="active" href="">
                  <img src="images/nav-bullet.png" alt=""/>
                  Home
                </a>
                <a class="" href="">
                  <img src="images/nav-bullet.png" alt=""/>
                  About
                </a>
                <a class="" href="">
                  <img src="images/nav-bullet.png" alt=""/>
                  Services
                </a>
                <a class="" href="">
                  <img src="images/nav-bullet.png" alt=""/>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col ">
            <h4>
              Subscribe
            </h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  
    {/* end info section */}
  
    {/* footer section */}
    <section class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Shipping Store</a>
        </p>
      </div>
    </section>
    {/* footer section */}
    </>)
  }
});
return (<>
{FooterContent}
</>);
}

export default Footer;
