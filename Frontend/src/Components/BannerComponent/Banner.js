import './Banner.css';


function Banner() {
  return (<>
    {/* slider section */}
 <section class="slider_section ">
      <div class="slider_bg_box">
        <img src="assets/images/slider2.jpg" alt="" />
      </div>
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                    Embark on a Journey <br/> of Reliable Shipping.
                    </h1>
                    <div class="btn-box">
                      <a  class="btn1">
                        Contact Us
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br/>
                      Transport Service
                    </h1>
                    
                    <div class="btn-box">
                      <a  class="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                    Where Efficiency Meets Expedition.
                    </h1>
                   
                    <div class="btn-box">
                      <a  class="btn1">
                       Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
    {/* end slider section */}
  
  </>);
}

export default Banner;
