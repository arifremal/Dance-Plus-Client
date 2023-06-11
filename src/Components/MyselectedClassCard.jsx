import React from 'react';

const MyselectedClassCard = ({enroll,clsdelete}) => {
    const {image,name,price,seats,email,_id} = enroll;
    return (

<div className='pt-30'>
    <h1>My Selected Classes</h1>
<div className="card w-96 bg-base-100 shadow-xl image-full mt-20">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Seats {seats}</p>
    <div className="card-actions justify-end">
      <button onClick={() => clsdelete(_id)} className="btn btn-primary">Remove</button>
      <button className="btn btn-primary">Pay Now</button>
    </div>
  </div>
</div>
</div>
    );
};

export default MyselectedClassCard;