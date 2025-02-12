import { Link } from "react-router";
import { TCategory } from "@/types";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/categories/products/${prefix}`} className="block">
        {/* Category Image */}
        <div className="w-full h-48 flex items-center justify-center bg-gray-100">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Category Title */}
        <h4 className="text-lg font-semibold text-center text-gray-800 mt-3 mb-2 group-hover:text-blue-500 transition">
          {title}
        </h4>
      </Link>
    </div>
  );
};

export default Category;
