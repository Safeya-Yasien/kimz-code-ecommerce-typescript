import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
  const renderSkeletons = Array.from({ length: 5 }).map((_, index) => {
    return (
      <ContentLoader
        key={index}
        speed={2}
        width={354}
        height={376}
        viewBox="0 0 354 376"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="sm:w-full"
      >
        {/* Image Placeholder */}
        <rect x="0" y="0" rx="10" ry="10" width="354" height="200" />

        {/* Title Placeholder */}
        <rect x="10" y="215" rx="4" ry="4" width="180" height="20" />

        {/* Price Placeholder */}
        <rect x="10" y="245" rx="4" ry="4" width="100" height="20" />

        {/* Wishlist Button Placeholder */}
        <circle cx="260" cy="240" r="15" />

        {/* Quantity Notice Placeholder */}
        <rect x="10" y="280" rx="4" ry="4" width="180" height="15" />

        {/* Add to Cart Button Placeholder */}
        <rect x="10" y="320" rx="8" ry="8" width="272" height="40" />
      </ContentLoader>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {renderSkeletons}
    </div>
  );
};

export default ProductSkeleton;
