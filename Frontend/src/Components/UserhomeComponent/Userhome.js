import './Userhome.css';
import React from 'react';



function Userhome() {
 

  return (<>
     {/* about section */}

<section class="about_section layout_padding">
  <div class="container  ">
    <div class="row">
      <div class="col-md-12">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
              User<span>Home</span>
            </h2>
          </div>
          <p style={{"textAlign":"justify"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a eros dapibus velit finibus ullamcorper non aliquet nisl. Quisque vel porta augue, ac pharetra urna. Sed nisi augue, hendrerit eu tincidunt et, posuere non turpis. Quisque porta vel metus vitae consequat. Proin elit erat, maximus sed est in, efficitur accumsan turpis. Nam auctor tortor velit, eu egestas quam volutpat id. Nunc viverra tellus eget elit tincidunt, non lobortis ligula semper. Curabitur scelerisque auctor justo, suscipit pretium enim. Ut sem velit, gravida vitae neque et, volutpat tempus augue. Donec rutrum magna et sem imperdiet accumsan.
          <br/><br/>
          Integer in varius mauris. Nunc eget nisi sit amet eros ultrices convallis. Vivamus nunc lectus, molestie eu varius vitae, lobortis ut massa. Aenean tellus turpis, imperdiet lacinia semper eget, blandit eget nisi. In malesuada, enim eu viverra porta, quam dui tincidunt turpis, sit amet consequat elit magna in augue. Nulla nec nibh a eros convallis sodales. Integer interdum semper pharetra. Aliquam a nulla vehicula, fermentum justo imperdiet, bibendum augue. Quisque efficitur felis ex, non commodo ligula mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nisi nulla, consectetur at sem vitae, volutpat tincidunt eros. Quisque eget porta lorem. Fusce nec elit vitae lectus aliquam ultrices. Mauris faucibus congue dapibus. Nunc nec bibendum erat.

          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
     
    </div>
  </div>
</section>

 {/* end about section */}


  </>
  );
}

export default Userhome;
