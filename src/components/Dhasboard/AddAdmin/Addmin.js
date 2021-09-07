import React from "react";
import { useForm } from "react-hook-form";
import DhasboadSidebar from '../DhasboadSidebar/DhasboadSidebar'

const AddAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {

    const addminData = {
    email:data.email,
    password:data.password
   

    }

    const url = `https://shielded-hamlet-59568.herokuapp.com/addAdmin`

        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addminData ),
          
          
        })
       
       // .then(res=>console.log('server side response',res))


   // console.log(data)
  };





 
  return (

    <>
     <section className="container-fluid row">
            <div className="col-md-4">
        < DhasboadSidebar></DhasboadSidebar>
            </div>
      


     <div className="container col-md-8 p-4 pr-5">
     <h3 className="m-5 text-center">Add a Admin</h3>


     <form onSubmit={handleSubmit(onSubmit)}>

<input   {...register("email")} className="form-control" placeholder="Email" /> <br/>
<input   {...register("password")} className="form-control" placeholder="Password" /> <br/>

<input type="submit" />
</form>

     </div>

     </section>
    </>
  );
};

export default AddAdmin;


