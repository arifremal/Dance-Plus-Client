import { useEffect, useState } from "react";
import InstructorsCard from "../Components/InstructorsCard";

const InstructorPage = () => {
  const [ourinstructors, setOurinstructors] = useState([]);
  useEffect(() => {
    fetch("https://dance-plus-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setOurinstructors(data));
  }, []);
  return (
    <div>
      <h2 className="text-center font-extrabold text-2xl pb-10 py-20">
        Our Instructors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 sm:p-2">
        {ourinstructors.map((item) => (
          <InstructorsCard key={item._id} item={item}></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
