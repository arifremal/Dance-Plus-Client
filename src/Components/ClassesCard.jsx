import React from "react";

const ClassesCard = ({ item }) => {
  const { image, name, subTitle, email } = item;
  return (
    <div className="pt-20">
        <div className="card w-96 bg-white pt-30 ">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl object-cover " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-start">{name}</h2>
        <p className="">{subTitle}</p>
        <p className="">Email: {email}</p>
        <div className="card-actions">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClassesCard;
