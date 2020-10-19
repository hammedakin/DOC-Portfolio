import React from 'react';
import {Link} from 'react-router-dom'
import img from "./DOCLogo.png"



const PageNotFound = () => {
    return ( 

        <>
        <section class="pagenotfound text-center mt-5">
            <div class="container">
                <div class="">
                <img
                  
                  style={{  margin: "3rem" }}
                  width="100"
                  alt="DOCLogo"
                  src={img}
                />
                </div>
                <h1> Sorry, Page not found</h1>
                <h4 class="mt-5"> <Link to="/"> Click Here </Link> to go back Home</h4>
            </div>

        </section>
        </>
     );
}
 
export default PageNotFound;