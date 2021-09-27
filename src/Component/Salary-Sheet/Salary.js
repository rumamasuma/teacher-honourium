import React from 'react';
import './Salary.css';

const Salary = (props) => {

    // total salary
    const {salaryCart} = props;
    let totalSalary = 0;
    for(const teacher of salaryCart){
        totalSalary = totalSalary + teacher.salary;
    }
    
    return (
        <div className = 'salary-cart '>
            <h3>Teachers Salary List</h3>
             <h4>Teachers Added : {props.salaryCart.length}</h4>
              <h4>Total Salary : ${totalSalary} </h4>
           {
              
         salaryCart.map(nameList => <h5><i> {nameList.name} </i></h5> )
                     
           }
               
           </div>
    );
};

export default Salary;