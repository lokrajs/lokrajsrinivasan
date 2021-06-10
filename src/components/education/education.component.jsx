import React from 'react';


import './education.styles.scss';

const Education = ({imageUrl, name, degree, major, specialization,grad}) => { 
    console.log(degree)
    return(
        <div className = 'education-item'>
            <div className='img-container'>
            <img src = {imageUrl} alt ={name} ></img>
            </div>
            <div className='education-description'> 
            <ul>
                <li><span> <b>Degree:</b> {degree}</span></li>
                <li><span><b>Major:</b> {major}</span></li>
                <li> <span><b>Graduation Date:</b> {grad}</span></li>
                <li><span> <b>Specialization:</b> {specialization}</span></li>

            </ul>
                {/* <span> <b>Degree:</b> {degree}</span>
                <span><b>Major:</b> {major}</span>
                <span><b>Graduation Date:</b> {grad}</span>
                <span> <b>Specialization:</b> {specialization}</span> */}
            </div>
        </div>
    )

};

export default Education;