import React from "react";
import img1 from "./User persona (2).PNG";
import img2 from "./Userflow.PNG";
import img3 from "./wireframe.PNG";
import img4 from "./Wireframe 2.PNG";
import img5 from "./Mockup1.png";
import img6 from "./Mockup 2.png";
import vid1 from "./Improving productivity Video.mp4";

const CaseStudyProductivity = () => {
  return (
    <>
      <section class="casestudy" id="casestudy">
        <div class="container text-justify">
          <div class="title mt-5 text-center">
            <h4> Improving Daily Productivity. </h4>
          </div>

          <div>
            <p>
              Daily productivity is important and most people often find it
              difficult to measure. After a survey among professionals between
              the age of 18 and 35, I found that 61% of respondents believe
              their method of daily planning is averagely successful, at best.
              It also showed that traditional productivity tools such as
              calendars, reminders, post-it notes, etc. often provide a means of
              tracking daily tasks but they are not very efficient in sustaining
              productivity. This led me to develop a concept design modification
              of the to-do list to a digital application that can help an
              individual improve their daily productivity through constant
              engagement and gamification. It also has possible applications in
              organizations for tracking and improving staff productivity.{" "}
              <br /> <br />
              The product development plan followed the user-centered
              methodology of design thinking. Initially, I took a survey using
              google forms to understand the needs of business professionals
              around time management. It helped me to understand the needs of
              this class of people and their expectations. The survey led to the
              development of the problem statement that busy professionals need
              a means of monitoring their daily goals because they want to
              understand how they have managed their time to ensure efficiency
              daily.
            </p>
          </div>

          <div class="card-deck">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
            </div>
          </div>

          <div>
            <p>
              To help me put the foregoing into more context, I developed a
              persona so that I can have a more relatable user in mind and user
              flow to help me clarify what the aim of the user of the product is
              and what steps they will go through to achieve this aim. <br />
              <br />
              While sharing my progress with a friend after developing the
              initial flow, she asked me ‘’so why can’t I just set a
              reminder?’’. This question made me realize the need for a
              differentiating factor that will ensure user engagement and
              retention. So back to the drawing board. <br /> <br />I set up a
              brainstorming session with a few friends where we discussed how to
              make daily tasks more engaging with the use of a digital product.
              At the end of the session, we came up with a new user flow that
              involved adding a reward-based system to the task flow and using a
              daily leader board system to drive competition among friends.
            </p>
          </div>

          <div class="card-deck">
            <div class="card">
              <img src={img2} class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <img src={img3} class="card-img-top" alt="..." />
            </div>
            <div class="card ">
              <img src={img4} class="card-img-top" alt="..." />
            </div>
          </div>

          <div>
            <p>
              This made the next step very straightforward, I scribbled a few
              simple wireframes to outline the user flow and refined them till I
              had a pretty decent idea of how the product will be laid out. Then
              I designed a high fidelity prototype of the product.
            </p>
          </div>

          <div>
            <div class="card-group">
              <div class="card">
                <img src={img5} class="card-img-top" alt="..." />
              </div>
              <div class="card">
                <img src={img6} class="card-img-top" alt="..." />
              </div>
            </div>
            <p>Below is a walk-through of the prototype.</p>
          </div>

          <div class="card-deck">
            <div class="card mt-3 mb-3">
              <video id="background-video" controls height="400rem">
                <source src={vid1} type="video/mp4" />
              </video>

            </div>
          </div>


          <div>
            <p>
              As you may have gathered, this was largely a project that I
              executed solo. This is because it was completed as part of course
              work for Interaction design foundations ‘’Design Thinking; A
              beginners guide’’ course, which I completed with a distinction for
              being in the top 10% of the class. I am working on testing the
              viability of this product through guerilla user testing. If it
              proves to be a viable product, I might just add a link to download
              the live product here. <br /> <br />
              Fingers crossed.
            </p>
          </div>

          <div class="card mt-5">
            <a type="button" class="btn btn-primary mx-auto shadow pl-4 pr-4 " href="#casestudy">
              BACK TO TOP
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyProductivity;
