import actGetCategories from "@store/categories/actGetCategories";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = dispatch(actGetCategories());
    console.log("res", res);
  }, []);

  return <div>Categories</div>;
};

export default Categories;
