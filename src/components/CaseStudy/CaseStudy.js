import React, { useState, useEffect } from 'react';
import axios from 'axios'
import marked from 'marked'
const CaseStudy = (props) => {
    const [content , setContent]=useState("")
    const [title, setTitle] = useState("")
    const fetchContent=()=>{
        axios.get(`http://doc-portfolio.herokuapp.com/case-studies/${props.match.params.id}`).then(response=>{
          console.log(response.data)
          
          setContent(marked(response.data.content))
          setTitle(response.data.title)
        }).catch(error=>{
          console.log(error.response)
        })
      }
      useEffect(()=>{
        fetchContent()
      },0)
    console.log(props)
    return ( 
        <section class="casestudy" id="casestudy">
        <div class="container text-justify">
          <div class="title mt-5 text-center" >

            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{__html:content}}></div>
          </div>
            
          

          <div class="card mt-5">
            <a
              type="button"
              class="btn btn-primary mx-auto shadow pl-4 pr-4 " href="#casestudy"
            >
              BACK TO TOP
            </a>
          </div>
        </div>
      </section>
     );
}
 
export default CaseStudy;