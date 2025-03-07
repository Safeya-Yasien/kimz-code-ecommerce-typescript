import { useNavigate } from "react-router";

import { GridList, Heading } from "@/components/common";
import useCategories from "@/hooks/useCategories";
import { Loading } from "@/components/feedback";
import { Category } from "@/components/eCommerece";

const Home = () => {
  const navigate = useNavigate();
  const { records, loading, error } = useCategories();
  const featuredCategories = records.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
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
        <Loading status={loading} error={error} type="category">
          {/* Categories Grid */}
          <GridList
            records={featuredCategories}
            message="there are no categories"
            renderItem={(category) => (
              <Category key={category.id} {...category} />
            )}
          />
        </Loading>
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
