import { GridList, Heading } from "@/components/common";
import { Category } from "@/components/eCommerece";
import actGetCategories from "@/store/categories/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading>Categories</Heading>

      {/* Categories Grid */}
      <GridList
        records={records}
        emptyMessage="there are no categories"
        renderItem={(category) => <Category key={category.id} {...category} />}
      />
    </div>
  );
};

export default Categories;
