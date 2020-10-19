import React, {useState} from "react";
import img from "./DOCLogo.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <section class="login ">
        <div class="container text-center">
            
          <div class="title mt-3"> <strong>ADMIN LOGIN </strong></div>
          <div class="">
                <img
                  
                  style={{  margin: "3rem" }}
                  width="100"
                  alt="DOCLogo"
                  src={img}
                />
                </div>

          <div id="login">
            <div
              id="login-row"
              class="row  "
            >
              
                <div id="login-box" class="col-md-5 mx-auto">
                  <form id="login-form" class="form" action="" method="post">
                    <div class="md-form">
                      <label for="username" class="black-text">
                        Email
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="username"
                        class="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div class="md-form">
                      <label for="password" class="black-text">
                        Password
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <div class="md-form">
                
                      <br />
                      <input
                        type="submit"
                        name="Submit"
                        class="btn btn-color px-4 btn-md shadow"
                        value="SUBMIT"
                      />
                    
                    
                    </div>
                  </form>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
