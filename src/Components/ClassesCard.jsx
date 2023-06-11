import React from "react";

const ClassesCard = ({ item }) => {
  const { image, name, InsturorName, email, price, seats } = item;
  return (
    <div className="pt-20">
      <div className="card w-96 bg-white pt-30 ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl object-cover " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-start">{name}</h2>
          <p className="">{InsturorName}</p>
          <p className="">Email: {email}</p>
          <div className="flex justify-between ">
           
              <p className="me-10">seats: {seats}</p>
            
         
              <p className="">Price: {price}</p>
           
          </div>
          <div className="card-actions">
            <button className="btn  bg-yellow-400 text-black ">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
