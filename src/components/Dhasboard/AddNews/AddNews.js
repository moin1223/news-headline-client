import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DhasboadSidebar from "../DhasboadSidebar/DhasboadSidebar";

const AddNews = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setIMageURL] =useState(null)
  const onSubmit = data => {

    const newsData = {
    name:data.name,
    title:data.title,
    author:data.author,
    description:data.description,
    category:data.category,
    imageURL:imageURL

    }

    const url = `https://protected-coast-24801.herokuapp.com/addNews`

        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newsData),
          
          
        })
       
       // .then(res=>console.log('server side response',res))


   // console.log(data)
  };





  const handleImageUpload = event =>{

    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key','a8630a61c226e1cd5552e6018232a737');
    imageData.append('image',event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
    imageData 
    )
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    
  }
  return (

    <>
      
      <section className="container-fluid row">
            <div className="col-md-4">
        < DhasboadSidebar></DhasboadSidebar>
            </div>
      

     <div className="container col-md-8 p-4 pr-5">
     <h3 className="m-5 text-center">Add a news</h3>


     <form onSubmit={handleSubmit(onSubmit)}>

<input   {...register("title")} className="form-control" placeholder=" News Title" /> <br/>
<input   {...register("author")} className="form-control" placeholder=" Author Name" /> <br/>
<input   {...register("description")} className="form-control" placeholder=" Description" /> <br/>
<input   {...register("category")} className="form-control" placeholder="Category" /> <br/>
<input {...register("exampleRequired", { required: true })} type="file" onChange={handleImageUpload}  className="form-control" /> <br/>
{errors.exampleRequired && <span>This field is required</span>}

<input type="submit" />
</form>

     </div>

    </section>
    </>
  );
};

export default AddNews;


