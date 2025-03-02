import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const renderSkeletons = Array.from({ length: 5 }).map((_, index) => {
    return (
      <ContentLoader
        key={index}
        speed={2}
        width={354}
        height={240}
        viewBox="0 0 354 240"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="w-full"
      >
        {/* Image Placeholder */}
        <rect x="0" y="0" rx="8" ry="8" width="354" height="140" />

        {/* Title Placeholder */}
        <rect x="75" y="150" rx="4" ry="4" width="150" height="20" />
      </ContentLoader>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {renderSkeletons}
    </div>
  );
};

export default CategorySkeleton;
