import { ReactNode } from "react";
import CartSkeleton from "../skeletons/CartSkeleton";
import CategorySkeleton from "../skeletons/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

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
    return <LottieHandler type="error" message={error as string} />;
  }

  return <div>{children}</div>;
};
export default Loading;
