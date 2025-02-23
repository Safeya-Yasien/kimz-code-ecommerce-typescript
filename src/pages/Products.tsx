import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@/store/products/productsSlice";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Product } from "@/components/eCommerece";
import { GridList, Heading } from "@/components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0, // Ensures each product has a quantity property, even if it's not in the cart.
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(cleanUpProductsRecords());
    };
  }, [dispatch, params.prefix]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title={"Products"} />

      {loading === "pending" && records.length > 0 ? (
        <p className="text-center text-gray-500">Loading new products...</p>
      ) : loading === "pending" ? (
        <p className="text-center text-xl font-semibold">Loading...</p>
      ) : records.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <GridList
          records={productsFullInfo}
          emptyMessage={"No products found."}
          renderItem={(product) => <Product key={product.id} {...product} />}
        />
      )}
    </div>
  );
};

export default Products;
