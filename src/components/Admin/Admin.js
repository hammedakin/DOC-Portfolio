import React, {useState} from "react";
import img from "./DOCLogo.png"
import axios from 'axios'

const Admin = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

   const addArticle=(e)=>{
    e.preventDefault()
    axios.post('https://doc-website.herokuapp.com/article',{
      title:title,
      articleLink:link,
      imageUrl:image,

    }).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <>
      <section class="login ">
        <div class="container text-center">
            
          <div class="title mt-3"> <h1> <strong>ADMIN PAGE </strong> </h1> </div>
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
              
                <div id="login-box" class="col-md-8 mx-auto">
                  <form id="login-form" onSubmit={addArticle} class="form" encType="multipart/form-data" >
                    <div class="md-form">
                      <label for="title" class="black-text">
                        TITLE
                      </label>
                      <br />
                      <input
                        type="text"
                        name="title"
                        id="username"
                        class="form-control"
                        value={title}
                        
                        onChange={(event) => setTitle(event.target.value)}
                      />
                    </div>
                    <div class="md-form">
                      <label for="link" class="black-text">
                        LINK
                      </label>
                      <br />
                      <input
                        type="url"
                        name="link"
                        id="link"
                        class="form-control"
                        value={link}
                        onChange={(event) => setLink(event.target.value)}
                      />
                    </div>

                    <div class="md-form">
                      <label for="image" class="black-text">
                        IMAGE
                      </label>
                      <br /><br/>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        class="form-control"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
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

export default Admin;
