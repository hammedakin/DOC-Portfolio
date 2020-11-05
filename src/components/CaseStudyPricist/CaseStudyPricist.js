import React from "react";
import img1 from "./Work plan.PNG";
import img2 from "./User persona.PNG";
import img3 from "./flow.PNG";
import img4 from "./miropage.png";
import img5 from "./Pricist Mockup 2.png";
import img6 from "./Pricist Mockup 1.png";
import vid1 from "./pricist Prototype walkthrough.mp4";

const CaseStudyPricist = () => {
  return (
    <>
      <section class="casestudy" id="casestudy">
        <div class="container text-justify">
          <div class="title mt-5 text-center">
            <h4> Pricist; A Price Comparison Tool </h4>
          </div>

          <div>
            <p>
              The average online shopper in Nigeria wants value for their money.
              To achieve this, they need access to information from available
              sites to compare prices and make the most pocket-friendly
              decision. I put together a team of budding UX designers to come up
              with a product that solves this problem for users and, is unique
              to the Nigerian market. This was a concept project that helped me
              understand the process of planning and leading a design project.
            </p>
          </div>

          <div class="card-deck">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />

              <strong>
                {" "}
                <p class="text-center">
                  {" "}
                  Work Plan developed to ensure project structure.
                </p>{" "}
              </strong>
            </div>
          </div>

          <div>
            <p>
              We worked through this project with the user in mind at every
              stage. As a start, I prepared a work plan for the team to follow
              to ensure our work was structured and so that each member of the
              team knew what was expected of them. I worked with each team to
              ensure a timeline was set for deliverables. The initial phase of
              the project focused on understanding the user and what their needs
              and expectations were, as regards the product. After conducting a
              few on-the-spot interviews, we were able to synthesize a persona
              of our ideal user. We also came up with a journey map for the user
              as they would interact with the product.
            </p>
          </div>

          <div>
            <div class="card-deck">
              <div class="row">
                <div class="col-md-4">
                  <div class="card ">
                    <img src={img2} class="card-img-top" alt="..." />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card">
                    <img src={img3} class="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
            </div>

            <strong>
              {" "}
              <p class="text-center">User persona and flow of the app </p>{" "}
            </strong>
          </div>

          <div>
            <p>
              One of the challenges we faced early on in the project was because
              the members of the team had to meet virtually and feedback was
              somewhat stalled because of this. However, after a brainstorming
              session held on zoom we were able to discover solutions to help us
              work together seamlessly from our different locations. I led a
              team to use Miro to prepare our wireframes based on the user flow
              generated in the initial phase, while another team focused on
              determining the resources needed and the general style of the
              product.
            </p>
          </div>

          <div>
            <div class="card-deck">
              <div class="card">
                <img src={img4} class="card-img-top" alt="..." />
              </div>
            </div>
            <strong>
              {" "}
              <p class="text-center">
                MIRO Is a great site for collaborating with teams virtually and
                has a wide range of templates to help designers work seamlessly.{" "}
              </p>{" "}
            </strong>
          </div>

          <div>
            <p>
              We harnessed the collaboration features on Figma to design screens
              and we constantly reiterated on the design to fit the users’
              expectations. This was a flaw in the work process because we did
              not use low fidelity prototypes to test our design decisions. As a
              result, we spent more time going over the screens and adjusting
              elements.
            </p>
          </div>

        
          <div>
            <div class="card-deck">
              <div class="row">
                <div class="col-md-6">
                  <div class="card ">
                    <img src={img5} class="card-img-top" alt="..." />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <img src={img6} class="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>
              This product is not a novel idea but by working on it from
              conception to the production of a high fidelity prototype (that is
              ready for testing and could be validated for the Nigerian market)
              my team and I were able to get important hands-on experience of
              working on a design thinking project.
              <br /> <br />
              Watch a video of the prototype below.
            </p>
          </div>

          <div class="card-deck">
            <div class="card mt-3 mb-3">
              <video id="background-video" controls height="400rem">
                <source src={vid1} type="video/mp4" />
              </video>
            </div>
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
    </>
  );
};

export default CaseStudyPricist;
