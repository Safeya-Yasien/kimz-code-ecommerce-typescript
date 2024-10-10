import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import actGetCategories from "@store/categories/actGetCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, error, loading } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList =
    records.length > 0
      ? records.map((record) => <Category key={record.id} {...record} />)
      : "There are no categories";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <Loading error={error} status={loading}>
        {categoriesList}
      </Loading>
    </div>
  );
};

export default Categories;
