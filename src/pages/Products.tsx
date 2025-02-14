import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetProductsByCatPrefix } from "@/store/products/productsSlice";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Product } from "@/components/eCommerece";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
  }, [dispatch, params]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Products
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      )}

      {/* Error State */}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {records.length > 0
          ? records.map((product) => <Product key={product.id} {...product} />)
          : !loading && (
              <p className="text-center text-gray-500 col-span-full">
                No products found.
              </p>
            )}
      </div>
    </div>
  );
};

export default Products;
