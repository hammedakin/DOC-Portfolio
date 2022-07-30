import React, { useEffect, useState } from "react";
import axios from 'axios'
import img1 from './111.png'
import img2 from './222.png'

const HomeCaseStudy = () => {
  // const [articles, setArticles] = useState([])
  // const fetchArticles = () => {
  //   axios.get('http://doc-portfolio.herokuapp.com/articles').then(response => {
  //     console.log(response)
  //     setArticles(response.data)
  //   }).catch(error => {
  //     console.log(error.response)
  //   })
  // }
  // useEffect(() => {
  //   fetchArticles()
  // }, articles)

  const articles = [
    {
      image: `${img1}`,
      title: 'BARRIERS TO IDEATION; A SUMMARY',
      link: '#',
    },
    {
      image: `${img2}`,
      title: 'DESIGNING FOR PEAK EXPERIENCE',
      link: '#',
    },
  ]

  const article = articles.map(item => {
    return (
      <div class="col-md-6 mt-5">
        <div class="card card-image h-100 w-100" id="article">
          <div class=" text-center d-flex align-items-center py-5 px-4 mx-auto">
            <div class="view overlay zoom ">
              <img src={`${item.image}`} class="img-fluid" alt="zoom" />

              <div class="mask flex-center waves-effect waves-light card-bg">
                <div class="">
                  <h6 class="card-title pt-2">
                    <strong>{item.title}</strong>
                  </h6>

                  <a href={item.link} class="btn btn-light mt-2" target="_blank">
                    READ ARTICLE
                  </a>
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
      <section class="article">
        <div class="container">
          <div class="row">
            {article}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCaseStudy;
