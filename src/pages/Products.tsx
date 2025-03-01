import { Product } from "@/components/eCommerece";
import { GridList, Heading } from "@/components/common";
import useProducts from "@/hooks/useProducts";

const Products = () => {
  const { productsFullInfo, productPrefix } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title={`${productPrefix} Products`} />

      <GridList
        records={productsFullInfo}
        emptyMessage={"No products found."}
        renderItem={(product) => <Product key={product.id} {...product} />}
      />
    </div>
  );
};

export default Products;
