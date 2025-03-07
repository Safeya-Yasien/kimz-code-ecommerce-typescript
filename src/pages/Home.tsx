import { Heading } from "@/components/common";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Our Store
        </h1>
        <p className="text-gray-600 mt-2">
          Find the best deals on top-quality products.
        </p>
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate("/categories")}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="mt-12">
        <Heading title="Featured Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {/* Sample Product Cards */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="w-full h-40 bg-gray-200 rounded-md"></div>
              <h3 className="text-lg font-semibold mt-4">Product Name</h3>
              <p className="text-gray-600">Price: $XX.XX</p>
              <button className="mt-4 bg-green-500 text-white w-full">
                View Product
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="mt-16 text-center py-12 bg-blue-500 text-white rounded-lg">
        <h2 className="text-3xl font-bold">Get Exclusive Offers!</h2>
        <p className="mt-2">
          Sign up for our newsletter and receive special discounts.
        </p>
        <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
          Subscribe Now
        </button>
      </section>
    </div>
  );
};

export default Home;
