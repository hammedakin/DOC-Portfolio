import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from './Mockup1.png'
import img2 from './Pricist Mockup 2.png'
import img3 from './DOCLogo.png'
import axios from 'axios'


const HomeCaseStudy = () => {
  const [pageContent, setPageContent] = useState([])
  const fetchContent=()=>{
    axios.get("http://doc-portfolio.herokuapp.com/case-studies").then(response=>{
      console.log(response.data)
      setPageContent(response.data)
    }).catch(error=>{
      console.log(error.response)
    })
  }
  useEffect(()=>{
    fetchContent()
  },pageContent)
  const content = pageContent.map((item,i)=>{
    return(
      <div class="col-md-4">
              <div class="card card-image h-100" id="service">
                <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
                  <div class="view overlay zoom ">
                    <img src={item.featuredImages[0].url} class="img-fluid" alt="zoom" />

                    <div class="mask flex-center waves-effect waves-light card-bg">
                      <div class="">
                        <h6 class="card-title pt-2">
                          <strong>{item.title}</strong>
                        </h6>

                        <Link to={`/case-study/${item.id}`} class="btn btn-light mt-2">
                          VIEW CASE STUDY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  })
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
 
                        <Link to="/case-study1" class="btn btn-light mt-2">
                          VIEW CASE STUDY
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {content}
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

                        <a href="#" class="btn btn-light mt-2">
                          COMING SOON
                        </a>
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
