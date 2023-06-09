import React from 'react';

const ClassCard = ({item}) => {
    const {image,name,subTitle} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="class" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold uppercase">
      {name}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p>{subTitle}</p>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div> */}
    </div>
  </div>
</div>
    );
};

export default ClassCard;