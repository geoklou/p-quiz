import React from "react";
import { Link } from "react-router-dom";

const About = () =>

  <div>
   
    <div className="row">
      <div className="col-sm-6">

      <h2>About STEM Learning Prep</h2>
      <h4>Ever wonder how to prepare students for class, to help them understand basic, grounding concepts?</h4>
      <h4>This APP can help you gauge the general level of your students' prior knowledge. </h4>
    
      <Link to={"/form/"}> <h4>Create Questions</h4>
      <img src = {require('../../../src/arrow_a.png')} alt={"GO!"}/> 
      </Link>
      </div>

      <div className="col-sm-6">
        <img className="box" src={require('../../../src/road_star.png')} alt={"road map"}/>
        <q>“The best preparation for tomorrow is doing your best today.”
          </q>
      </div>

    </div>
  
  </div>;

export default About;