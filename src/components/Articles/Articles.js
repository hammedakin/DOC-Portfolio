import React from "react";
import {Link} from 'react-router-dom'

const Articles = () => {
  return (
    <>
      <section class="articles">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="card card-image zoom h-100" id="article1">
                <div class=" text-center d-flex align-items-center py-5 mx-auto">
                  <div class="hovers">
                    <h6 class="card-title pt-2">
                      <strong>BARRIERS TO IDEATION; A SUMMARY</strong>
                    </h6>

                    <a href="https://www.linkedin.com/pulse/barriers-ideation-summary-david-omogunsoye/?trackingId=HP3s1TCE%2B6XtLZ6SivJvuw%3D%3D" class="btn btn-light mt-2" target="_blank">
                      READ ARTICLE
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card card-image zoom h-100" id="article2">
                <div class=" text-center d-flex align-items-center py-5 mx-auto">
                  <div class="hovers">
                    <h6 class="card-title pt-2">
                      <strong>DESIGNING FOR PEAK EXPERIENCE</strong>
                    </h6>

                    <a href="https://www.linkedin.com/pulse/designing-peak-experience-david-omogunsoye/" class="btn btn-light mt-2" target="_blank">
                      READ ARTICLE
                    </a>
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

export default Articles;
