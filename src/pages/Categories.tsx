import { Category } from "@/components/eCommerece";
import actGetCategories from "@/store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Categories
      </h2>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {records?.map((category) => (
          <Category key={category.prefix} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
