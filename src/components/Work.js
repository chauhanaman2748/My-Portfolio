import "./WorkCard.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import WebAppData from "./WebAppData";
import AnalysisData from "./AnalysisData";
import OtherAppData from "./OtherAppData";
import React from 'react'

const Work = () => {
  return (
    <div className="work-container" id="work">
      <h1 className="project-heading">Projects</h1>
      <h3 className="sub-head">Take a look at some of my recent projects</h3>
      {/* <h3 className="sub-head">Mobile Application Developent</h3> */}
      <div className="project-container">
        {WorkCardData.map((val, ind) =>{
            return(
                <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                />
            )
        })}
      </div>
      {/* <h3 className="sub-head">Web Application Developent</h3>
      <div className="project-container">
        {WebAppData.map((val, ind) =>{
            return(
                <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                />
            )
        })}
      </div>
      <h3 className="sub-head">Data Analysis</h3>
      <div className="project-container">
        {AnalysisData.map((val, ind) =>{
            return(
                <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                />
            )
        })}
      </div>
      <h3 className="sub-head">Other Apps</h3>
      <div className="project-container">
        {OtherAppData.map((val, ind) =>{
            return(
                <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                />
            )
        })}
      </div> */}
    </div>
  );
};

export default Work