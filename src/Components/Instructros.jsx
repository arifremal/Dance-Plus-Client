import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructros = () => {
    const [ourinstructor,setOurinstructor] =useState([])
  useEffect(() => { 
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => setOurinstructor(data));
  }, []);
    return (
      <div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 sm:p-2 ">
{
  ourinstructor.map(item=> <InstructorCard
  key={item._id}
  item={item}
  
  ></InstructorCard>)
}
</div>

      </div>
    );
};

export default Instructros;