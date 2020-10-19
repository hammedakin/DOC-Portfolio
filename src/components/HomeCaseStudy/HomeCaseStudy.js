import React from "react";
import { Link } from "react-router-dom";
import img1 from './Mockup1.png'
import img2 from './Pricist Mockup 2.png'
import img3 from './DOCLogo.png'


const HomeCaseStudy = () => {
  return (
    <>
      <section class="Homecasestudy">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card card-image h-100" id="service">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="view overlay zoom ">
                    <img src={img1} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2">
                          <strong>IMPROVING DAILY PRODUCTIVITY</strong>
                        </h6>

                        <Link to="/case-study2" class="btn btn-light mt-2">
                          VIEW CASE STUDY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card card-image h-100" id="service">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="view overlay zoom ">
                    <img src={img2} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2">
                          <strong>PRICIST; A PRICE COMPARISON TOOL</strong>
                        </h6>

                        <Link to="/case-study2" class="btn btn-light mt-2">
                          VIEW CASE STUDY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card card-image " id="service">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="view overlay zoom " >
                    <img src={img3} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2">
                          <strong>REAL ESTATE PLANNER</strong>
                        </h6>

                        <Link to="/case-study2" class="btn btn-light mt-2">
                          COMING SOON
                        </Link>
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

export default HomeCaseStudy;
