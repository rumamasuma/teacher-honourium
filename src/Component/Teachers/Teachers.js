import React, { useEffect, useState } from 'react';
import AllTeacher from '../AllTeachers/AllTeacher';
import Salary from '../Salary-Sheet/Salary';
import './Teachers.css';

  const Teachers = () => {

  const [teachers , setTeachers] = useState([]);
console.log(teachers);

useEffect(() =>{
    fetch('./fakeData.JSON')
    .then(res => res.json())
    .then(data =>setTeachers(data));
},[]);

     // state for eventhandler
 const [salaryCart , setSalarayCart] = useState([]);
 

  // event handler
  const handleSalaryCart =(teacher) => {
//    console.log(teacher);
  const newSalaryCart = [...salaryCart , teacher];
      setSalarayCart(newSalaryCart);
     }
 
    return (
        <div className ="row teachers-container m-5">
            <div className="col-md-9 allTeacher-container">
                 <div className="row ">
              {
    teachers.map(teacher => <AllTeacher   
    teacher ={teacher} key ={teacher.id}
    handleSalaryCart= {handleSalaryCart} > 
    </AllTeacher>)
            }
              </div>
            </div>
            <div className="col-md-3 salary-container">

            <Salary  salaryCart = {salaryCart}>
            </Salary> 

            </div>
        </div>
    );
};

export default Teachers;