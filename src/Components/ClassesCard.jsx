import { useContext } from "react";
import { AuthContext } from "../Authproviders/AuthProvider";

const ClassesCard = ({ item }) => {
  const {user} = useContext(AuthContext)
  const handleAddtoCart = (item) => {
    console.log(item);
    if(user){
      fetch('http://localhost:5000/enrollled')
      .then(res=> res.json())
      .then(data =>{
        if(data.insertedId){
          
        }

      })
    }
  };

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
            <button
              onClick={() => handleAddtoCart(item)}
              className="btn  bg-yellow-400 text-black "
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
