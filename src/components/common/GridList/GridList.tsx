import { ReactNode } from "react";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => ReactNode;
};

const GridList = <T,>({ records, renderItem }: TGridListProps<T>) => {
  const productsList =
    records.length > 0
      ? records.map((record) => renderItem(record))
      : "There are no categories";
  return <> {productsList}</>;
};

export default GridList;
