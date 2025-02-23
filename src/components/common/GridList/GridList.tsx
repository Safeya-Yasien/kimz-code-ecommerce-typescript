type TGridListProps<T> = {
  records: T[];
  renderItem: (item: T) => React.ReactNode;
  emptyMessage: string;
};

const GridList = <T,>({
  records,
  emptyMessage,
  renderItem,
}: TGridListProps<T>) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {records.length > 0 ? (
        records.map(renderItem)
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          {emptyMessage}
        </p>
      )}
    </div>
  );
};
export default GridList;
