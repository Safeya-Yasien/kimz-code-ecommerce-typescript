const TableSkeleton = () => {
  return (
    <div className="w-full border-collapse bg-white rounded-lg shadow-sm">
      <div className="animate-pulse">
        {/* Table Header Skeleton */}
        <div className="bg-gray-200 p-3">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>

        {/* Table Body Skeleton */}
        <div className="divide-y">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-3 flex items-center space-x-4">
              <div className="h-6 bg-gray-300 rounded w-1/6"></div>
              <div className="h-6 bg-gray-300 rounded w-1/3"></div>
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
