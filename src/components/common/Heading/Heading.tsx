import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center capitalize">
      {title}
    </h2>
  );
});
export default Heading;
