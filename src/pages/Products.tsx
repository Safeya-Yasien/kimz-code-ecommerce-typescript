import { Product } from "@/components/eCommerece";
import { GridList, Heading } from "@/components/common";
import useProducts from "@/hooks/useProducts";
import { Loading } from "@/components/feedback";

const Products = () => {
  const { productsFullInfo, productPrefix, loading, error } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title={`${productPrefix} Products`} />

      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          emptyMessage={"No products found."}
          renderItem={(product) => <Product key={product.id} {...product} />}
        />
      </Loading>
    </div>
  );
};

export default Products;
