import React from "react";
import img from "./image.png";
import {Link} from "react-router-dom"

const About = () => {
  return (
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="text-justify mt-5 justify-content-center">
            <img
                  
                  style={{  margin: "3rem" }}
                  width="250"
                  alt="DOCLogo"
                  class="rounded mx-auto d-block"
                  src={img}
                />
              <p>
                {" "}
                
                I joined the Interaction Design Foundation in December 2019 and
                since then I have completed numerous courses including Design
                thinking: A beginner’s guide. In this course, I learned and
                practiced how to; <br/>
                - Apply an iterative, user-focused design
                process to generate innovative ideas that solve complex,
                ill-defined problems.  <br/> 
                - Make use of practical design thinking
                methods such as interviews, co-creation sessions, and rapid
                prototyping, in every stage of the design process.  <br/>
                - Initiate a
                new working culture based on customer needs and wants, so all
                work is focused on creating holistic and sustainable customer
                value.  <br/>
                - Employ user research techniques to ensure products and
                solutions are truly relevant to their target audience.  <br/>
                I also
                took a course on Human-Computer interaction where I learned how
                to;  <br/>
                - Carry out a design process that focuses on people’s needs
                to ensure that designs are easy and pleasurable to use.  <br/>
                - Create
                and enhance user interface designs based on the principles of
                human cognition.  <br/>
                - Design engaging user experiences for desktop,
                mobile, and physical devices.  <br/>
                - Evaluate the user experience of
                design through user tests and expert evaluations.  <br/>
                <Link to="" class="here">Here</Link> is a link
                to my IDF profile page where you will find more information on
                my courses and certifications.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="text-justify mt-5">
              <p>
                I am a Freelance UX/UI Designer And Brand Strategist based in
                Lagos, Nigeria. I am currently focused on creating awesome user
                experiences by following user-centered design processes. I’m
                passionate about improving people’s lives through design and I
                constantly learn new ways of improving myself I am a self-taught
                designer and a certified member of the Interaction Design
                Foundation (IDF). I set up a group of upcoming UX/UI designers
                where we share UX tips, articles, etc. and work on freelance
                projects to sharpen our skills. I enjoy playing 2K, FIFA, and
                Call of duty for fun. BACKGROUND I graduated from the
                prestigious University of Ibadan in Nigeria with first-class
                honors in Agronomy in December 2016. I have a few years of
                experience as a business strategist, which gives me a great
                understanding of how to manage business goals and customer
                demands.
              </p>

              <div class="talk mt-2">
                <p>
                  Looking to collaborate? Hire me for a project? or you just
                  want to talk design? Please feel free to reach me through any
                  of the links below.
                </p>
              </div>
            </div>
          </div>
        </div>


            {/* <div class="text-justify mt-5 justify-content-center">
            <img
                  
                  style={{  margin: "3rem" }}
                  width="250"
                  height="350"
                  alt="DOCLogo"
                  class="rounded mx-auto d-block"
                  src={img}
                />

<p>
                I am a Freelance UX/UI Designer And Brand Strategist based in
                Lagos, Nigeria. I am currently focused on creating awesome user
                experiences by following user-centered design processes. I’m
                passionate about improving people’s lives through design and I
                constantly learn new ways of improving myself I am a self-taught
                designer and a certified member of the Interaction Design
                Foundation (IDF). I set up a group of upcoming UX/UI designers
                where we share UX tips, articles, etc. and work on freelance
                projects to sharpen our skills. I enjoy playing 2K, FIFA, and
                Call of duty for fun. BACKGROUND I graduated from the
                prestigious University of Ibadan in Nigeria with first-class
                honors in Agronomy in December 2016. I have a few years of
                experience as a business strategist, which gives me a great
                understanding of how to manage business goals and customer
                demands.
              </p>

               <p>
                {" "}
                
                I joined the Interaction Design Foundation in December 2019 and
                since then I have completed numerous courses including Design
                thinking: A beginner’s guide. In this course, I learned and
                practiced how to; <br/>
                - Apply an iterative, user-focused design
                process to generate innovative ideas that solve complex,
                ill-defined problems.  <br/> 
                - Make use of practical design thinking
                methods such as interviews, co-creation sessions, and rapid
                prototyping, in every stage of the design process.  <br/>
                - Initiate a
                new working culture based on customer needs and wants, so all
                work is focused on creating holistic and sustainable customer
                value.  <br/>
                - Employ user research techniques to ensure products and
                solutions are truly relevant to their target audience.  <br/>
                I also
                took a course on Human-Computer interaction where I learned how
                to;  <br/>
                - Carry out a design process that focuses on people’s needs
                to ensure that designs are easy and pleasurable to use.  <br/>
                - Create
                and enhance user interface designs based on the principles of
                human cognition.  <br/>
                - Design engaging user experiences for desktop,
                mobile, and physical devices.  <br/>
                - Evaluate the user experience of
                design through user tests and expert evaluations.  <br/>
                <Link to="" class="here">Here</Link> is a link
                to my IDF profile page where you will find more information on
                my courses and certifications.
              </p>

              <div class="here">
              <p>
                  Looking to collaborate? Hire me for a project? or you just
                  want to talk design? Please feel free to reach me through any
                  of the links below.
                </p>
            </div>
            </div> */}



         
            
           
        


      </div>
    </section>
  );
};

export default About;
