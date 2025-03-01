import { GridList, Heading } from "@/components/common";
import { TProduct } from "@/types";
import { Product } from "@/components/eCommerece";
import useWishlist from "@/hooks/useWishlist";

const Wishlist = () => {
  const { records } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Your Wishlist" />

      <GridList<TProduct>
        records={records}
        renderItem={(record) => <Product key={record.id} {...record} />}
        emptyMessage="No items found."
      />
    </div>
  );
};

export default Wishlist;
