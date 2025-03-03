import { GridList, Heading } from "@/components/common";
import { Category } from "@/components/eCommerece";
import { Loading } from "@/components/feedback";
import useCategories from "@/hooks/useCategories";

const Categories = () => {
  const { records, loading, error } = useCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Categories" />

      <Loading status={loading} error={error} type="category">
        {/* Categories Grid */}
        <GridList
          records={records}
          message="there are no categories"
          renderItem={(category) => (
            <Category key={category.id} {...category} />
          )}
        />
      </Loading>
    </div>
  );
};

export default Categories;
