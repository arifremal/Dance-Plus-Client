import { useEffect, useState } from "react";

const useItems = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("class.json").then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, []);
  return [item, loading];
};
export default useItems;
