import React, { useEffect, useState } from 'react';
import AllTeacher from '../AllTeachers/AllTeacher';
import './Teachers.css';

const Teachers = () => {

    const [teachers , setTeachers] = useState([]);
// console.log(teachers);

useEffect(() =>{
    fetch('./fakeData.JSON')
    .then(res => res.json())
    .then(data =>setTeachers(data));
},[]);



    return (
        <div className ="row Teachers">
            <div className="col-md-9 teacher-card">
                   <div className="row">
{
    teachers.map(teacher => <AllTeacher   teacher ={teacher} key ={teacher.id}> </AllTeacher>)
}
                  </div>
            </div>
            <div className="col-md-3">
<h2>salary</h2>
            </div>
        </div>
    );
};

export default Teachers;