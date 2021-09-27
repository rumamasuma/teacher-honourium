import React from 'react';
import "./Header.css";
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className ="header d-flex ">
           <div>
           <img  className="logo mx-4"  src={logo}  alt=""  />
           </div>
           <div>
             <h1> Central Womens  Science & Technology University</h1>
            <h4> “Education is the most powerful weapon which you can use to change the world” – Nelson Mandela</h4>
            <h3><i>Monthly Teachers Honourium : 29500 Million</i></h3>
            </div>
        </div>
    );
};

export default Header;