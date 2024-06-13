import Banner from '../BannerComponent/Banner';
import './Home.css';


function Home() {

 
  return (<>
<Banner/>
    
     {/* home section */}

   <section class="about_section layout_padding-bottom">
    <div class="container  ">
      <div class="row">
        <div class="col-md-12">
          <div class="detail-box">
            <div class="heading_container">
              <br/>
              <h2>Welcome to Shipping Store</h2><br/>
              <h3>Home Page</h3>
            </div>
            <p style={{"textAlign": "justify"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora corrupti atque perferendis et! Maxime distinctio soluta in, magnam, repudiandae at iure tempore nihil deserunt ab, beatae commodi minima quo temporibus laborum voluptate fugit non cumque necessitatibus nostrum. Reiciendis voluptatem veniam rem molestiae praesentium consectetur repudiandae numquam ea modi perspiciatis enim pariatur fuga temporibus dolor, atque natus at a asperiores eum sit harum tempora doloremque autem. Minus dolorum, pariatur iste officia facere, consectetur at rerum voluptatibus natus, molestias eum nemo modi porro. Vel mollitia iure nam temporibus, veniam voluptatibus commodi animi ab, odio repellendus error voluptate molestias perspiciatis eos hic alias eligendi iste! Delectus est aperiam velit repellat aliquam voluptate iusto ad, odio illum deleniti error, id ipsam tempora veritatis voluptatem recusandae omnis consequatur unde accusamus ducimus dolorum quisquam. Hic ratione inventore saepe corrupti fuga nobis aliquam aut atque nostrum odit iusto deleniti voluptatum reiciendis asperiores tenetur amet ex voluptatibus quisquam mollitia quo fugit dolores, sapiente quasi? Vel quos perspiciatis corrupti provident, autem non eaque porro ex rerum quis saepe animi sit fugit rem repudiandae repellendus magnam, ipsa ad itaque nulla. Itaque minus animi quas consequatur hic nam, corrupti delectus et! Autem atque ad repellendus, non quia placeat quaerat nulla.

            </p>
            <a >
              Read More
            </a>
          </div>
        </div>
        
        </div>

      </div>
    
  </section>
{/* end home section */}


 <div class="truck_home">
  <div class="truck">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-12 jkhgkj" width="100%">
                  <div class="truck_img1">
                     <img src="assets/images/delivery.jpg" alt="#" height="150px"/>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
      </div>
  </>);
}

export default Home;
