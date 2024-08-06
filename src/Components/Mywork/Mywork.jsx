import React from 'react'
import "./Mywork.css";
import theme_patter from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import mywork_data from '../../assets/mywork_data';

function Mywork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_patter} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return<img key={index} src={work.w_img} alt=''/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork