import { GridList, Heading } from "@/components/common";
import { Category } from "@/components/eCommerece";
import useCategories from "@/hooks/useCategories";

const Categories = () => {
  const { records } = useCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Categories" />

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
