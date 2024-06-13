import './Contact.css';
import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';


function Contact() {
  
  return (<>
 {/* about section */}

<section class="about_section layout_padding">
  <div class="container  ">
    <div class="row">
      <div class="col-md-6">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
              Contact <span>Us</span>
            </h2>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
      <div class="col-md-6 ">
        <div class="img-box">
          <img src="assets/images/a-cargo.jpeg" alt=""/>
        </div>
      </div>

    </div>
  </div>
</section>

 {/* end about section */}

  </>);
}

export default Contact;
