import { LottieHandler } from "@/components/feedback";

type TGridListProps<T> = {
  records: T[];
  renderItem: (item: T) => React.ReactNode;
  message: string;
};

const GridList = <T,>({ records, renderItem, message }: TGridListProps<T>) => {
  if (records.length === 0) {
    return <LottieHandler type="empty" message={message} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {records.map(renderItem)}
    </div>
  );
};
export default GridList;
