import { ICategory } from "@models/category";
import { Link } from "react-router-dom";

const Category = ({ title, img, prefix }: ICategory) => {
  return (
    <div className="group max-w-xs rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl m-4">
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-300"></div>
        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold group-hover:text-yellow-400 transition duration-300">
          {title}
        </h2>
      </div>
      <Link
        to={`/categories/products/${prefix}`}
        className="block text-center mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        View {title} Category
      </Link>
    </div>
  );
};

export default Category;
