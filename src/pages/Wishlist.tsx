import { GridList, Heading } from "@/components/common";
import { TProduct } from "@/types";
import { Product } from "@/components/eCommerece";
import useWishlist from "@/hooks/useWishlist";
import { Loading } from "@/components/feedback";

const Wishlist = () => {
  const { records, error, loading } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Your Wishlist" />

      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product key={record.id} {...record} />}
          emptyMessage="No items found."
        />
      </Loading>
    </div>
  );
};

export default Wishlist;
