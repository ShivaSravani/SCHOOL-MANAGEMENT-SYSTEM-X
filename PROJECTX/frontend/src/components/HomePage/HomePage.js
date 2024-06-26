import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
   
    <div className="container">
      <div className="image-container">
        <img src="https://img.freepik.com/free-vector/three-children-are-reading-books-stack-books_1308-102028.jpg?w=740&t=st=1714066984~exp=1714067584~hmac=f5a056b101036836e866d5f6a57165b191a5eba9dda82a4111a29513e39e22db" alt="" />
      </div>
      <div className="text-container">
        <h1><u>SCHOOL MANAGEMENT SYSTEM</u></h1>
        <p><h2>School Management System with everything you need, all brought together.</h2></p>
        <p><h3>Classter School Management System empowers parents by providing a comprehensive platform to engage with their child's education.
             With intuitive features tailored for parental involvement, Classter streamlines communication, offers real-time access to academic progress and activities, and cultivates a supportive educational environment. 
            Join us in nurturing your child's academic journey and fostering a strong sense of community within our school..</h3></p>
        <div className="login">
          <Link to="/login"><button className="get-started-button">Login</button>&nbsp;&nbsp; &nbsp;&nbsp;
          <Link to="/signup"><button className="get-started-button">Signup</button></Link></Link>
        
          <Link to="/student-enrollment"><button className="get-started-button">Enroll Now</button>&nbsp;&nbsp; &nbsp;&nbsp;
          <Link to="/Academics"><button className="get-started-button">Academics</button></Link>&nbsp;&nbsp; &nbsp;&nbsp;
          <Link to="/Grading"><button className="get-started-button">Grading</button></Link></Link>
          <Link to="/StaffManagement"><button className="get-started-button">StaffManagement</button>&nbsp;&nbsp; &nbsp;&nbsp;
      
          <Link to="/FeeManagement"><button className="get-started-button">FeeManagement</button></Link></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
