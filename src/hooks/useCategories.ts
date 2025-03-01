import actGetCategories from "@/store/categories/act/actGetCategories";
import { categoriesRecordsCleanUp } from "@/store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());

    return () => {
      dispatch(categoriesRecordsCleanUp());
    }; 
  }, [dispatch]);

  return { records };
};

export default useCategories;
