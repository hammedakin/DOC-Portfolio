import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="mb-3 mt-5 ml-auto">
              <a href="https://www.behance.net/otunbadave" target="_blank" >
                <box-icon class="box-icon" size='2rem' color=" #0197F6" type="logo" name="behance"></box-icon>
              </a>

              <a href="https://dribbble.com/otunba_creations" target="_blank" >
                <box-icon class="box-icon" size='2rem' color=" #0197F6" name="dribbble" type="logo"></box-icon>
              </a>

              <a href="https://www.linkedin.com/in/davidomogunsoye/" target="_blank" >
                <box-icon class="box-icon" size='2rem' color=" #0197F6" name="linkedin" type="logo"></box-icon>
              </a>

              <a href="mailto:davidogunsoye@outlook.com" target="_blank" >
                <box-icon class="box-icon" size='2rem' color=" #0197F6" name="envelope"></box-icon>
              </a>

              <a href="https://twitter.com/Otunba_dave_12" target="_blank" >
                <box-icon class="box-icon" size='2rem' color=" #0197F6" name="twitter" type="logo"></box-icon>
              </a>
            </div>
          </div>
        </div>
        <section class="footer">
          <footer className="page-footer">
            <div class="footer-copyright white-text text-center py-3">
              <div style={{ fontSize: "smaller" }}>
                Developed with <span className="red-text">
                  ❤ </span>by
                <a href="https://hammedakin.xyz" class="border-bottom ">
                  {" "}
                  hammedakin.xyz{" "}
                </a>
              </div>
            </div>
          </footer>
        </section>
      </footer>
    </>
  );
};

export default Footer;
