import React from "react";
import { Link } from "react-router-dom";
import img1 from "./DOCLogo.png";

const ddd = () => {
  return (
    <>
      <section class="Homecasestudy">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card card-image zoom h-100" id="service1">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="hovers">
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


            <div class="col-md-4">
              <div class="card card-image zoom h-100" id="service2">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="hovers">
                    <h6 class="card-title pt-2">
                      <strong>PRICIST; A PRICE COMPARISON TOOL</strong>
                    </h6>

                    <Link to="/case-study1" class="btn btn-light mt-2">
                      VIEW CASE STUDY
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card card-image zoom h-100" id="service3">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="hovers">
                    <h6 class="card-title pt-2">
                      <strong>REAL ESTATE PLANNER</strong>
                    </h6>

                    <Link href="#!" class="btn btn-light mt-2">
                      COMING SOON
                    </Link>
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

export default ddd;
