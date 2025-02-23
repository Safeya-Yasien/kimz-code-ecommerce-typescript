import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@/store/products/productsSlice";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Product } from "@/components/eCommerece";
import { GridList } from "@/components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(cleanUpProductsRecords());
    };
  }, [dispatch, params.prefix]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Products
      </h2>

      <GridList
        records={records}
        emptyMessage={"No products found."}
        renderItem={(product) => <Product key={product.id} {...product} />}
      />
    </div>
  );
};

export default Products;
