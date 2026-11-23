import { use, useState } from "react";
import { data } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Authentication(){
    
  const [student,setStudent]=useState({
    name:"",
    email:""
    ,password:"",
   
  })

 const { register, handleSubmit, formState: { errors } } = useForm();

   const handleChange = e =>{
    setStudent({ ...student, [e.target.name]:e.target.value});   
   
  };
 
  return (

    <>
   
    <form className="row g-3" action="https://mail.google.com/mail/u/0/#inbox">
      <div className="md:col-6">
    
    <input type="text" className="form-control" id="inputEmail4" name="name" value={student.name} onChange={handleChange}/>
  </div>
  <div className="md:col-6">
    
    <input type="email" className="form-control" id="inputEmail4"  name="email" value={student.email} onChange={handleChange}/>
  </div>
  <div className="md:col-6">
    
    <input type="password"  name="password" className="form-control" id="inputPassword4" 
    value={student.password} onChange={handleChange}/>
  
  </div>
   <div className="col-12">
    <button type="submit" className="btn-solid theme-primary">Sign in</button>
    </div>
</form>
    
    </>
  );
}

