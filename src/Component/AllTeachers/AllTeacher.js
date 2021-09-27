import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList } from '@fortawesome/free-solid-svg-icons';
import './AllTeacher.css';

const AllTeacher = (props) => {
    // console.log(props);

    // destructuring
    const {name, age, img,  subject , salary ,designation} = props.teacher;


    // fontawesome icon
    const buttonIcon = <FontAwesomeIcon icon={faList} />

    return (
        <div className ="col-md-4">
           <div className ="teacher-card">
              <div className = "teacher-img ">
              <img src={img} alt="" />

              </div>

            <div>
            <h5>Name : {name}</h5>
              <h6>Age : {age}</h6>
              <h6>Designation : {designation}</h6>
              <h6>Subject : {subject}</h6>
              <h6>Salary : $ {salary}</h6>
              <button  onClick = {() => props.handleSalaryCart(props.teacher)} 
                className ="add-btn "> {buttonIcon}   AddToList </button>
            </div>

           </div>
            
        </div>
    );
};

export default AllTeacher;