import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const PopularClass = () => {
  const [ourclss, setOurClass] = useState([]);
  useEffect(() => {
    fetch("class.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item=> item.category ==='popular')
        setOurClass(popularItems)});
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 sm:p-2 ">
        {ourclss.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
