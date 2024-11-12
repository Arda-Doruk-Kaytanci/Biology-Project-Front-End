import React from "react";
function Contributer(props) {
    return (
        <div className="contributer-person-container">
            <h1 className="name-of-cont">{props.name}</h1>
            <img src={props.image} alt="contributer" className="cont-image"/>
            <h2 className="job-of-cont">{props.job1}</h2>
            {props.job2 && <h2 className="job-of-cont">{props.job2}</h2>}
        </div>
    )
}
export default Contributer