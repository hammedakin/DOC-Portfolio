import React from "react";
import img1 from './Choice cook logo@2x.png'
import img2 from './Sahara farms logo@2x.png'
import img3 from './Wristworthy Logo@2x.png'


const Partners = () => {
  return (
    <>


<section class="partners">
        <div class="container">
          <div class="title text-center mt-5 mb-2">
            <p> A FEW BRAND I WORK WITH</p>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="card card-image h-100" id="service">
                <div class=" text-center d-flex align-items-center  mx-auto">
                  <div class="view overlay zoom ">
                    <img src={img1} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2 text-justify px-3">
                          <strong>Choice cook is a business focused on providing home-cooked meals to busy professionals in the federal capital territory of Nigeria. I worked on developing the brand identity for the business and also design targetted campaign flyers and social media posts.</strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card card-image h-100" id="service">
                <div class=" text-center d-flex align-items-center  mx-auto">
                  <div class="view overlay zoom ">
                    <img src={img3} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2 text-justify px-3">
                          <strong>Wristworthy NG is a brand focused on sales of high-quality, affordable watches. I work with this brand to create product announcement images and videos for customer engagement. I also developed the brand identity and designed packaging materials. </strong>
                        </h6>
 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card card-image h-100" id="service">
                <div class=" text-center d-flex align-items-center  mx-auto">
                  <div class="view overlay zoom " >
                    <img src={img2} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2 text-justify px-3 ">
                          <strong>Sa Hara Farms is an agribusiness specialized in the processing and packaging of farm products, majorly maize and cassava. I worked with this brand to create their brand identity.</strong>
                        </h6>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>





      
    </>
  );
};

export default Partners;
