import React from "react";
import { Link } from "react-router-dom";
// import arrow from './arrow_a.png'; // relative path to image 
// import star from '../src/road_star.png'; // relative path to image 

const About = () =>

  <div>
   
    <div className="row">
    <div className="col-sm-6">

    <h2>About STEM Learning Prep</h2>
    <h4>Ever wonder how to prepare students for class, to help them understand basic, grounding concepts?</h4>
    <h4>This APP can help you gauge the general level of your students' prior knowledge. </h4>
  
    <Link to={"/form/"}> <h4>Create Questions</h4>
      {/* <img src = {arrow} />  */}
    </Link>
   </div>

    <div className="col-sm-6">
      {/* <img src = {star} /> 
      <img src={star} alt={"star"}/>  */}
    </div>

    </div>
  
  </div>;

export default About;