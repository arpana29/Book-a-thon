import React from 'react';
import Navbar from '../components/navbar';
import Course from '../components/Course';
import Footer from '../components/footer';



function Courses() {
   
   
    return (
        <>
        <Navbar />
         <div className=" min-h-screen" >
            <Course />
        </div>
        <Footer  />
            
           
        </>
    );
}

export default Courses;