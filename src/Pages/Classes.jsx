import { useEffect, useState } from "react";
import ClassesCard from "../Components/ClassesCard";

const Classes = () => {
  const [myclass, setmyclass] = useState([]);
  useEffect(() => {
    fetch("https://dance-plus-server.vercel.app/class")
      .then((res) => res.json())
      .then((data) => setmyclass(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-50 sm:p-2">
        {myclass.map((item) => (
          <ClassesCard key={item._id} item={item}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
