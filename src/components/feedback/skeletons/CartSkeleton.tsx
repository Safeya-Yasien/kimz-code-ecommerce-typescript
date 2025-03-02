import ContentLoader from "react-content-loader";

const CartSkeleton = () => {
  const renderSkeletons = Array.from({ length: 5 }).map((_, index) => {
    return (
      <ContentLoader
        key={index}
        speed={2}
        width={608}
        height={123}
        viewBox="0 0 608 123"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="w-full"
      >
        {/* Product Image Placeholder */}
        <rect x="10" y="15" rx="8" ry="8" width="90" height="90" />

        {/* Product Title Placeholder */}
        <rect x="120" y="20" rx="4" ry="4" width="250" height="20" />

        {/* Product Price Placeholder */}
        <rect x="120" y="50" rx="4" ry="4" width="100" height="20" />

        {/* Quantity Selector Placeholder */}
        <rect x="120" y="80" rx="4" ry="4" width="60" height="25" />

        {/* Remove Button Placeholder */}
        <rect x="550" y="40" rx="8" ry="8" width="40" height="40" />
      </ContentLoader>
    );
  });

  return (
    <div className="mt-10 space-y-6 max-w-3xl mx-auto">{renderSkeletons}</div>
  );
};

export default CartSkeleton;
