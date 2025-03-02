import { ReactNode } from "react";
import CartSkeleton from "../skeletons/CartSkeleton";
import CategorySkeleton from "../skeletons/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

type TLoadingProps = {
  children: ReactNode;
  status: string;
  error: null | string;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  children,
  status,
  error,
  type = "category",
}: TLoadingProps) => {
  const SkeletonComponent = skeletonsTypes[type];

  if (status === "pending") {
    return <SkeletonComponent />;
  }

  if (status === "failed") {
    return <div>error: {error}</div>;
  }

  return <div>{children}</div>;
};
export default Loading;
