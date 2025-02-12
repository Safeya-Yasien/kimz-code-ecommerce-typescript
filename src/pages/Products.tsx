import { Product } from "@/components/eCommerece";

const productsData = [
  {
    id: 1,
    title: "Smartphone",
    price: 299.99,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149.99,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    id: 3,
    title: "Laptop",
    price: 999.99,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Products
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
