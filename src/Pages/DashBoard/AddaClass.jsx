import React from "react";

import { useForm } from 'react-hook-form';
import useAxios from "../../Hooks/UseAxios";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const AddaClass = () => {
    const[axiosSecure]= useAxios()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url= `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
  const formData = new FormData()
  formData.append('image',data.image[0])
  fetch(img_hosting_url,{
    method:'POST',
    body:formData
  }).then(res=> res.json())
  .then(imgRes=>{
    
    if(imgRes.success){
        const imgURL = imgRes.data.display_url;
        const {name,price,email,seats,InsturorName} = data;
        const item= {name,price: parseFloat(price) ,email,seats:parseFloat(seats),InsturorName,image:imgURL}
        console.log(item);
        axiosSecure.post('/class',item)
        .then(data=>{
            console.log('items post' , data);
            if(data.data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'class Successfully added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
  })
  
    console.log(errors); }
    
  return (
    <div>
      <h1>Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is your name ?</span>
          </label>
          <input
            type="text"
            {...register("InsturorName",)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is class name ?</span>
          </label>
          <input
            type="text"
            {...register("name",)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is your email ?</span>
          </label>
          <input
            type="text"
            {...register("email",)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Available Seat</span>

  </label>
  <select {...register("seats", { required: true })} className="select select-bordered">
    <option disabled selected>1</option>
    <option>2</option>
    <option>6</option>
    <option>8</option>
    <option>10</option>
    <option>20</option>
  </select>

</div>
<div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Add image</span>

  </label>
  <input type="file"{...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
  
</div>
<button className="btn btn-small mt-2"><input type="submit" value="Add Class" /></button>
      </form>
    </div>
  );
};

export default AddaClass;
